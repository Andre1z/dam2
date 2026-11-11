// API C de AndreiBBDD para Windows (andreibbdd.dll).
//
// En Linux, PHP usa la extensión nativa (src/conector_php.cpp). En Windows,
// XAMPP no puede cargar esa extensión, así que PHP carga esta DLL con FFI
// (UI/andreibbdd_ffi.php). Para que FFI solo tenga que declarar dos funciones,
// todas las operaciones pasan por una única entrada:
//
//   char* andreibbdd_llamar(const char* funcion, const char* argumentos_json);
//   void  andreibbdd_liberar(char* texto);
//
// `argumentos_json` es un array JSON con los parámetros. La respuesta es
// {"ok":true,"resultado":...} o {"ok":false,"error":"..."} y debe liberarse
// con andreibbdd_liberar. Cada función reproduce exactamente lo que devuelve
// la función equivalente de conector_php.cpp (mismos nombres sin el prefijo
// andreibbdd_). El valor NULL viaja como JSON null y se guarda con el
// marcador interno __ANDREI_NULL__.
#include <json-c/json.h>

#include <cstdlib>
#include <cstring>
#include <functional>
#include <map>
#include <memory>
#include <stdexcept>
#include <string>
#include <vector>

#include "AndreiBBDD.hpp"

#ifdef _WIN32
#define ANDREIBBDD_EXPORT extern "C" __declspec(dllexport)
#else
#define ANDREIBBDD_EXPORT extern "C" __attribute__((visibility("default")))
#endif

namespace {

const char* const MARCADOR_NULL = "__ANDREI_NULL__";

std::unique_ptr<AndreiBBDD> g_motor;
std::string g_config = "config.json";

AndreiBBDD& motor() {
    if (!g_motor) g_motor = std::make_unique<AndreiBBDD>(g_config);
    return *g_motor;
}

/* ---------- Argumentos ---------- */
struct Argumentos {
    json_object* lista;

    size_t cantidad() const { return json_object_array_length(lista); }

    json_object* en(size_t i) const { return json_object_array_get_idx(lista, i); }

    std::string texto(size_t i) const {
        if (i >= cantidad()) throw std::runtime_error("Faltan argumentos");
        json_object* v = en(i);
        if (!v) return "";
        const char* s = json_object_get_string(v);
        return s ? s : "";
    }

    std::string textoOpcional(size_t i, const std::string& defecto) const {
        return i < cantidad() ? texto(i) : defecto;
    }

    long long entero(size_t i) const {
        if (i >= cantidad()) throw std::runtime_error("Faltan argumentos");
        return static_cast<long long>(json_object_get_int64(en(i)));
    }

    // Igual que php_array_strings: null -> marcador, el resto como texto.
    std::vector<std::string> listaTextos(size_t i) const {
        if (i >= cantidad()) throw std::runtime_error("Faltan argumentos");
        json_object* a = en(i);
        std::vector<std::string> r;
        if (json_object_is_type(a, json_type_array)) {
            for (size_t k = 0; k < json_object_array_length(a); ++k) {
                json_object* v = json_object_array_get_idx(a, k);
                r.emplace_back(v ? json_object_get_string(v) : MARCADOR_NULL);
            }
        } else if (json_object_is_type(a, json_type_object)) {
            json_object_object_foreach(a, clave, valor) {
                (void)clave;
                r.emplace_back(valor ? json_object_get_string(valor) : MARCADOR_NULL);
            }
        } else {
            throw std::runtime_error("Se esperaba un array");
        }
        return r;
    }

    // Igual que php_assoc_strings: solo claves de texto.
    std::map<std::string, std::string> mapaTextos(size_t i) const {
        if (i >= cantidad()) throw std::runtime_error("Faltan argumentos");
        json_object* o = en(i);
        std::map<std::string, std::string> r;
        if (json_object_is_type(o, json_type_object)) {
            json_object_object_foreach(o, clave, valor) {
                r[clave] = valor ? json_object_get_string(valor) : MARCADOR_NULL;
            }
        } else if (!json_object_is_type(o, json_type_array)) {
            throw std::runtime_error("Se esperaba un array");
        }
        return r;
    }
};

/* ---------- Resultados ---------- */
json_object* valor(const std::string& v) {
    return v == MARCADOR_NULL ? nullptr : json_object_new_string_len(v.data(), static_cast<int>(v.size()));
}

json_object* textos(const std::vector<std::string>& xs) {
    json_object* a = json_object_new_array();
    for (const auto& x : xs) json_object_array_add(a, json_object_new_string_len(x.data(), static_cast<int>(x.size())));
    return a;
}

json_object* mapa(const std::map<std::string, std::string>& m) {
    // PHP devuelve [] (array vacío) cuando no hay datos; un objeto vacío
    // también se decodifica como array vacío con json_decode(..., true).
    json_object* o = json_object_new_object();
    for (const auto& [k, v] : m) json_object_object_add(o, k.c_str(), valor(v));
    return o;
}

json_object* filas(const std::vector<std::map<std::string, std::string>>& fs) {
    json_object* a = json_object_new_array();
    for (const auto& f : fs) json_object_array_add(a, mapa(f));
    return a;
}

json_object* booleano(bool b) { return json_object_new_boolean(b); }
json_object* entero(long long n) { return json_object_new_int64(n); }
json_object* cadena(const std::string& s) { return json_object_new_string_len(s.data(), static_cast<int>(s.size())); }

TipoDato tipoDesdeTexto(std::string x) {
    for (auto& c : x) c = static_cast<char>(std::toupper(static_cast<unsigned char>(c)));
    if (x == "ENTERO" || x == "INT") return TipoDato::ENTERO;
    if (x == "REAL" || x == "FLOAT") return TipoDato::REAL;
    if (x == "DECIMAL" || x == "NUMERICO") return TipoDato::DECIMAL;
    if (x == "FECHA" || x == "DATE") return TipoDato::FECHA;
    if (x == "BOOLEANO" || x == "BOOL") return TipoDato::BOOLEANO;
    return TipoDato::TEXTO;
}

const char* nombreTipo(TipoDato t) {
    return t == TipoDato::ENTERO     ? "ENTERO"
           : t == TipoDato::REAL     ? "REAL"
           : t == TipoDato::BOOLEANO ? "BOOLEANO"
           : t == TipoDato::FECHA    ? "FECHA"
           : t == TipoDato::DECIMAL  ? "DECIMAL"
                                     : "TEXTO";
}

using Funcion = std::function<json_object*(const Argumentos&)>;

const std::map<std::string, Funcion>& funciones() {
    static const std::map<std::string, Funcion> tabla = {
        /* Configuración / bases */
        {"configurar", [](const Argumentos& a) {
             g_config = a.texto(0);
             g_motor = std::make_unique<AndreiBBDD>(g_config);
             return booleano(true);
         }},
        {"configuracion", [](const Argumentos&) {
             json_object* o = json_object_new_object();
             json_object_object_add(o, "instalacion", cadena(motor().instalacion));
             json_object_object_add(o, "base", cadena(motor().basededatos));
             json_object_object_add(o, "tamanoRegistro", entero(static_cast<long long>(motor().tamanoRegistro)));
             return o;
         }},
        {"crear_base", [](const Argumentos& a) { return booleano(motor().creaBaseDatos(a.texto(0))); }},
        {"usar_base", [](const Argumentos& a) { return booleano(motor().usaBaseDatos(a.texto(0))); }},
        {"listar_bases", [](const Argumentos&) { return textos(motor().listarBases()); }},
        {"eliminar_base", [](const Argumentos& a) { return booleano(motor().eliminarBaseDatos(a.texto(0))); }},

        /* Tablas / introspección */
        {"listar_tablas", [](const Argumentos&) { return textos(motor().listarTablas()); }},
        {"crear_tabla", [](const Argumentos& a) { return booleano(motor().creaTabla(a.texto(0), a.texto(1))); }},
        {"crear_tabla_tipada", [](const Argumentos& a) {
             std::vector<DefinicionColumna> d;
             json_object* o = a.cantidad() > 1 ? a.en(1) : nullptr;
             if (json_object_is_type(o, json_type_object)) {
                 json_object_object_foreach(o, clave, valor) {
                     const char* t = valor ? json_object_get_string(valor) : "";
                     d.push_back({clave, tipoDesdeTexto(t ? t : "")});
                 }
             } else if (!json_object_is_type(o, json_type_array)) {
                 throw std::runtime_error("Se esperaba un array de columnas");
             }
             return booleano(motor().creaTablaTipada(a.texto(0), d));
         }},
        {"esquema", [](const Argumentos& a) { return textos(motor().obtenerEsquema(a.texto(0))); }},
        {"tipos", [](const Argumentos& a) {
             json_object* o = json_object_new_object();
             for (const auto& [k, v] : motor().obtenerTipos(a.texto(0))) json_object_object_add(o, k.c_str(), cadena(nombreTipo(v)));
             return o;
         }},
        {"clave_primaria", [](const Argumentos& a) { return cadena(motor().obtenerClavePrimaria(a.texto(0))); }},
        {"claves_foraneas", [](const Argumentos& a) {
             json_object* r = json_object_new_array();
             for (const auto& fk : motor().obtenerClavesForaneas(a.texto(0))) {
                 json_object* d = json_object_new_object();
                 json_object_object_add(d, "columna", cadena(fk.columna));
                 json_object_object_add(d, "tabla_referenciada", cadena(fk.tablaReferenciada));
                 json_object_object_add(d, "columna_referenciada", cadena(fk.columnaReferenciada));
                 json_object_array_add(r, d);
             }
             return r;
         }},
        {"restricciones", [](const Argumentos& a) {
             auto r = motor().obtenerRestricciones(a.texto(0), a.texto(1));
             json_object* o = json_object_new_object();
             json_object_object_add(o, "no_nulo", booleano(r.noNulo));
             json_object_object_add(o, "unico", booleano(r.unico));
             json_object_object_add(o, "tiene_defecto", booleano(r.tieneDefecto));
             json_object_object_add(o, "valor_defecto", r.tieneDefecto ? cadena(r.valorDefecto) : nullptr);
             return o;
         }},
        {"siguiente_id", [](const Argumentos& a) { return entero(motor().siguienteId(a.texto(0))); }},
        {"truncar_tabla", [](const Argumentos& a) { return booleano(motor().truncarTabla(a.texto(0))); }},
        {"eliminar_tabla", [](const Argumentos& a) { return booleano(motor().eliminarTabla(a.texto(0))); }},

        /* ALTER */
        {"alterar_anadir", [](const Argumentos& a) { return booleano(motor().alteraTablaAnadir(a.texto(0), a.texto(1))); }},
        {"alterar_eliminar_columna", [](const Argumentos& a) { return booleano(motor().alteraTablaEliminarColumna(a.texto(0), a.texto(1))); }},
        {"alterar_renombrar_columna", [](const Argumentos& a) { return booleano(motor().alteraTablaRenombrarColumna(a.texto(0), a.texto(1), a.texto(2))); }},
        {"alterar_modificar_columna", [](const Argumentos& a) { return booleano(motor().alteraTablaModificarColumna(a.texto(0), a.texto(1), a.texto(2))); }},

        /* CRUD */
        {"insertar", [](const Argumentos& a) { return entero(motor().insertarDatos(a.texto(0), a.listaTextos(1))); }},
        {"insertar_columnas", [](const Argumentos& a) { return entero(motor().insertarConColumnas(a.texto(0), a.listaTextos(1), a.listaTextos(2))); }},
        {"insertar_desde", [](const Argumentos& a) { return entero(motor().insertarDesdeSeleccion(a.texto(0), a.texto(1))); }},
        {"seleccionar", [](const Argumentos& a) { return mapa(motor().seleccionar(a.texto(0), a.entero(1))); }},
        {"listar", [](const Argumentos& a) { return filas(motor().listarTodo(a.texto(0))); }},
        {"buscar", [](const Argumentos& a) { return filas(motor().buscarColumna(a.texto(0), a.texto(1), a.texto(2))); }},
        {"actualizar", [](const Argumentos& a) { return booleano(motor().actualizar(a.texto(0), a.entero(1), a.listaTextos(2))); }},
        {"eliminar", [](const Argumentos& a) { return booleano(motor().eliminar(a.texto(0), a.entero(1))); }},
        {"actualizar_donde", [](const Argumentos& a) {
             return entero(motor().actualizarDonde(a.texto(0), a.mapaTextos(1), a.textoOpcional(2, ""), a.textoOpcional(3, "")));
         }},
        {"eliminar_donde", [](const Argumentos& a) {
             return entero(motor().eliminarDonde(a.texto(0), a.textoOpcional(1, ""), a.textoOpcional(2, "")));
         }},

        /* Relaciones / restricciones */
        {"anadir_clave_foranea", [](const Argumentos& a) {
             return booleano(motor().anadirClaveForanea(a.texto(0), a.texto(1), a.texto(2), a.textoOpcional(3, "id")));
         }},
        {"establecer_no_nulo", [](const Argumentos& a) { return booleano(motor().establecerNoNulo(a.texto(0), a.texto(1))); }},
        {"establecer_unico", [](const Argumentos& a) { return booleano(motor().establecerUnico(a.texto(0), a.texto(1))); }},
        {"establecer_por_defecto", [](const Argumentos& a) { return booleano(motor().establecerPorDefecto(a.texto(0), a.texto(1), a.texto(2))); }},

        /* Consultas */
        {"consultar", [](const Argumentos& a) {
             auto r = motor().consultar(a.texto(0));
             json_object* lista = json_object_new_array();
             for (const auto& f : r.filas) {
                 json_object* fila = json_object_new_object();
                 for (size_t i = 0; i < r.columnas.size() && i < f.size(); ++i)
                     json_object_object_add(fila, r.columnas[i].c_str(), valor(f[i]));
                 json_object_array_add(lista, fila);
             }
             return lista;
         }},
        {"explicar", [](const Argumentos& a) { return cadena(motor().explicar(a.texto(0))); }},

        /* Índices */
        {"crear_indice", [](const Argumentos& a) { return booleano(motor().crearIndice(a.texto(0), a.texto(1), a.texto(2))); }},
        {"eliminar_indice", [](const Argumentos& a) { return booleano(motor().eliminarIndice(a.texto(0), a.texto(1))); }},
        {"indices", [](const Argumentos& a) {
             json_object* r = json_object_new_array();
             for (const auto& i : motor().listarIndices(a.texto(0))) {
                 json_object* d = json_object_new_object();
                 json_object_object_add(d, "nombre", cadena(i.nombre));
                 json_object_object_add(d, "columna", cadena(i.columna));
                 json_object_array_add(r, d);
             }
             return r;
         }},

        /* Vistas */
        {"crear_vista", [](const Argumentos& a) { return booleano(motor().crearVista(a.texto(0), a.texto(1))); }},
        {"eliminar_vista", [](const Argumentos& a) { return booleano(motor().eliminarVista(a.texto(0))); }},
        {"listar_vistas", [](const Argumentos&) { return textos(motor().listarVistas()); }},

        /* Transacciones */
        {"iniciar_transaccion", [](const Argumentos&) { return booleano(motor().iniciarTransaccion()); }},
        {"confirmar", [](const Argumentos&) { return booleano(motor().confirmarTransaccion()); }},
        {"deshacer", [](const Argumentos&) { return booleano(motor().deshacerTransaccion()); }},
        {"en_transaccion", [](const Argumentos&) { return booleano(motor().enTransaccion()); }},

        /* Colecciones */
        {"crear_subcoleccion", [](const Argumentos& a) { return booleano(motor().crearSubcoleccion(a.texto(0), a.texto(1))); }},
        {"mover_coleccion", [](const Argumentos& a) { return booleano(motor().moverColeccion(a.texto(0), a.texto(1))); }},
        {"subcolecciones_de", [](const Argumentos& a) { return textos(motor().subcoleccionesDe(a.texto(0))); }},
        {"tablas_coleccion_recursiva", [](const Argumentos& a) { return textos(motor().tablasDeColeccionRecursiva(a.texto(0))); }},
        {"arbol_colecciones", [](const Argumentos&) { return cadena(motor().arbolColecciones()); }},
        {"crear_coleccion", [](const Argumentos& a) { return booleano(motor().crearColeccion(a.texto(0))); }},
        {"eliminar_coleccion", [](const Argumentos& a) { return booleano(motor().eliminarColeccion(a.texto(0))); }},
        {"agregar_tabla_coleccion", [](const Argumentos& a) { return booleano(motor().agregarTablaColeccion(a.texto(0), a.texto(1))); }},
        {"quitar_tabla_coleccion", [](const Argumentos& a) { return booleano(motor().quitarTablaColeccion(a.texto(0), a.texto(1))); }},
        {"listar_colecciones", [](const Argumentos&) { return textos(motor().listarColecciones()); }},
        {"tablas_de_coleccion", [](const Argumentos& a) { return textos(motor().tablasDeColeccion(a.texto(0))); }},
        {"colecciones_de_tabla", [](const Argumentos& a) { return textos(motor().coleccionesDeTabla(a.texto(0))); }},
    };
    return tabla;
}

char* duplicar(const std::string& s) {
    char* r = static_cast<char*>(std::malloc(s.size() + 1));
    if (r) std::memcpy(r, s.c_str(), s.size() + 1);
    return r;
}

char* respuestaError(const std::string& mensaje) {
    json_object* o = json_object_new_object();
    json_object_object_add(o, "ok", json_object_new_boolean(0));
    json_object_object_add(o, "error", cadena(mensaje));
    char* r = duplicar(json_object_to_json_string_ext(o, JSON_C_TO_STRING_PLAIN));
    json_object_put(o);
    return r;
}

}  // namespace

ANDREIBBDD_EXPORT char* andreibbdd_llamar(const char* funcion, const char* argumentos_json) {
    try {
        const auto& tabla = funciones();
        auto it = tabla.find(funcion ? funcion : "");
        if (it == tabla.end()) return respuestaError(std::string("Funcion desconocida: ") + (funcion ? funcion : ""));

        json_object* args = json_tokener_parse(argumentos_json && *argumentos_json ? argumentos_json : "[]");
        if (!json_object_is_type(args, json_type_array)) {
            json_object_put(args);
            return respuestaError("Los argumentos deben ser un array JSON");
        }
        json_object* resultado = nullptr;
        try {
            resultado = it->second(Argumentos{args});
        } catch (...) {
            json_object_put(args);
            throw;
        }
        json_object_put(args);

        json_object* o = json_object_new_object();
        json_object_object_add(o, "ok", json_object_new_boolean(1));
        json_object_object_add(o, "resultado", resultado);
        char* r = duplicar(json_object_to_json_string_ext(o, JSON_C_TO_STRING_PLAIN));
        json_object_put(o);
        return r;
    } catch (const std::exception& e) {
        return respuestaError(e.what());
    } catch (...) {
        return respuestaError("Error desconocido en AndreiBBDD");
    }
}

ANDREIBBDD_EXPORT void andreibbdd_liberar(char* texto) { std::free(texto); }

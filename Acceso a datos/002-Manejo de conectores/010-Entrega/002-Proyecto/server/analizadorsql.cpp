#include "analizadorsql.hpp"

#include "gestorprocedimientos.hpp"

#include <algorithm>
#include <cctype>
#include <ctime>
#include <map>
#include <stdexcept>
#include <vector>

/*
 * SQL soportado (una única tabla: clientes)
 *
 *   SELECT * FROM clientes [WHERE campo = valor]
 *   INSERT INTO clientes [(campo, ...)] VALUES (valor, ...)
 *   UPDATE clientes SET campo = valor [, campo = valor ...] [WHERE campo = valor]
 *   DELETE FROM clientes [WHERE campo = valor]
 *   CALL procedimiento | BEGIN | COMMIT | ROLLBACK
 *
 * Campos: id, nombre, apellidos, telefono, creado.
 * Los textos van entre comillas simples ('O''Brien' para una comilla).
 * Las palabras clave no distinguen mayúsculas y el ';' final es opcional.
 */

namespace AndreiDB
{
    namespace
    {
        const std::vector<std::string> CAMPOS_DATOS =
            {"nombre", "apellidos", "telefono", "creado"};

        enum class TipoToken { Palabra, Texto, Numero, Simbolo, Fin };

        struct Token
        {
            TipoToken tipo;
            std::string valor;
        };

        std::string mayusculas(std::string s)
        {
            std::transform(s.begin(), s.end(), s.begin(),
                [](unsigned char c) { return static_cast<char>(std::toupper(c)); });
            return s;
        }

        std::string minusculas(std::string s)
        {
            std::transform(s.begin(), s.end(), s.begin(),
                [](unsigned char c) { return static_cast<char>(std::tolower(c)); });
            return s;
        }

        std::string recortar(const std::string& s)
        {
            size_t inicio = 0;
            size_t fin = s.size();

            while (inicio < fin && std::isspace(static_cast<unsigned char>(s[inicio])))
            {
                inicio++;
            }

            while (fin > inicio &&
                   (std::isspace(static_cast<unsigned char>(s[fin - 1])) || s[fin - 1] == ';'))
            {
                fin--;
            }

            return s.substr(inicio, fin - inicio);
        }

        std::vector<Token> tokenizar(const std::string& sql)
        {
            std::vector<Token> tokens;
            size_t i = 0;

            while (i < sql.size())
            {
                unsigned char c = static_cast<unsigned char>(sql[i]);

                if (std::isspace(c))
                {
                    i++;
                }
                else if (c == '\'')
                {
                    std::string texto;
                    i++;
                    bool cerrado = false;

                    while (i < sql.size())
                    {
                        if (sql[i] == '\'')
                        {
                            if (i + 1 < sql.size() && sql[i + 1] == '\'')
                            {
                                texto += '\'';
                                i += 2;
                                continue;
                            }

                            i++;
                            cerrado = true;
                            break;
                        }

                        texto += sql[i++];
                    }

                    if (!cerrado)
                    {
                        throw std::runtime_error("Texto sin cerrar (falta ')");
                    }

                    tokens.push_back({TipoToken::Texto, texto});
                }
                else if (std::isdigit(c) ||
                         (c == '-' && i + 1 < sql.size() &&
                          std::isdigit(static_cast<unsigned char>(sql[i + 1]))))
                {
                    std::string numero(1, sql[i++]);

                    while (i < sql.size() &&
                           (std::isdigit(static_cast<unsigned char>(sql[i])) || sql[i] == '.'))
                    {
                        numero += sql[i++];
                    }

                    tokens.push_back({TipoToken::Numero, numero});
                }
                else if (std::isalpha(c) || c == '_' || c >= 0x80)
                {
                    std::string palabra;

                    while (i < sql.size() &&
                           (std::isalnum(static_cast<unsigned char>(sql[i])) || sql[i] == '_' ||
                            static_cast<unsigned char>(sql[i]) >= 0x80))
                    {
                        palabra += sql[i++];
                    }

                    tokens.push_back({TipoToken::Palabra, palabra});
                }
                else if (std::string("(),=*;").find(static_cast<char>(c)) != std::string::npos)
                {
                    tokens.push_back({TipoToken::Simbolo, std::string(1, static_cast<char>(c))});
                    i++;
                }
                else
                {
                    throw std::runtime_error(
                        std::string("Carácter no válido en la consulta: ") + static_cast<char>(c));
                }
            }

            // El ';' final es opcional.
            while (!tokens.empty() && tokens.back().tipo == TipoToken::Simbolo &&
                   tokens.back().valor == ";")
            {
                tokens.pop_back();
            }

            tokens.push_back({TipoToken::Fin, ""});
            return tokens;
        }

        class Lector
        {
        public:
            explicit Lector(const std::string& sql) : tokens(tokenizar(sql)) {}

            const Token& actual() const { return tokens[pos]; }

            bool esPalabra(const std::string& palabraMayus) const
            {
                return actual().tipo == TipoToken::Palabra &&
                       mayusculas(actual().valor) == palabraMayus;
            }

            bool esSimbolo(const std::string& simbolo) const
            {
                return actual().tipo == TipoToken::Simbolo && actual().valor == simbolo;
            }

            void esperarPalabra(const std::string& palabraMayus)
            {
                if (!esPalabra(palabraMayus))
                {
                    throw std::runtime_error("Se esperaba " + palabraMayus + mostrarActual());
                }
                pos++;
            }

            void esperarSimbolo(const std::string& simbolo)
            {
                if (!esSimbolo(simbolo))
                {
                    throw std::runtime_error("Se esperaba '" + simbolo + "'" + mostrarActual());
                }
                pos++;
            }

            std::string identificador()
            {
                if (actual().tipo != TipoToken::Palabra)
                {
                    throw std::runtime_error("Se esperaba un nombre" + mostrarActual());
                }
                return minusculas(tokens[pos++].valor);
            }

            std::string valor()
            {
                if (actual().tipo == TipoToken::Texto || actual().tipo == TipoToken::Numero)
                {
                    return tokens[pos++].valor;
                }
                throw std::runtime_error("Se esperaba un valor ('texto' o número)" + mostrarActual());
            }

            void esperarFin()
            {
                if (actual().tipo != TipoToken::Fin)
                {
                    throw std::runtime_error("Texto inesperado al final" + mostrarActual());
                }
            }

        private:
            std::vector<Token> tokens;
            size_t pos = 0;

            std::string mostrarActual() const
            {
                return actual().tipo == TipoToken::Fin
                    ? " (fin de la consulta)"
                    : " cerca de '" + actual().valor + "'";
            }
        };

        void comprobarTabla(const std::string& tabla)
        {
            if (tabla != "clientes")
            {
                throw std::runtime_error("Tabla desconocida: " + tabla + " (solo existe 'clientes')");
            }
        }

        void comprobarCampo(const std::string& campo, bool admiteId)
        {
            if (campo == "id")
            {
                if (!admiteId)
                {
                    throw std::runtime_error("El id se genera automáticamente y no se puede modificar");
                }
                return;
            }

            if (std::find(CAMPOS_DATOS.begin(), CAMPOS_DATOS.end(), campo) == CAMPOS_DATOS.end())
            {
                throw std::runtime_error(
                    "Campo desconocido: " + campo + " (id, nombre, apellidos, telefono, creado)");
            }
        }

        // El archivo guarda los campos separados por ';' y un registro por línea.
        void comprobarValorAlmacenable(const std::string& valor)
        {
            if (valor.find(';') != std::string::npos ||
                valor.find('\n') != std::string::npos ||
                valor.find('\r') != std::string::npos)
            {
                throw std::runtime_error("Los valores no pueden contener ';' ni saltos de línea");
            }
        }

        std::string& campoDe(Registro& r, const std::string& campo)
        {
            if (campo == "nombre") return r.nombre;
            if (campo == "apellidos") return r.apellidos;
            if (campo == "telefono") return r.telefono;
            return r.creado;
        }

        std::string valorDe(const Registro& r, const std::string& campo)
        {
            if (campo == "id") return std::to_string(r.id);
            return campoDe(const_cast<Registro&>(r), campo);
        }

        struct Condicion
        {
            bool activa = false;
            std::string campo;
            std::string valor;

            bool cumple(const Registro& r) const
            {
                return !activa || valorDe(r, campo) == valor;
            }
        };

        // WHERE campo = valor (opcional)
        Condicion leerWhere(Lector& lector)
        {
            Condicion c;

            if (lector.esPalabra("WHERE"))
            {
                lector.esperarPalabra("WHERE");
                c.campo = lector.identificador();
                comprobarCampo(c.campo, true);
                lector.esperarSimbolo("=");
                c.valor = lector.valor();
                c.activa = true;
            }

            lector.esperarFin();
            return c;
        }

        std::string fechaActual()
        {
            std::time_t ahora = std::time(nullptr);
            char texto[32];
            std::strftime(texto, sizeof(texto), "%Y-%m-%d %H:%M:%S", std::localtime(&ahora));
            return texto;
        }

        Consulta error(const std::string& mensaje)
        {
            Consulta r;
            r.establecerExito(false);
            r.establecerMensaje(mensaje);
            return r;
        }
    }

    AnalizadorSQL::AnalizadorSQL(
        BaseDatos& bd,
        GestorTransacciones& gt,
        GestorProcedimientos* gp
    )
        :
        baseDatos(bd),
        gestorTransacciones(gt),
        gestorProcedimientos(gp)
    {
    }

    Consulta AnalizadorSQL::ejecutar(
        const std::string& sqlOriginal
    )
    {
        // Se ignoran espacios, saltos de línea y ';' al principio/final.
        std::string sql = recortar(sqlOriginal);
        std::string comando = mayusculas(sql);

        auto empiezaPor = [&](const std::string& palabra)
        {
            return comando.compare(0, palabra.size(), palabra) == 0 &&
                   (comando.size() == palabra.size() ||
                    !std::isalnum(static_cast<unsigned char>(comando[palabra.size()])));
        };

        try
        {
            if (empiezaPor("SELECT")) return ejecutarSelect(sql);
            if (empiezaPor("INSERT")) return ejecutarInsert(sql);
            if (empiezaPor("UPDATE")) return ejecutarUpdate(sql);
            if (empiezaPor("DELETE")) return ejecutarDelete(sql);
            if (empiezaPor("CALL")) return ejecutarCall(sql);
            if (empiezaPor("BEGIN")) return ejecutarBegin();
            if (empiezaPor("COMMIT")) return ejecutarCommit();
            if (empiezaPor("ROLLBACK")) return ejecutarRollback();
        }
        catch (const std::exception& e)
        {
            return error(std::string("Error de sintaxis: ") + e.what());
        }

        return error("Comando SQL no soportado");
    }

    // SELECT * FROM clientes [WHERE campo = valor]
    Consulta AnalizadorSQL::ejecutarSelect(
        const std::string& sql
    )
    {
        Lector lector(sql);
        lector.esperarPalabra("SELECT");
        lector.esperarSimbolo("*");
        lector.esperarPalabra("FROM");
        comprobarTabla(lector.identificador());
        Condicion donde = leerWhere(lector);

        std::vector<Registro> filas;

        for (const auto& r : baseDatos.seleccionarTodos())
        {
            if (donde.cumple(r))
            {
                filas.push_back(r);
            }
        }

        Consulta resultado;
        resultado.establecerExito(true);
        resultado.establecerMensaje(
            std::to_string(filas.size()) + " fila(s) encontrada(s)"
        );
        resultado.establecerRegistros(filas);
        return resultado;
    }

    // INSERT INTO clientes [(campo, ...)] VALUES (valor, ...)
    Consulta AnalizadorSQL::ejecutarInsert(
        const std::string& sql
    )
    {
        Lector lector(sql);
        lector.esperarPalabra("INSERT");
        lector.esperarPalabra("INTO");
        comprobarTabla(lector.identificador());

        std::vector<std::string> campos;

        if (lector.esSimbolo("("))
        {
            lector.esperarSimbolo("(");
            do
            {
                if (!campos.empty()) lector.esperarSimbolo(",");
                std::string campo = lector.identificador();
                comprobarCampo(campo, false);
                if (std::find(campos.begin(), campos.end(), campo) != campos.end())
                {
                    return error("Campo repetido: " + campo);
                }
                campos.push_back(campo);
            } while (lector.esSimbolo(","));
            lector.esperarSimbolo(")");
        }

        lector.esperarPalabra("VALUES");
        lector.esperarSimbolo("(");

        std::vector<std::string> valores;
        do
        {
            if (!valores.empty()) lector.esperarSimbolo(",");
            valores.push_back(lector.valor());
        } while (lector.esSimbolo(","));

        lector.esperarSimbolo(")");
        lector.esperarFin();

        // Sin lista de campos: nombre, apellidos, telefono[, creado]
        if (campos.empty())
        {
            if (valores.size() != 3 && valores.size() != 4)
            {
                return error("Se esperaban 3 o 4 valores: nombre, apellidos, telefono[, creado]");
            }
            campos.assign(CAMPOS_DATOS.begin(), CAMPOS_DATOS.begin() + valores.size());
        }

        if (campos.size() != valores.size())
        {
            return error("El número de campos y de valores no coincide");
        }

        Registro nuevo;
        for (size_t i = 0; i < campos.size(); i++)
        {
            comprobarValorAlmacenable(valores[i]);
            campoDe(nuevo, campos[i]) = valores[i];
        }

        if (nuevo.creado.empty())
        {
            nuevo.creado = fechaActual();
        }

        uint64_t id = baseDatos.insertar(
            nuevo.nombre, nuevo.apellidos, nuevo.telefono, nuevo.creado
        );

        if (id == 0)
        {
            return error("No se pudo escribir en la base de datos");
        }

        nuevo.id = id;

        Consulta resultado;
        resultado.establecerExito(true);
        resultado.establecerMensaje("1 fila insertada (id " + std::to_string(id) + ")");
        resultado.agregarRegistro(nuevo);
        return resultado;
    }

    // UPDATE clientes SET campo = valor [, ...] [WHERE campo = valor]
    Consulta AnalizadorSQL::ejecutarUpdate(
        const std::string& sql
    )
    {
        Lector lector(sql);
        lector.esperarPalabra("UPDATE");
        comprobarTabla(lector.identificador());
        lector.esperarPalabra("SET");

        std::map<std::string, std::string> cambios;
        do
        {
            if (!cambios.empty()) lector.esperarSimbolo(",");
            std::string campo = lector.identificador();
            comprobarCampo(campo, false);
            lector.esperarSimbolo("=");
            std::string valor = lector.valor();
            comprobarValorAlmacenable(valor);
            cambios[campo] = valor;
        } while (lector.esSimbolo(","));

        Condicion donde = leerWhere(lector);

        size_t actualizadas = 0;

        for (auto r : baseDatos.seleccionarTodos())
        {
            if (!donde.cumple(r))
            {
                continue;
            }

            for (const auto& [campo, valor] : cambios)
            {
                campoDe(r, campo) = valor;
            }

            if (!baseDatos.actualizar(r.id, r.nombre, r.apellidos, r.telefono, r.creado))
            {
                return error("No se pudo actualizar el registro " + std::to_string(r.id));
            }

            actualizadas++;
        }

        Consulta resultado;
        resultado.establecerExito(true);
        resultado.establecerMensaje(std::to_string(actualizadas) + " fila(s) actualizada(s)");
        return resultado;
    }

    // DELETE FROM clientes [WHERE campo = valor]
    Consulta AnalizadorSQL::ejecutarDelete(
        const std::string& sql
    )
    {
        Lector lector(sql);
        lector.esperarPalabra("DELETE");
        lector.esperarPalabra("FROM");
        comprobarTabla(lector.identificador());
        Condicion donde = leerWhere(lector);

        size_t eliminadas = 0;

        for (const auto& r : baseDatos.seleccionarTodos())
        {
            if (donde.cumple(r) && baseDatos.eliminar(r.id))
            {
                eliminadas++;
            }
        }

        Consulta resultado;
        resultado.establecerExito(true);
        resultado.establecerMensaje(std::to_string(eliminadas) + " fila(s) eliminada(s)");
        return resultado;
    }

    Consulta AnalizadorSQL::ejecutarCall(
        const std::string& sql
    )
    {
        if (gestorProcedimientos == nullptr)
        {
            return error("Gestor de procedimientos no configurado");
        }

        std::string nombre = recortar(sql.substr(4));

        // Solo nombres simples: evita leer archivos fuera de la carpeta (CALL ../x).
        if (nombre.empty() ||
            !std::all_of(nombre.begin(), nombre.end(), [](unsigned char c)
                         { return std::isalnum(c) || c == '_' || c == '-'; }))
        {
            return error("Nombre de procedimiento no válido");
        }

        return gestorProcedimientos->ejecutar(
            nombre
        );
    }

    Consulta AnalizadorSQL::ejecutarBegin()
    {
        Consulta resultado;

        bool ok =
            gestorTransacciones.iniciar();

        resultado.establecerExito(ok);

        resultado.establecerMensaje(
            ok
            ? "Transacción iniciada"
            : "Ya existe una transacción activa"
        );

        return resultado;
    }

    Consulta AnalizadorSQL::ejecutarCommit()
    {
        Consulta resultado;

        bool ok =
            gestorTransacciones.confirmar();

        resultado.establecerExito(ok);

        resultado.establecerMensaje(
            ok
            ? "Transacción confirmada"
            : "No existe una transacción activa"
        );

        return resultado;
    }

    Consulta AnalizadorSQL::ejecutarRollback()
    {
        Consulta resultado;

        bool ok =
            gestorTransacciones.cancelar();

        resultado.establecerExito(ok);

        resultado.establecerMensaje(
            ok
            ? "Transacción cancelada"
            : "No existe una transacción activa"
        );

        return resultado;
    }
}

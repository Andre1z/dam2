#include "AndreiBBDD.hpp"

#include <iostream>
#include <sstream>
#include <string>
#include <vector>

namespace {

std::string configJuntoAlEjecutable(const char* ejecutable) {
    const std::string ruta = ejecutable ? ejecutable : "";
    const std::size_t separador = ruta.find_last_of("/\\");
    return separador == std::string::npos
        ? "config.json"
        : ruta.substr(0, separador + 1) + "config.json";
}

std::vector<std::string> separar(const std::string& texto) {
    return AndreiSerializador().desserializar(texto);
}

bool leerId(std::istringstream& entrada, std::string& tabla, long long& id) {
    if (!(entrada >> tabla >> id)) {
        std::cerr << "Uso: <comando> tabla id\n";
        return false;
    }
    return true;
}

void imprimir(const std::map<std::string, std::string>& registro) {
    for (std::map<std::string, std::string>::const_iterator elemento = registro.begin();
         elemento != registro.end();
         ++elemento) {
        std::cout << elemento->first << '=' << elemento->second << "  ";
    }
    std::cout << '\n';
}

void ayuda() {
    std::cout << R"(
Comandos:
  CREAR BASE nombre
  USAR nombre
  CREAR TABLA nombre campo1,campo2,campo3
  INSERTAR tabla valor1,valor2,valor3
  SELECCIONAR tabla id
  LISTAR tabla
  BUSCAR tabla columna valor
  ACTUALIZAR tabla id valor1,valor2,valor3
  ELIMINAR tabla id
  ESQUEMA tabla
  AYUDA
  SALIR
)";
}

}

int main(int argc, char** argv) {
    try {
        const std::string config = argc > 1
            ? argv[1]
            : configJuntoAlEjecutable(argc > 0 ? argv[0] : nullptr);
        AndreiBBDD db(config);
        std::cout << "Andrei BBDD C++ - terminal\n";
        ayuda();

        std::string linea;
        while (
            std::cout << (db.basededatos.empty()
                ? "andrei> "
                : "andrei[" + db.basededatos + "]> ")
            && std::getline(std::cin, linea)
        ) {
            std::istringstream entrada(linea);
            std::string comando;
            entrada >> comando;
            if (comando.empty()) {
                continue;
            }

            if (comando == "SALIR" || comando == "salir") {
                break;
            }
            if (comando == "AYUDA" || comando == "ayuda") {
                ayuda();
                continue;
            }
            if (comando == "CREAR" || comando == "crear") {
                std::string tipo;
                std::string nombre;
                if (!(entrada >> tipo >> nombre)) {
                    std::cerr << "Uso: CREAR BASE nombre o CREAR TABLA nombre esquema\n";
                    continue;
                }

                if (tipo == "BASE" || tipo == "base") {
                    std::cout << (db.creaBaseDatos(nombre) ? "OK\n" : "ERROR\n");
                } else if (tipo == "TABLA" || tipo == "tabla") {
                    std::string esquema;
                    std::getline(entrada >> std::ws, esquema);
                    if (esquema.empty()) {
                        std::cerr << "Indica las columnas de la tabla.\n";
                        continue;
                    }
                    std::cout << (db.creaTabla(nombre, esquema) ? "OK\n" : "ERROR\n");
                } else {
                    std::cerr << "Tipo desconocido. Usa BASE o TABLA.\n";
                }
                continue;
            }
            if (comando == "USAR" || comando == "usar") {
                std::string nombre;
                if (!(entrada >> nombre)) {
                    std::cerr << "Uso: USAR nombre\n";
                    continue;
                }
                std::cout << (db.usaBaseDatos(nombre) ? "OK\n" : "ERROR\n");
                continue;
            }
            if (comando == "INSERTAR" || comando == "insertar") {
                std::string tabla;
                if (!(entrada >> tabla)) {
                    std::cerr << "Uso: INSERTAR tabla valor1,valor2,...\n";
                    continue;
                }
                std::string datos;
                std::getline(entrada >> std::ws, datos);
                const auto id = db.insertarDatos(tabla, separar(datos));
                std::cout << (id < 0 ? "ERROR" : "ID=" + std::to_string(id)) << '\n';
                continue;
            }
            if (comando == "SELECCIONAR" || comando == "seleccionar") {
                std::string tabla;
                long long id = 0;
                if (!leerId(entrada, tabla, id)) {
                    continue;
                }
                const auto registro = db.seleccionar(tabla, id);
                if (registro.empty()) {
                    std::cout << "No encontrado\n";
                } else {
                    imprimir(registro);
                }
                continue;
            }
            if (comando == "LISTAR" || comando == "listar") {
                std::string tabla;
                if (!(entrada >> tabla)) {
                    std::cerr << "Uso: LISTAR tabla\n";
                    continue;
                }
                for (const auto& registro : db.listarTodo(tabla)) {
                    imprimir(registro);
                }
                continue;
            }
            if (comando == "BUSCAR" || comando == "buscar") {
                std::string tabla;
                std::string columna;
                if (!(entrada >> tabla >> columna)) {
                    std::cerr << "Uso: BUSCAR tabla columna valor\n";
                    continue;
                }
                std::string valor;
                std::getline(entrada >> std::ws, valor);
                for (const auto& registro : db.buscarColumna(tabla, columna, valor)) {
                    imprimir(registro);
                }
                continue;
            }
            if (comando == "ACTUALIZAR" || comando == "actualizar") {
                std::string tabla;
                long long id = 0;
                if (!leerId(entrada, tabla, id)) {
                    continue;
                }
                std::string datos;
                std::getline(entrada >> std::ws, datos);
                if (datos.empty()) {
                    std::cerr << "Indica los valores que quieres guardar.\n";
                    continue;
                }
                std::cout << (db.actualizar(tabla, id, separar(datos)) ? "OK\n" : "ERROR\n");
                continue;
            }
            if (comando == "ELIMINAR" || comando == "eliminar") {
                std::string tabla;
                long long id = 0;
                if (!leerId(entrada, tabla, id)) {
                    continue;
                }
                std::cout << (db.eliminar(tabla, id) ? "OK\n" : "ERROR\n");
                continue;
            }
            if (comando == "ESQUEMA" || comando == "esquema") {
                std::string tabla;
                if (!(entrada >> tabla)) {
                    std::cerr << "Uso: ESQUEMA tabla\n";
                    continue;
                }
                const auto esquema = db.obtenerEsquema(tabla);
                for (std::size_t i = 0; i < esquema.size(); ++i) {
                    std::cout << (i == 0 ? "" : ",") << esquema[i];
                }
                std::cout << '\n';
                continue;
            }

            std::cout << "Comando desconocido. Escribe AYUDA.\n";
        }
    } catch (const std::exception& error) {
        std::cerr << "Error: " << error.what() << '\n';
        return 1;
    }
    return 0;
}

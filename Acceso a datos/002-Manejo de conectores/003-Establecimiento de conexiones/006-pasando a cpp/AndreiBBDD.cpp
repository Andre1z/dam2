#include "AndreiBBDD.hpp"

#include <algorithm>
#include <cstdio>
#include <fstream>
#include <iostream>
#include <regex>
#include <sstream>
#include <stdexcept>
#include <utility>
#include <sys/stat.h>
#include <sys/types.h>

#ifdef _WIN32
#include <direct.h>
#include <fcntl.h>
#include <io.h>
#else
#include <unistd.h>
#endif

namespace {

std::string unirRuta(const std::string& base, const std::string& nombre) {
    if (base.empty() || base.back() == '/' || base.back() == '\\') {
        return base + nombre;
    }
    return base + '/' + nombre;
}

bool existeRuta(const std::string& ruta) {
    struct stat estado;
    return stat(ruta.c_str(), &estado) == 0;
}

bool esDirectorio(const std::string& ruta) {
    struct stat estado;
    if (stat(ruta.c_str(), &estado) != 0) {
        return false;
    }
#ifdef _WIN32
    return (estado.st_mode & _S_IFDIR) != 0;
#else
    return S_ISDIR(estado.st_mode);
#endif
}

bool crearDirectorio(const std::string& ruta) {
#ifdef _WIN32
    return _mkdir(ruta.c_str()) == 0;
#else
    return mkdir(ruta.c_str(), 0777) == 0;
#endif
}

bool crearDirectorios(const std::string& ruta) {
    std::string normalizada = ruta;
    while (
        normalizada.size() > 1
        && (normalizada.back() == '/' || normalizada.back() == '\\')
        && !(normalizada.size() == 3 && normalizada[1] == ':')
    ) {
        normalizada.pop_back();
    }

    std::string actual;
    for (std::size_t i = 0; i < normalizada.size(); ++i) {
        actual += normalizada[i];
        if (normalizada[i] != '/' && normalizada[i] != '\\') {
            continue;
        }
        if (
            actual == "/"
            || actual == "\\"
            || (actual.size() == 3 && actual[1] == ':')
        ) {
            continue;
        }
        std::string prefijo = actual;
        while (!prefijo.empty() && (prefijo.back() == '/' || prefijo.back() == '\\')) {
            prefijo.pop_back();
        }
        if (!crearDirectorio(prefijo) && !esDirectorio(prefijo)) {
            return false;
        }
    }
    if (
        !normalizada.empty()
        && !crearDirectorio(normalizada)
        && !esDirectorio(normalizada)
    ) {
        return false;
    }
    return true;
}

std::uint64_t tamanoArchivo(const std::string& ruta) {
    struct stat estado;
    if (stat(ruta.c_str(), &estado) != 0) {
        throw std::runtime_error("No se ha podido consultar el archivo: " + ruta);
    }
    return static_cast<std::uint64_t>(estado.st_size);
}

bool restaurarTamano(const std::string& ruta, std::uint64_t tamano) {
#ifdef _WIN32
    const int descriptor = _open(ruta.c_str(), _O_RDWR | _O_BINARY);
    if (descriptor == -1) {
        return false;
    }
    const bool correcto = _chsize(descriptor, static_cast<long>(tamano)) == 0;
    _close(descriptor);
    return correcto;
#else
    return truncate(ruta.c_str(), static_cast<off_t>(tamano)) == 0;
#endif
}

}

std::string AndreiSerializador::serializar(
    const std::vector<std::string>& lista,
    char delimitador
) const {
    std::ostringstream resultado;
    for (std::size_t i = 0; i < lista.size(); ++i) {
        if (i > 0) {
            resultado << delimitador;
        }
        for (char caracter : lista[i]) {
            if (caracter == delimitador || caracter == '\\') {
                resultado << '\\';
            }
            resultado << caracter;
        }
    }
    return resultado.str();
}

std::vector<std::string> AndreiSerializador::desserializar(
    const std::string& cadena,
    char delimitador
) const {
    std::vector<std::string> resultado;
    std::string elemento;
    bool escapado = false;

    for (char caracter : cadena) {
        if (escapado) {
            elemento += caracter;
            escapado = false;
        } else if (caracter == '\\') {
            escapado = true;
        } else if (caracter == delimitador) {
            resultado.push_back(elemento);
            elemento.clear();
        } else {
            elemento += caracter;
        }
    }

    if (escapado) {
        elemento += '\\';
    }

    if (!cadena.empty() || !elemento.empty()) {
        resultado.push_back(elemento);
    }

    return resultado;
}

AndreiBBDD::AndreiBBDD(const std::string& config) {
    std::ifstream archivo(config);
    if (!archivo) {
        throw std::runtime_error("No se ha encontrado config.json: " + config);
    }

    const std::string contenido(
        (std::istreambuf_iterator<char>(archivo)),
        std::istreambuf_iterator<char>()
    );
    std::smatch coincidencia;

    if (!std::regex_search(
            contenido,
            coincidencia,
            std::regex("\\\"instalacion\\\"\\s*:\\s*\\\"([^\\\"]+)\\\"")
        )) {
        throw std::runtime_error("Falta 'instalacion' en config.json");
    }
    instalacion = coincidencia[1].str();

    if (!std::regex_search(
            contenido,
            coincidencia,
            std::regex("\\\"tamanoRegistro\\\"\\s*:\\s*([0-9]+)")
        )) {
        throw std::runtime_error("Falta 'tamanoRegistro' en config.json");
    }
    tamanoRegistro = std::stoull(coincidencia[1].str());
    if (tamanoRegistro < 2) {
        throw std::runtime_error("tamanoRegistro debe ser al menos 2 bytes");
    }

    if (!crearDirectorios(instalacion)) {
        throw std::runtime_error("No se ha podido crear el directorio de instalación: " + instalacion);
    }
}

std::string AndreiBBDD::rutaTabla(
    const std::string& tabla,
    const std::string& extension
) const {
    return unirRuta(unirRuta(instalacion, basededatos), tabla + extension);
}

std::string AndreiBBDD::trimDerecha(std::string texto) {
    while (
        !texto.empty()
        && (texto.back() == ' ' || texto.back() == '\n'
            || texto.back() == '\r' || texto.back() == '\t')
    ) {
        texto.pop_back();
    }
    return texto;
}

bool AndreiBBDD::creaBaseDatos(const std::string& nombre) {
    const auto ruta = unirRuta(instalacion, nombre);
    if (existeRuta(ruta)) {
        std::cerr << "La base de datos ya existe\n";
        return false;
    }
    return crearDirectorio(ruta);
}

bool AndreiBBDD::usaBaseDatos(const std::string& nombre) {
    const auto ruta = unirRuta(instalacion, nombre);
    if (!esDirectorio(ruta)) {
        std::cerr << "La base de datos no existe\n";
        return false;
    }
    basededatos = nombre;
    return true;
}

bool AndreiBBDD::creaTabla(
    const std::string& nombre,
    const std::string& esquema
) {
    if (basededatos.empty()) {
        std::cerr << "No hay base seleccionada\n";
        return false;
    }

    const auto rutaCsv = rutaTabla(nombre, ".csv");
    const auto rutaEsquema = rutaTabla(nombre, ".esquema");
    const auto rutaIndice = rutaTabla(nombre, ".idx");
    if (
        existeRuta(rutaCsv)
        || existeRuta(rutaEsquema)
        || existeRuta(rutaIndice)
    ) {
        std::cerr << "La tabla ya existe\n";
        return false;
    }

    bool correcto = false;
    {
        std::ofstream csv(rutaCsv, std::ios::binary);
        std::ofstream archivoEsquema(rutaEsquema, std::ios::binary);
        std::ofstream indice(rutaIndice, std::ios::binary);
        if (csv && archivoEsquema && indice) {
            archivoEsquema << "id,activo," << esquema;
            correcto = static_cast<bool>(archivoEsquema);
        }
    }

    if (!correcto) {
        std::remove(rutaCsv.c_str());
        std::remove(rutaEsquema.c_str());
        std::remove(rutaIndice.c_str());
        std::cerr << "No se han podido crear los archivos de la tabla\n";
    }
    return correcto;
}

std::vector<std::string> AndreiBBDD::obtenerEsquema(
    const std::string& tabla
) const {
    std::ifstream archivo(rutaTabla(tabla, ".esquema"), std::ios::binary);
    if (!archivo) {
        return {};
    }

    const std::string contenido(
        (std::istreambuf_iterator<char>(archivo)),
        std::istreambuf_iterator<char>()
    );
    return AndreiSerializador().desserializar(contenido);
}

long long AndreiBBDD::siguienteId(const std::string& tabla) const {
    std::ifstream indice(rutaTabla(tabla, ".idx"));
    long long ultimo = 0;
    long long id = 0;
    long long posicion = 0;
    char delimitador = '\0';

    while (indice >> id >> delimitador >> posicion) {
        if (delimitador != ',') {
            break;
        }
        ultimo = std::max(ultimo, id);
    }
    return ultimo + 1;
}

std::string AndreiBBDD::prepararRegistro(
    const std::vector<std::string>& elementos
) const {
    const auto contenido = AndreiSerializador().serializar(elementos);
    if (contenido.size() > tamanoRegistro - 1) {
        throw std::runtime_error("Registro demasiado grande");
    }

    std::string registro = contenido;
    registro.append(tamanoRegistro - 1 - contenido.size(), ' ');
    registro.push_back('\n');
    return registro;
}

long long AndreiBBDD::insertarDatos(
    const std::string& tabla,
    const std::vector<std::string>& datos
) {
    if (basededatos.empty() || !existeRuta(rutaTabla(tabla, ".csv"))) {
        return -1;
    }

    const auto esquema = obtenerEsquema(tabla);
    if (esquema.size() < 2 || datos.size() != esquema.size() - 2) {
        std::cerr << "El número de campos no coincide con el esquema\n";
        return -1;
    }

    const auto id = siguienteId(tabla);
    std::vector<std::string> elementos = {std::to_string(id), "1"};
    elementos.insert(elementos.end(), datos.begin(), datos.end());
    const auto registro = prepararRegistro(elementos);
    const auto rutaCsv = rutaTabla(tabla, ".csv");
    const auto rutaIndice = rutaTabla(tabla, ".idx");
    const auto posicion = tamanoArchivo(rutaCsv);
    const auto tamanoIndice = tamanoArchivo(rutaIndice);

    {
        std::ofstream archivo(rutaCsv, std::ios::binary | std::ios::app);
        if (!archivo) {
            return -1;
        }
        archivo.write(registro.data(), static_cast<std::streamsize>(registro.size()));
        archivo.flush();
        if (!archivo) {
            archivo.close();
            restaurarTamano(rutaCsv, posicion);
            return -1;
        }
    }

    {
        std::ofstream indice(rutaIndice, std::ios::app);
        if (!indice) {
            restaurarTamano(rutaIndice, tamanoIndice);
            restaurarTamano(rutaCsv, posicion);
            return -1;
        }
        indice << id << ',' << posicion << '\n';
        indice.flush();
        if (!indice) {
            indice.close();
            restaurarTamano(rutaIndice, tamanoIndice);
            restaurarTamano(rutaCsv, posicion);
            return -1;
        }
    }

    return id;
}

std::int64_t AndreiBBDD::buscarPosicion(
    const std::string& tabla,
    long long buscado
) const {
    std::ifstream indice(rutaTabla(tabla, ".idx"));
    long long id = 0;
    long long posicion = 0;
    char delimitador = '\0';

    while (indice >> id >> delimitador >> posicion) {
        if (delimitador == ',' && id == buscado) {
            return posicion;
        }
    }
    return -1;
}

std::vector<std::string> AndreiBBDD::leerRegistro(
    const std::string& tabla,
    long long id
) const {
    const auto posicion = buscarPosicion(tabla, id);
    if (posicion < 0) {
        return {};
    }

    std::ifstream archivo(rutaTabla(tabla, ".csv"), std::ios::binary);
    if (!archivo) {
        return {};
    }

    archivo.seekg(posicion);
    std::string bloque(tamanoRegistro, '\0');
    archivo.read(&bloque[0], static_cast<std::streamsize>(tamanoRegistro));
    if (static_cast<std::size_t>(archivo.gcount()) != tamanoRegistro) {
        return {};
    }

    auto elementos = AndreiSerializador().desserializar(trimDerecha(bloque));
    if (elementos.size() < 2 || elementos[1] != "1") {
        return {};
    }
    return elementos;
}

std::map<std::string, std::string> AndreiBBDD::seleccionar(
    const std::string& tabla,
    long long id
) const {
    const auto elementos = leerRegistro(tabla, id);
    const auto esquema = obtenerEsquema(tabla);
    std::map<std::string, std::string> resultado;
    if (elementos.size() != esquema.size()) {
        return resultado;
    }

    for (std::size_t i = 0; i < esquema.size(); ++i) {
        resultado[esquema[i]] = elementos[i];
    }
    return resultado;
}

std::vector<std::map<std::string, std::string>> AndreiBBDD::listarTodo(
    const std::string& tabla
) const {
    std::vector<std::map<std::string, std::string>> resultado;
    const auto esquema = obtenerEsquema(tabla);
    std::ifstream archivo(rutaTabla(tabla, ".csv"), std::ios::binary);
    if (esquema.size() < 2 || !archivo) {
        return resultado;
    }

    while (true) {
        std::string bloque(tamanoRegistro, '\0');
        archivo.read(&bloque[0], static_cast<std::streamsize>(tamanoRegistro));
        if (archivo.gcount() == 0) {
            break;
        }
        if (static_cast<std::size_t>(archivo.gcount()) != tamanoRegistro) {
            break;
        }

        const auto elementos = AndreiSerializador().desserializar(trimDerecha(bloque));
        if (elementos.size() != esquema.size() || elementos[1] != "1") {
            continue;
        }

        std::map<std::string, std::string> registro;
        for (std::size_t i = 0; i < esquema.size(); ++i) {
            registro[esquema[i]] = elementos[i];
        }
        resultado.push_back(std::move(registro));
    }
    return resultado;
}

std::vector<std::map<std::string, std::string>> AndreiBBDD::buscarColumna(
    const std::string& tabla,
    const std::string& columna,
    const std::string& valor
) const {
    const auto esquema = obtenerEsquema(tabla);
    if (std::find(esquema.begin(), esquema.end(), columna) == esquema.end()) {
        return {};
    }

    std::vector<std::map<std::string, std::string>> resultado;
    for (auto& registro : listarTodo(tabla)) {
        const auto campo = registro.find(columna);
        if (campo != registro.end() && campo->second == valor) {
            resultado.push_back(std::move(registro));
        }
    }
    return resultado;
}

bool AndreiBBDD::actualizar(
    const std::string& tabla,
    long long id,
    const std::vector<std::string>& datos
) {
    const auto posicion = buscarPosicion(tabla, id);
    const auto esquema = obtenerEsquema(tabla);
    if (
        posicion < 0
        || esquema.size() < 2
        || leerRegistro(tabla, id).empty()
        || datos.size() != esquema.size() - 2
    ) {
        return false;
    }

    std::vector<std::string> elementos = {std::to_string(id), "1"};
    elementos.insert(elementos.end(), datos.begin(), datos.end());
    const auto registro = prepararRegistro(elementos);
    std::fstream archivo(
        rutaTabla(tabla, ".csv"),
        std::ios::binary | std::ios::in | std::ios::out
    );
    if (!archivo) {
        return false;
    }

    archivo.seekp(posicion);
    archivo.write(registro.data(), static_cast<std::streamsize>(registro.size()));
    archivo.flush();
    return static_cast<bool>(archivo);
}

bool AndreiBBDD::eliminar(const std::string& tabla, long long id) {
    const auto posicion = buscarPosicion(tabla, id);
    auto elementos = leerRegistro(tabla, id);
    if (posicion < 0 || elementos.empty()) {
        return false;
    }

    elementos[1] = "0";
    const auto registro = prepararRegistro(elementos);
    std::fstream archivo(
        rutaTabla(tabla, ".csv"),
        std::ios::binary | std::ios::in | std::ios::out
    );
    if (!archivo) {
        return false;
    }

    archivo.seekp(posicion);
    archivo.write(registro.data(), static_cast<std::streamsize>(registro.size()));
    archivo.flush();
    return static_cast<bool>(archivo);
}

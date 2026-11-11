#include <filesystem>
#include <iostream>
#include <string>

#ifdef _WIN32
#include <windows.h>
#else
#include <unistd.h>
#include <climits>
#endif

#include "basededatos.hpp"
#include "gestortransacciones.hpp"
#include "analizadorsql.hpp"
#include "gestorprocedimientos.hpp"
#include "servidortcp.hpp"

using namespace AndreiDB;

namespace fs = std::filesystem;

// Carpeta donde está el ejecutable. Así el servidor encuentra data/ aunque
// se arranque desde otra carpeta (doble clic, otra terminal, etc.).
static fs::path carpetaEjecutable(const char* argv0)
{
#ifdef _WIN32
    wchar_t ruta[MAX_PATH];
    DWORD longitud = GetModuleFileNameW(nullptr, ruta, MAX_PATH);

    if (longitud > 0 && longitud < MAX_PATH)
    {
        return fs::path(ruta).parent_path();
    }
#else
    char ruta[PATH_MAX];
    ssize_t longitud = readlink("/proc/self/exe", ruta, sizeof(ruta) - 1);

    if (longitud > 0)
    {
        ruta[longitud] = '\0';
        return fs::path(ruta).parent_path();
    }
#endif

    std::error_code error;
    fs::path absoluta = fs::absolute(argv0 ? argv0 : ".", error);
    return error ? fs::current_path() : absoluta.parent_path();
}

int main(int, char** argv)
{
    std::cout << "=====================================\n";
    std::cout << "           AndreiDB Server\n";
    std::cout << "=====================================\n";

    // data/ guarda todo lo que el SGBD conserva entre ejecuciones:
    //   data/clientes.db         registros de la tabla clientes
    //   data/clientes.db.bak     copia de seguridad mientras hay una transacción abierta
    //   data/procedimientos/     procedimientos almacenados (*.proc)
    const fs::path carpetaDatos = carpetaEjecutable(argv[0]) / "data";
    const fs::path carpetaProcedimientos = carpetaDatos / "procedimientos";
    const std::string archivoDatos = (carpetaDatos / "clientes.db").string();

    std::error_code error;
    fs::create_directories(carpetaProcedimientos, error);

    if (error)
    {
        std::cerr
            << "No se pudo crear "
            << carpetaProcedimientos.string()
            << ": "
            << error.message()
            << std::endl;

        return 1;
    }

    BaseDatos baseDatos(
        archivoDatos
    );

    if (!baseDatos.iniciar())
    {
        std::cerr
            << "Error al iniciar la base de datos"
            << std::endl;

        return 1;
    }

    GestorTransacciones gestorTransacciones(
        archivoDatos
    );

    AnalizadorSQL analizador(
        baseDatos,
        gestorTransacciones
    );

    GestorProcedimientos gestorProcedimientos(
        carpetaProcedimientos.string(),
        analizador
    );

    AnalizadorSQL analizadorPrincipal(
        baseDatos,
        gestorTransacciones,
        &gestorProcedimientos
    );

    ServidorTCP servidor(
        5555,
        analizadorPrincipal
    );

    if (!servidor.iniciar())
    {
        std::cerr
            << "Error al iniciar el servidor TCP (¿el puerto 5555 ya está en uso?)"
            << std::endl;

        return 1;
    }

    std::cout
        << "Base de datos iniciada correctamente"
        << std::endl;

    std::cout
        << "Datos en: "
        << carpetaDatos.string()
        << std::endl;

    std::cout
        << "Procedimientos en: "
        << carpetaProcedimientos.string()
        << std::endl;

    std::cout
        << "Servidor escuchando en 127.0.0.1:5555"
        << std::endl;

    servidor.escuchar();

    return 0;
}

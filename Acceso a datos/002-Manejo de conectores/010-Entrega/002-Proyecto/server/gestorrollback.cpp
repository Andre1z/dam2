#include "gestorrollback.hpp"

#include <filesystem>

namespace fs = std::filesystem;

namespace AndreiDB
{
    GestorRollback::GestorRollback(
        const std::string& rutaBaseDatos
    )
        :
        archivoOriginal(rutaBaseDatos),
        archivoTemporal(rutaBaseDatos + ".bak")
    {
    }

    bool GestorRollback::crearPuntoRecuperacion()
    {
        try
        {
            if (fs::exists(archivoOriginal))
            {
                fs::copy_file(
                    archivoOriginal,
                    archivoTemporal,
                    fs::copy_options::overwrite_existing
                );
            }

            return true;
        }
        catch (...)
        {
            return false;
        }
    }

    bool GestorRollback::confirmar()
    {
        try
        {
            if (fs::exists(archivoTemporal))
            {
                fs::remove(
                    archivoTemporal
                );
            }

            return true;
        }
        catch (...)
        {
            return false;
        }
    }

    bool GestorRollback::restaurar()
    {
        try
        {
            if (!fs::exists(archivoTemporal))
            {
                return false;
            }

            fs::copy_file(
                archivoTemporal,
                archivoOriginal,
                fs::copy_options::overwrite_existing
            );

            fs::remove(
                archivoTemporal
            );

            return true;
        }
        catch (...)
        {
            return false;
        }
    }

    bool GestorRollback::existeCopia() const
    {
        return fs::exists(
            archivoTemporal
        );
    }
}
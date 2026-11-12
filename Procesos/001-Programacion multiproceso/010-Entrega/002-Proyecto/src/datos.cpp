#include "../include/datos.hpp"
#include "../include/registro.hpp"

#include <fstream>
#include <set>

#ifndef RUTA_DATOS
#define RUTA_DATOS "datos"
#endif

namespace
{
    std::string recortar(const std::string& texto)
    {
        const char* espacios = " \t\r\n";

        std::size_t inicio = texto.find_first_not_of(espacios);

        if (inicio == std::string::npos)
        {
            return "";
        }

        std::size_t fin = texto.find_last_not_of(espacios);

        return texto.substr(inicio, fin - inicio + 1);
    }

    std::vector<Pedido> generar_por_defecto(int cantidad)
    {
        std::vector<Pedido> pedidos;

        for (int i = 1; i <= cantidad; i++)
        {
            pedidos.emplace_back(
                i,
                "Pedido " + std::to_string(i)
            );
        }

        return pedidos;
    }
}

std::string Datos::ruta_pedidos()
{
    return std::string(RUTA_DATOS) + "/pedidos.txt";
}

std::vector<Pedido> Datos::cargar_pedidos(
    std::string& origen,
    int pedidos_por_defecto
)
{
    std::string ruta = ruta_pedidos();

    std::ifstream archivo(ruta);

    if (!archivo.is_open())
    {
        Registro::aviso(
            "No se encontro " + ruta
            + ". Se generan " + std::to_string(pedidos_por_defecto)
            + " pedidos automaticamente."
        );

        origen = "Generados automaticamente (no existe datos/pedidos.txt)";

        return generar_por_defecto(pedidos_por_defecto);
    }

    std::vector<Pedido> pedidos;
    std::set<int> ids_usados;

    std::string linea;
    int numero_linea = 0;

    while (std::getline(archivo, linea))
    {
        numero_linea++;

        linea = recortar(linea);

        if (linea.empty() || linea[0] == '#')
        {
            continue;
        }

        std::size_t separador = linea.find(';');

        std::string texto_id =
            recortar(linea.substr(0, separador));

        std::string descripcion =
            separador == std::string::npos
                ? ""
                : recortar(linea.substr(separador + 1));

        int id = 0;
        bool id_valido = !texto_id.empty();

        try
        {
            std::size_t leidos = 0;
            id = std::stoi(texto_id, &leidos);
            id_valido = id_valido && leidos == texto_id.size() && id > 0;
        }
        catch (...)
        {
            id_valido = false;
        }

        if (separador == std::string::npos || !id_valido || descripcion.empty())
        {
            Registro::aviso(
                "Linea " + std::to_string(numero_linea)
                + " de pedidos.txt ignorada (formato esperado: id;descripcion): "
                + linea
            );
            continue;
        }

        if (!ids_usados.insert(id).second)
        {
            Registro::aviso(
                "Linea " + std::to_string(numero_linea)
                + " de pedidos.txt ignorada: el id "
                + std::to_string(id) + " esta repetido."
            );
            continue;
        }

        pedidos.emplace_back(id, descripcion);
    }

    if (pedidos.empty())
    {
        Registro::aviso(
            ruta + " no contiene pedidos validos. Se generan "
            + std::to_string(pedidos_por_defecto)
            + " pedidos automaticamente."
        );

        origen = "Generados automaticamente (datos/pedidos.txt sin pedidos validos)";

        return generar_por_defecto(pedidos_por_defecto);
    }

    Registro::info(
        "Cargados " + std::to_string(pedidos.size())
        + " pedidos desde " + ruta
    );

    origen = "Archivo datos/pedidos.txt";

    return pedidos;
}

#include "../include/almacen.hpp"

Almacen::Almacen()
{
    cerrado = false;
}

void Almacen::agregar_pedido(const Pedido& pedido)
{
    {
        std::lock_guard<std::mutex> bloqueo(mutex_pedidos);
        pedidos.push(pedido);
    }

    condicion.notify_one();
}

bool Almacen::hay_pedidos()
{
    std::lock_guard<std::mutex> bloqueo(mutex_pedidos);

    return !pedidos.empty();
}

bool Almacen::obtener_pedido(Pedido& pedido)
{
    std::unique_lock<std::mutex> bloqueo(mutex_pedidos);

    // Comprobar y extraer bajo el mismo bloqueo evita que dos
    // hilos compitan por el último pedido y uno se quede esperando.
    condicion.wait(
        bloqueo,
        [this]()
        {
            return !pedidos.empty() || cerrado;
        }
    );

    if (pedidos.empty())
    {
        return false;
    }

    pedido = pedidos.front();
    pedidos.pop();

    return true;
}

void Almacen::cerrar()
{
    {
        std::lock_guard<std::mutex> bloqueo(mutex_pedidos);
        cerrado = true;
    }

    condicion.notify_all();
}

int Almacen::total_pedidos()
{
    std::lock_guard<std::mutex> bloqueo(mutex_pedidos);

    return static_cast<int>(pedidos.size());
}

void Almacen::registrar_procesado(const Pedido& pedido)
{
    std::lock_guard<std::mutex> bloqueo(mutex_pedidos);

    procesados.push_back(pedido);
}

std::vector<Pedido> Almacen::obtener_procesados()
{
    std::lock_guard<std::mutex> bloqueo(mutex_pedidos);

    return procesados;
}

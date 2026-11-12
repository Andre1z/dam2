#include "../include/trabajador.hpp"
#include "../include/registro.hpp"

#include <chrono>
#include <iostream>

Trabajador::Trabajador(
    int id,
    const std::string& nombre,
    Almacen* almacen
)
{
    this->id = id;
    this->nombre = nombre;
    this->almacen = almacen;
    activo = false;
}

Trabajador::~Trabajador()
{
    detener();

    if (hilo.joinable())
    {
        hilo.join();
    }
}

int Trabajador::obtener_id() const
{
    return id;
}

std::string Trabajador::obtener_nombre() const
{
    return nombre;
}

void Trabajador::iniciar()
{
    activo = true;

    hilo = std::thread(
        &Trabajador::procesar,
        this
    );
}

void Trabajador::detener()
{
    activo = false;
}

void Trabajador::esperar()
{
    if (hilo.joinable())
    {
        hilo.join();
    }
}

void Trabajador::procesar()
{
    Pedido pedido;

    // obtener_pedido() comprueba y extrae de forma atómica:
    // devuelve false cuando el almacén se cierra y queda vacío.
    while (activo && almacen->obtener_pedido(pedido))
    {
        Registro::info(
            "Trabajador "
            + std::to_string(id)
            + " procesando pedido "
            + std::to_string(
                pedido.obtener_id()
            )
        );

        auto inicio = std::chrono::steady_clock::now();

        std::this_thread::sleep_for(
            std::chrono::seconds(2)
        );

        auto duracion =
            std::chrono::duration_cast<std::chrono::milliseconds>(
                std::chrono::steady_clock::now() - inicio
            );

        pedido.marcar_procesado(
            id,
            duracion.count()
        );

        almacen->registrar_procesado(pedido);

        Registro::info(
            "Trabajador "
            + std::to_string(id)
            + " finalizo pedido "
            + std::to_string(
                pedido.obtener_id()
            )
        );
    }
}
#include "../include/pedido.hpp"

Pedido::Pedido()
{
    id = 0;
    descripcion = "";
    procesado = false;
    trabajador_id = 0;
    duracion_ms = 0;
}

Pedido::Pedido(
    int id,
    const std::string& descripcion
)
{
    this->id = id;
    this->descripcion = descripcion;
    this->procesado = false;
    this->trabajador_id = 0;
    this->duracion_ms = 0;
}

int Pedido::obtener_id() const
{
    return id;
}

std::string Pedido::obtener_descripcion() const
{
    return descripcion;
}

bool Pedido::esta_procesado() const
{
    return procesado;
}

int Pedido::obtener_trabajador_id() const
{
    return trabajador_id;
}

long long Pedido::obtener_duracion_ms() const
{
    return duracion_ms;
}

void Pedido::marcar_procesado(
    int trabajador_id,
    long long duracion_ms
)
{
    this->procesado = true;
    this->trabajador_id = trabajador_id;
    this->duracion_ms = duracion_ms;
}

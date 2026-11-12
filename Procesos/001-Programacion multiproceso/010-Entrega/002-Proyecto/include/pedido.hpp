#ifndef PEDIDO_HPP
#define PEDIDO_HPP

#include <string>

class Pedido
{
private:
    int id;
    std::string descripcion;
    bool procesado;

    int trabajador_id;
    long long duracion_ms;

public:
    Pedido();

    Pedido(
        int id,
        const std::string& descripcion
    );

    int obtener_id() const;

    std::string obtener_descripcion() const;

    bool esta_procesado() const;

    int obtener_trabajador_id() const;

    long long obtener_duracion_ms() const;

    void marcar_procesado(
        int trabajador_id,
        long long duracion_ms
    );
};

#endif

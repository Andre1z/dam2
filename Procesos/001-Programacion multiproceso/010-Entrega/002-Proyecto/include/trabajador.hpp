#ifndef TRABAJADOR_HPP
#define TRABAJADOR_HPP

#include "almacen.hpp"

#include <atomic>
#include <string>
#include <thread>

class Trabajador
{
private:
    int id;
    std::string nombre;

    Almacen* almacen;

    std::thread hilo;

    std::atomic<bool> activo;

    void procesar();

public:
    Trabajador(
        int id,
        const std::string& nombre,
        Almacen* almacen
    );

    ~Trabajador();

    int obtener_id() const;

    std::string obtener_nombre() const;

    void iniciar();

    void detener();

    void esperar();
};

#endif
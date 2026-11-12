#ifndef ALMACEN_HPP
#define ALMACEN_HPP

#include "pedido.hpp"

#include <queue>
#include <mutex>
#include <condition_variable>
#include <vector>

class Almacen
{
private:
    std::queue<Pedido> pedidos;

    std::vector<Pedido> procesados;

    std::mutex mutex_pedidos;

    std::condition_variable condicion;

    bool cerrado;

public:
    Almacen();

    void agregar_pedido(const Pedido& pedido);

    bool hay_pedidos();

    /**
     * Extrae un pedido de la cola de forma atómica.
     * Espera mientras la cola esté vacía y el almacén siga abierto.
     * Devuelve false cuando el almacén está cerrado y ya no quedan pedidos.
     */
    bool obtener_pedido(Pedido& pedido);

    /**
     * Indica que no llegarán más pedidos y despierta
     * a todos los hilos que estén esperando.
     */
    void cerrar();

    int total_pedidos();

    /**
     * Guarda (de forma segura entre hilos) un pedido ya procesado
     * para poder generar después el informe de la simulación.
     */
    void registrar_procesado(const Pedido& pedido);

    std::vector<Pedido> obtener_procesados();
};

#endif

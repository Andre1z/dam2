#ifndef INFORME_HPP
#define INFORME_HPP

#include "pedido.hpp"

#include <string>
#include <vector>

/**
 * Resultado de la simulación de proceso hijo (opción 2).
 */
struct ResultadoProceso
{
    bool correcto = false;
    long pid_padre = 0;
    long pid_hijo = 0;
    int codigo_salida = -1;
    long long duracion_ms = 0;
};

class Informe
{
public:
    /**
     * Carpeta donde se guardan registros e informes.
     * Se crea si no existe.
     */
    static std::string carpeta();

    /**
     * Genera informes/informe_pedidos_<fecha>.txt con el detalle
     * de cada pedido y el resumen por trabajador.
     * Devuelve la ruta del archivo generado (vacía si falla).
     */
    static std::string guardar_pedidos(
        const std::vector<Pedido>& procesados,
        int total_pedidos,
        const std::string& origen,
        int total_trabajadores,
        long long duracion_total_ms
    );

    /**
     * Genera informes/informe_proceso_<fecha>.txt con el resultado
     * de la creación del proceso hijo.
     */
    static std::string guardar_proceso(
        const ResultadoProceso& resultado
    );
};

#endif

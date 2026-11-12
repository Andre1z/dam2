#include "../include/principal.hpp"

#include "../include/almacen.hpp"
#include "../include/datos.hpp"
#include "../include/informe.hpp"
#include "../include/pedido.hpp"
#include "../include/proceso.hpp"
#include "../include/registro.hpp"
#include "../include/trabajador.hpp"

#include <chrono>
#include <iostream>
#include <limits>
#include <string>
#include <vector>

namespace
{
    // Pedidos que se generan si no existe datos/pedidos.txt.
    const int PEDIDOS_POR_DEFECTO = 10;

    void mostrar_ruta_informe(const std::string& ruta)
    {
        if (ruta.empty())
        {
            Registro::error(
                "No se pudo guardar el informe."
            );
        }
        else
        {
            Registro::info(
                "Informe guardado en: " + ruta
            );
        }
    }
}

void iniciar_aplicacion()
{
    int opcion = 0;

    do
    {
        std::cout << "\n";
        std::cout << "=====================================\n";
        std::cout << " CENTRO LOGISTICO MULTIHILO\n";
        std::cout << "=====================================\n";
        std::cout << "1. Simular procesamiento de pedidos\n";
        std::cout << "2. Simular proceso hijo\n";
        std::cout << "3. Salir\n";
        std::cout << "=====================================\n";
        std::cout << "Seleccione una opcion: ";

        if (!(std::cin >> opcion))
        {
            if (std::cin.eof())
            {
                // Fin de la entrada (Ctrl+Z / Ctrl+D): salir limpiamente.
                opcion = 3;
            }
            else
            {
                // Entrada no numérica: limpiar el error y descartar la línea.
                std::cin.clear();
                std::cin.ignore(
                    std::numeric_limits<std::streamsize>::max(),
                    '\n'
                );
                opcion = 0;
            }
        }

        switch (opcion)
        {
            case 1:
            {
                Registro::info(
                    "Iniciando simulacion de pedidos."
                );

                Almacen almacen;

                std::string origen;

                std::vector<Pedido> pedidos =
                    Datos::cargar_pedidos(
                        origen,
                        PEDIDOS_POR_DEFECTO
                    );

                for (const Pedido& pedido : pedidos)
                {
                    almacen.agregar_pedido(
                        pedido
                    );
                }

                Trabajador trabajador1(
                    1,
                    "Trabajador 1",
                    &almacen
                );

                Trabajador trabajador2(
                    2,
                    "Trabajador 2",
                    &almacen
                );

                Trabajador trabajador3(
                    3,
                    "Trabajador 3",
                    &almacen
                );

                // No llegarán más pedidos: los trabajadores
                // terminan cuando la cola quede vacía.
                almacen.cerrar();

                auto inicio = std::chrono::steady_clock::now();

                trabajador1.iniciar();
                trabajador2.iniciar();
                trabajador3.iniciar();

                trabajador1.esperar();
                trabajador2.esperar();
                trabajador3.esperar();

                auto duracion =
                    std::chrono::duration_cast<std::chrono::milliseconds>(
                        std::chrono::steady_clock::now() - inicio
                    );

                Registro::info(
                    "Simulacion finalizada."
                );

                std::string ruta = Informe::guardar_pedidos(
                    almacen.obtener_procesados(),
                    static_cast<int>(pedidos.size()),
                    origen,
                    3,
                    duracion.count()
                );

                mostrar_ruta_informe(ruta);

                break;
            }

            case 2:
            {
                Registro::info(
                    "Ejecutando prueba de procesos."
                );

                ResultadoProceso resultado = Proceso::ejecutar();

                std::string ruta = Informe::guardar_proceso(resultado);

                mostrar_ruta_informe(ruta);

                break;
            }

            case 3:
            {
                Registro::info(
                    "Aplicacion finalizada."
                );

                break;
            }

            default:
            {
                Registro::error(
                    "Opcion no valida."
                );

                break;
            }
        }

    } while (opcion != 3);
}
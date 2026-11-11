#include <iostream>

#include "../include/configuracionorm.hpp"

int main()
{
    try
    {
        auto& almacenamiento = obtener_almacenamiento();

        std::cout
            << "Base de datos inicializada."
            << std::endl;

        // ==========================
        // TRANSACCION
        // ==========================

        using namespace sqlite_orm;

        auto clientes_demo = almacenamiento.get_all<cliente>(
            where(c(&cliente::email) == "demo@empresa.com")
        );

        if(clientes_demo.empty())
        {
            almacenamiento.begin_transaction();

            try
            {
                cliente nuevo_cliente;
                nuevo_cliente.nombre = "Empresa Demo";
                nuevo_cliente.email = "demo@empresa.com";
                nuevo_cliente.telefono = "600123456";
                nuevo_cliente.direccion = "Valencia";

                const auto clienteid = almacenamiento.insert(nuevo_cliente);

                oportunidad nueva_oportunidad;
                nueva_oportunidad.clienteid = clienteid;
                nueva_oportunidad.descripcion = "Venta CRM Empresa Demo";
                nueva_oportunidad.valor = 5000.0;
                nueva_oportunidad.estado = "abierta";
                almacenamiento.insert(nueva_oportunidad);

                almacenamiento.commit();
                std::cout << "Transaccion completada." << std::endl;
            }
            catch(...)
            {
                almacenamiento.rollback();
                throw;
            }
        }
        else
        {
            std::cout << "Los datos de demostracion ya existen." << std::endl;
        }

        // ==========================
        // CONSULTA DE CLIENTES
        // ==========================

        auto clientes =
            almacenamiento.get_all<cliente>();

        std::cout
            << "\nCLIENTES\n"
            << std::endl;

        for(const auto& c : clientes)
        {
            std::cout
                << c.id
                << " - "
                << c.nombre
                << " - "
                << c.email
                << std::endl;
        }

        // ==========================
        // BUSQUEDA POR ID
        // ==========================

        if(!clientes.empty())
        {
            auto cliente_recuperado =
                almacenamiento.get<cliente>(
                    clientes.front().id
                );

            std::cout
                << "\nCliente recuperado:"
                << std::endl;

            std::cout
                << cliente_recuperado.nombre
                << std::endl;

            // ==========================
            // ACTUALIZACION
            // ==========================

            cliente_recuperado.telefono =
                "666999888";

            almacenamiento.update(
                cliente_recuperado
            );

            std::cout
                << "Cliente actualizado."
                << std::endl;
        }

        // ==========================
        // CONSULTA FILTRADA ORM
        // ==========================

        auto oportunidades_abiertas =
            almacenamiento.get_all<
                oportunidad
            >(
                where(
                    c(
                        &oportunidad::estado
                    ) == "abierta"
                )
            );

        std::cout
            << "\nOPORTUNIDADES ABIERTAS: "
            << oportunidades_abiertas.size()
            << std::endl;

        for(
            const auto& oportunidad :
            oportunidades_abiertas
        )
        {
            std::cout
                << oportunidad.descripcion
                << " -> "
                << oportunidad.valor
                << " euros"
                << std::endl;
        }

        std::cout
            << "\nCRM funcionando correctamente."
            << std::endl;
    }
    catch(const std::exception& e)
    {
        std::cerr
            << "Error: "
            << e.what()
            << std::endl;

        return 1;
    }

    return 0;
}

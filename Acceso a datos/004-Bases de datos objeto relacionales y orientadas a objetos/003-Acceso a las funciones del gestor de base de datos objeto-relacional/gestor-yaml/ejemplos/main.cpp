#include "GestorYAML.h"
#include <filesystem>
#include <iostream>
#include <stdexcept>

namespace {
std::string buscarId(
    const GestorYAML& db,
    const std::string& baseDatos,
    const std::string& coleccion,
    const std::string& campo,
    const std::string& valor
) {
    for (const auto& documento : db.listar(baseDatos, coleccion)) {
        const YAML::Node campoDocumento = documento[campo];
        if (campoDocumento.IsScalar() && campoDocumento.as<std::string>() == valor)
            return documento["_id"].as<std::string>();
    }
    return {};
}
}

int main() {
    try {
        GestorYAML db{std::filesystem::path(GESTOR_YAML_DATA_DIR)};
        db.crearBaseDatos("empresa");
        db.crearColeccion("empresa", "clientes");
        db.crearColeccion("empresa", "productos");
        db.crearColeccion("empresa", "pedidos");
        db.crearColeccion("instituto", "alumnos");

        // JSON es un subconjunto de YAML; se carga el objeto de referencia del proyecto.
        const YAML::Node persona = YAML::LoadFile(GESTOR_YAML_PERSONA_JSON);
        if (!persona.IsMap() || !persona["email"].IsScalar())
            throw std::runtime_error("El objeto JSON debe incluir un email");

        const std::string email = persona["email"].as<std::string>();
        std::string idCliente = buscarId(db, "empresa", "clientes", "email", email);
        if (idCliente.empty()) {
            idCliente = db.guardar("empresa", "clientes", persona);
            std::cout << "Cliente insertado: " << idCliente << "\n";
        } else if (db.actualizar("empresa", "clientes", idCliente, persona)) {
            std::cout << "Cliente actualizado: " << idCliente << "\n";
        } else {
            throw std::runtime_error("No se pudo actualizar el cliente existente");
        }

        const std::string idAlumno = buscarId(db, "instituto", "alumnos", "email", email);
        if (idAlumno.empty())
            db.guardar("instituto", "alumnos", persona);
        else if (!db.actualizar("instituto", "alumnos", idAlumno, persona))
            throw std::runtime_error("No se pudo actualizar el alumno existente");

        YAML::Node producto;
        producto["nombre"] = "Portatil";
        producto["precio"] = 899.99;
        producto["stock"] = 12;
        std::string idProducto = buscarId(
            db, "empresa", "productos", "nombre", "Portatil"
        );
        if (idProducto.empty())
            idProducto = db.guardar("empresa", "productos", producto);
        else if (!db.actualizar("empresa", "productos", idProducto, producto))
            throw std::runtime_error("No se pudo actualizar el producto existente");

        // Relacion documental mediante identificadores
        YAML::Node pedido;
        pedido["cliente_id"] = idCliente;
        YAML::Node linea;
        linea["producto_id"] = idProducto;
        linea["cantidad"] = 2;
        pedido["lineas"].push_back(linea);
        pedido["estado"] = "pendiente";
        std::string idPedido = buscarId(
            db, "empresa", "pedidos", "cliente_id", idCliente
        );
        if (idPedido.empty())
            idPedido = db.guardar("empresa", "pedidos", pedido);
        else if (!db.actualizar("empresa", "pedidos", idPedido, pedido))
            throw std::runtime_error("No se pudo actualizar el pedido existente");

        // Lectura por ID y acceso tipado
        YAML::Node recuperado = db.leer("empresa", "clientes", idCliente);
        if (recuperado.IsDefined()) {
            std::cout << "Nombre: " << recuperado["nombre"].as<std::string>() << "\n";
            std::cout << "Email: " << recuperado["email"].as<std::string>() << "\n";
        }

        // Listado y lectura de todos los documentos
        for (const auto& doc : db.listar("empresa", "clientes"))
            std::cout << "Documento:\n" << YAML::Dump(doc) << "\n";

        // Filtro por igualdad
        YAML::Node condiciones;
        condiciones["email"] = email;
        for (const auto& doc : db.filtrar("empresa", "clientes", condiciones))
            std::cout << "Encontrado: " << doc["nombre"].as<std::string>() << "\n";

        // Metadatos
        std::cout << "Total clientes: " << db.contar("empresa", "clientes") << "\n";
        for (const auto& nombre : db.basesDeDatos()) {
            std::cout << "Base de datos: " << nombre << "\n";
            for (const auto& col : db.colecciones(nombre))
                std::cout << "  Coleccion: " << col << "\n";
        }

        // Crear, actualizar y eliminar un registro temporal de demostración.
        YAML::Node prueba;
        prueba["nombre"] = "Cliente de prueba";
        prueba["email"] = "prueba@example.invalid";
        const std::string idPrueba = db.guardar("empresa", "clientes", prueba);
        prueba["nombre"] = "Cliente de prueba actualizado";
        db.actualizar("empresa", "clientes", idPrueba, prueba);
        if (db.eliminar("empresa", "clientes", idPrueba))
            std::cout << "Cliente de prueba eliminado\n";

        std::cout << "Pedido almacenado: " << idPedido << "\n";
        std::cout << "Producto almacenado: " << idProducto << "\n";
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << "\n";
        return 1;
    }
}

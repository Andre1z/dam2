#ifndef DATOS_HPP
#define DATOS_HPP

#include "pedido.hpp"

#include <string>
#include <vector>

class Datos
{
public:
    /**
     * Ruta del archivo de pedidos de entrada (datos/pedidos.txt).
     */
    static std::string ruta_pedidos();

    /**
     * Lee los pedidos de datos/pedidos.txt.
     *
     * Formato: una línea por pedido  ->  id;descripcion
     * Se ignoran las líneas vacías y las que empiezan por '#'.
     * Las líneas con formato incorrecto se avisan en el registro.
     *
     * Si el archivo no existe o no contiene pedidos válidos,
     * se generan 'pedidos_por_defecto' pedidos automáticamente.
     *
     * 'origen' indica de dónde salieron los pedidos (para el informe).
     */
    static std::vector<Pedido> cargar_pedidos(
        std::string& origen,
        int pedidos_por_defecto = 10
    );
};

#endif

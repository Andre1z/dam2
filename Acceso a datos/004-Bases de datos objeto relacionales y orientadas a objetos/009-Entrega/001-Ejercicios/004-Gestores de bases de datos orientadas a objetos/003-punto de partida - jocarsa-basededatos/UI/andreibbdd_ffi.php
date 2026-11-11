<?php
declare(strict_types=1);
/*
 * Sustituto de la extensión PHP andreibbdd para Windows (XAMPP).
 *
 * En Linux, las funciones andreibbdd_* las aporta la extensión nativa
 * (motor/src/conector_php.cpp). En Windows se cargan desde
 * motor/andreibbdd.dll mediante FFI. Cada función tiene la misma firma y
 * devuelve lo mismo que la extensión; los errores del motor se lanzan como
 * Exception, igual que hace la extensión.
 *
 * Requisitos en C:\xampp\php\php.ini:
 *   extension=ffi
 *   ffi.enable=true
 */

if (extension_loaded('andreibbdd') || function_exists('andreibbdd_configurar')) {
    return;
}

function __andreibbdd_ffi(): FFI
{
    static $ffi = null;
    if ($ffi !== null) {
        return $ffi;
    }
    if (!extension_loaded('ffi') || !class_exists('FFI')) {
        throw new RuntimeException('Activa FFI en php.ini (extension=ffi y ffi.enable=true) y reinicia Apache.');
    }
    $dll = getenv('ANDREIBBDD_DLL') ?: dirname(__DIR__) . '/motor/andreibbdd.dll';
    if (!is_file($dll)) {
        throw new RuntimeException('No se encuentra ' . $dll . '. Compílala con motor/compilar-windows.bat.');
    }
    $ffi = FFI::cdef(
        'char* andreibbdd_llamar(const char* funcion, const char* argumentos);
         void andreibbdd_liberar(char* texto);',
        $dll
    );
    return $ffi;
}

/** Llama al motor y devuelve el resultado decodificado, o lanza Exception. */
function __andreibbdd(string $funcion, array $argumentos = []): mixed
{
    $ffi = __andreibbdd_ffi();
    $json = json_encode($argumentos, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE | JSON_THROW_ON_ERROR);
    $puntero = $ffi->andreibbdd_llamar($funcion, $json);
    if ($puntero === null) {
        throw new Exception('Respuesta vacía de andreibbdd.dll');
    }
    try {
        $texto = FFI::string($puntero);
    } finally {
        $ffi->andreibbdd_liberar($puntero);
    }
    $respuesta = json_decode($texto, true, 512, JSON_THROW_ON_ERROR);
    if (!($respuesta['ok'] ?? false)) {
        throw new Exception((string)($respuesta['error'] ?? 'Error en AndreiBBDD'));
    }
    return $respuesta['resultado'] ?? null;
}

/** Igual que la extensión: los valores se convierten a texto y null se conserva. */
function __andreibbdd_textos(array $valores): array
{
    return array_map(static fn($v) => $v === null ? null : (is_bool($v) ? ($v ? '1' : '') : (string)$v), $valores);
}

/** Igual que la extensión: solo se conservan las claves de texto. */
function __andreibbdd_asociativo(array $valores): object
{
    $r = [];
    foreach ($valores as $k => $v) {
        if (is_string($k)) {
            $r[$k] = $v === null ? null : (is_bool($v) ? ($v ? '1' : '') : (string)$v);
        }
    }
    return (object)$r;
}

/* Configuración / bases */
function andreibbdd_configurar(string $config): bool { return __andreibbdd('configurar', [$config]); }
function andreibbdd_configuracion(): array { return __andreibbdd('configuracion'); }
function andreibbdd_crear_base(string $nombre): bool { return __andreibbdd('crear_base', [$nombre]); }
function andreibbdd_usar_base(string $nombre): bool { return __andreibbdd('usar_base', [$nombre]); }
function andreibbdd_listar_bases(): array { return __andreibbdd('listar_bases'); }
function andreibbdd_eliminar_base(string $nombre): bool { return __andreibbdd('eliminar_base', [$nombre]); }

/* Tablas / introspección */
function andreibbdd_listar_tablas(): array { return __andreibbdd('listar_tablas'); }
function andreibbdd_crear_tabla(string $tabla, string $esquema): bool { return __andreibbdd('crear_tabla', [$tabla, $esquema]); }
function andreibbdd_crear_tabla_tipada(string $tabla, array $columnas): bool { return __andreibbdd('crear_tabla_tipada', [$tabla, __andreibbdd_asociativo($columnas)]); }
function andreibbdd_esquema(string $tabla): array { return __andreibbdd('esquema', [$tabla]); }
function andreibbdd_tipos(string $tabla): array { return __andreibbdd('tipos', [$tabla]); }
function andreibbdd_clave_primaria(string $tabla): string { return __andreibbdd('clave_primaria', [$tabla]); }
function andreibbdd_claves_foraneas(string $tabla): array { return __andreibbdd('claves_foraneas', [$tabla]); }
function andreibbdd_restricciones(string $tabla, string $columna): array { return __andreibbdd('restricciones', [$tabla, $columna]); }
function andreibbdd_siguiente_id(string $tabla): int { return __andreibbdd('siguiente_id', [$tabla]); }
function andreibbdd_truncar_tabla(string $tabla): bool { return __andreibbdd('truncar_tabla', [$tabla]); }
function andreibbdd_eliminar_tabla(string $tabla): bool { return __andreibbdd('eliminar_tabla', [$tabla]); }

/* ALTER */
function andreibbdd_alterar_anadir(string $tabla, string $columna): bool { return __andreibbdd('alterar_anadir', [$tabla, $columna]); }
function andreibbdd_alterar_eliminar_columna(string $tabla, string $columna): bool { return __andreibbdd('alterar_eliminar_columna', [$tabla, $columna]); }
function andreibbdd_alterar_renombrar_columna(string $tabla, string $antigua, string $nueva): bool { return __andreibbdd('alterar_renombrar_columna', [$tabla, $antigua, $nueva]); }
function andreibbdd_alterar_modificar_columna(string $tabla, string $antigua, string $nueva): bool { return __andreibbdd('alterar_modificar_columna', [$tabla, $antigua, $nueva]); }

/* CRUD */
function andreibbdd_insertar(string $tabla, array $valores): int { return __andreibbdd('insertar', [$tabla, __andreibbdd_textos(array_values($valores))]); }
function andreibbdd_insertar_columnas(string $tabla, array $columnas, array $valores): int { return __andreibbdd('insertar_columnas', [$tabla, __andreibbdd_textos(array_values($columnas)), __andreibbdd_textos(array_values($valores))]); }
function andreibbdd_insertar_desde(string $destino, string $origen): int { return __andreibbdd('insertar_desde', [$destino, $origen]); }
function andreibbdd_seleccionar(string $tabla, int $id): array { return __andreibbdd('seleccionar', [$tabla, $id]); }
function andreibbdd_listar(string $tabla): array { return __andreibbdd('listar', [$tabla]); }
function andreibbdd_buscar(string $tabla, string $columna, string $valor): array { return __andreibbdd('buscar', [$tabla, $columna, $valor]); }
function andreibbdd_actualizar(string $tabla, int $id, array $valores): bool { return __andreibbdd('actualizar', [$tabla, $id, __andreibbdd_textos(array_values($valores))]); }
function andreibbdd_eliminar(string $tabla, int $id): bool { return __andreibbdd('eliminar', [$tabla, $id]); }
function andreibbdd_actualizar_donde(string $tabla, array $cambios, string $columna = '', string $valor = ''): int { return __andreibbdd('actualizar_donde', [$tabla, __andreibbdd_asociativo($cambios), $columna, $valor]); }
function andreibbdd_eliminar_donde(string $tabla, string $columna = '', string $valor = ''): int { return __andreibbdd('eliminar_donde', [$tabla, $columna, $valor]); }

/* Relaciones / restricciones */
function andreibbdd_anadir_clave_foranea(string $tabla, string $columna, string $tablaReferenciada, string $columnaReferenciada = 'id'): bool { return __andreibbdd('anadir_clave_foranea', [$tabla, $columna, $tablaReferenciada, $columnaReferenciada]); }
function andreibbdd_establecer_no_nulo(string $tabla, string $columna): bool { return __andreibbdd('establecer_no_nulo', [$tabla, $columna]); }
function andreibbdd_establecer_unico(string $tabla, string $columna): bool { return __andreibbdd('establecer_unico', [$tabla, $columna]); }
function andreibbdd_establecer_por_defecto(string $tabla, string $columna, string $valor): bool { return __andreibbdd('establecer_por_defecto', [$tabla, $columna, $valor]); }

/* Consultas */
function andreibbdd_consultar(string $consulta): array { return __andreibbdd('consultar', [$consulta]); }
function andreibbdd_explicar(string $consulta): string { return __andreibbdd('explicar', [$consulta]); }

/* Índices */
function andreibbdd_crear_indice(string $nombre, string $tabla, string $columna): bool { return __andreibbdd('crear_indice', [$nombre, $tabla, $columna]); }
function andreibbdd_eliminar_indice(string $nombre, string $tabla): bool { return __andreibbdd('eliminar_indice', [$nombre, $tabla]); }
function andreibbdd_indices(string $tabla): array { return __andreibbdd('indices', [$tabla]); }

/* Vistas */
function andreibbdd_crear_vista(string $nombre, string $consulta): bool { return __andreibbdd('crear_vista', [$nombre, $consulta]); }
function andreibbdd_eliminar_vista(string $nombre): bool { return __andreibbdd('eliminar_vista', [$nombre]); }
function andreibbdd_listar_vistas(): array { return __andreibbdd('listar_vistas'); }

/* Transacciones */
function andreibbdd_iniciar_transaccion(): bool { return __andreibbdd('iniciar_transaccion'); }
function andreibbdd_confirmar(): bool { return __andreibbdd('confirmar'); }
function andreibbdd_deshacer(): bool { return __andreibbdd('deshacer'); }
function andreibbdd_en_transaccion(): bool { return __andreibbdd('en_transaccion'); }

/* Colecciones */
function andreibbdd_crear_subcoleccion(string $padre, string $nombre): bool { return __andreibbdd('crear_subcoleccion', [$padre, $nombre]); }
function andreibbdd_mover_coleccion(string $nombre, string $nuevoPadre): bool { return __andreibbdd('mover_coleccion', [$nombre, $nuevoPadre]); }
function andreibbdd_subcolecciones_de(string $nombre): array { return __andreibbdd('subcolecciones_de', [$nombre]); }
function andreibbdd_tablas_coleccion_recursiva(string $nombre): array { return __andreibbdd('tablas_coleccion_recursiva', [$nombre]); }
function andreibbdd_arbol_colecciones(): string { return __andreibbdd('arbol_colecciones'); }
function andreibbdd_crear_coleccion(string $nombre): bool { return __andreibbdd('crear_coleccion', [$nombre]); }
function andreibbdd_eliminar_coleccion(string $nombre): bool { return __andreibbdd('eliminar_coleccion', [$nombre]); }
function andreibbdd_agregar_tabla_coleccion(string $tabla, string $coleccion): bool { return __andreibbdd('agregar_tabla_coleccion', [$tabla, $coleccion]); }
function andreibbdd_quitar_tabla_coleccion(string $tabla, string $coleccion): bool { return __andreibbdd('quitar_tabla_coleccion', [$tabla, $coleccion]); }
function andreibbdd_listar_colecciones(): array { return __andreibbdd('listar_colecciones'); }
function andreibbdd_tablas_de_coleccion(string $coleccion): array { return __andreibbdd('tablas_de_coleccion', [$coleccion]); }
function andreibbdd_colecciones_de_tabla(string $tabla): array { return __andreibbdd('colecciones_de_tabla', [$tabla]); }

# Reporte de proyecto

## Estructura del proyecto

```
C:\xampp\htdocs\dam2\Sistemas de gestion\003-Organización y consulta de la información\012-Entrega
├── 001-Ejercicios
├── 002-Proyecto
│   ├── assets
│   │   ├── css
│   │   │   ├── clientes_crear.css
│   │   │   ├── clientes_editar.css
│   │   │   ├── clientes_listar.css
│   │   │   ├── exportaciones_index.css
│   │   │   ├── exportar_pdf.css
│   │   │   ├── index.css
│   │   │   ├── informes_index.css
│   │   │   ├── informes_mejores_clientes.css
│   │   │   ├── informes_productos_vendidos.css
│   │   │   ├── informes_ventas_mes.css
│   │   │   ├── login.css
│   │   │   ├── productos_crear.css
│   │   │   ├── productos_editar.css
│   │   │   ├── productos_listar.css
│   │   │   ├── rendimiento.css
│   │   │   ├── ventas_detalle.css
│   │   │   ├── ventas_listar.css
│   │   │   └── ventas_nueva.css
│   │   └── js
│   │       ├── clientes_crear.js
│   │       ├── clientes_editar.js
│   │       ├── clientes_listar.js
│   │       ├── exportaciones_index.js
│   │       ├── exportar_pdf.js
│   │       ├── index.js
│   │       ├── informes_index.js
│   │       ├── informes_mejores_clientes.js
│   │       ├── informes_productos_vendidos.js
│   │       ├── informes_ventas_mes.js
│   │       ├── login.js
│   │       ├── productos_crear.js
│   │       ├── productos_editar.js
│   │       ├── productos_listar.js
│   │       ├── rendimiento.js
│   │       ├── ventas_detalle.js
│   │       ├── ventas_listar.js
│   │       └── ventas_nueva.js
│   ├── clientes
│   │   ├── crear.php
│   │   ├── editar.php
│   │   ├── eliminar.php
│   │   └── listar.php
│   ├── database
│   │   ├── conexion.php
│   │   └── erp.sqlite
│   ├── docs
│   │   ├── incidencias.md
│   │   ├── manual_instalacion.md
│   │   └── manual_usuario.md
│   ├── exportaciones
│   │   ├── exportar_clientes.php
│   │   ├── exportar_pdf.php
│   │   ├── exportar_ventas.php
│   │   └── index.php
│   ├── index.php
│   ├── informes
│   │   ├── index.php
│   │   ├── mejores_clientes.php
│   │   ├── productos_vendidos.php
│   │   ├── rendimiento.php
│   │   └── ventas_mes.php
│   ├── login.php
│   ├── logout.php
│   ├── procesos
│   │   ├── actualizacion_estadisticas.php
│   │   └── respaldo.php
│   ├── productos
│   │   ├── crear.php
│   │   ├── editar.php
│   │   ├── eliminar.php
│   │   └── listar.php
│   └── ventas
│       ├── detalle.php
│       ├── listar.php
│       └── nueva.php
└── 003-Resultado de Aprendizaje
```

## Código (intercalado)

# 012-Entrega
## 001-Ejercicios
## 002-Proyecto
**index.php**
```php
<?php

session_start();

if (!isset($_SESSION['usuario'])) {

    header('Location: login.php');
    exit;
}

require_once 'database/conexion.php';

$db = Conexion::conectar();

$totalClientes = $db->query("
    SELECT COUNT(*)
    FROM clientes
")->fetchColumn();

$totalProductos = $db->query("
    SELECT COUNT(*)
    FROM productos
")->fetchColumn();

$totalVentas = $db->query("
    SELECT COUNT(*)
    FROM ventas
")->fetchColumn();

$facturacion = $db->query("
    SELECT COALESCE(
        SUM(total),
        0
    )
    FROM ventas
")->fetchColumn();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        ERP-CRM VentasPro
    </title>

    <link
        rel="stylesheet"
        href="assets/css/index.css"
    >

</head>

<body>

<header>

    <div class="header-top">

        <div>

            <h1>
                ERP-CRM VentasPro
            </h1>

            <p>
                Sistema de Gestión Empresarial
            </p>

        </div>

        <div>

            <span>
                Usuario:
                <strong>
                    <?= htmlspecialchars($_SESSION['usuario']) ?>
                </strong>
            </span>

            <a
                href="logout.php"
                class="logout-btn"
            >
                Cerrar Sesión
            </a>

        </div>

    </div>

</header>

<nav>

    <a href="index.php">
        Inicio
    </a>

    <a href="clientes/listar.php">
        Clientes
    </a>

    <a href="productos/listar.php">
        Productos
    </a>

    <a href="ventas/listar.php">
        Ventas
    </a>

    <a href="informes/index.php">
        Informes
    </a>

    <a href="exportaciones/index.php">
        Exportaciones
    </a>

</nav>

<div class="contenedor">

    <section class="bienvenida">

        <h2>
            Panel Principal
        </h2>

        <p>
            Bienvenido al ERP-CRM VentasPro.
            Desde este panel podrás gestionar clientes,
            productos, ventas, informes,
            exportaciones y procesos automáticos.
        </p>

    </section>

    <section class="dashboard">

        <article class="tarjeta clientes">

            <h2>
                Clientes
            </h2>

            <div class="numero">
                <?= $totalClientes ?>
            </div>

        </article>

        <article class="tarjeta productos">

            <h2>
                Productos
            </h2>

            <div class="numero">
                <?= $totalProductos ?>
            </div>

        </article>

        <article class="tarjeta ventas">

            <h2>
                Ventas
            </h2>

            <div class="numero">
                <?= $totalVentas ?>
            </div>

        </article>

        <article class="tarjeta facturacion">

            <h2>
                Facturación
            </h2>

            <div class="numero">
                <?= number_format(
                    $facturacion,
                    2
                ) ?>
                €
            </div>

        </article>

    </section>

    <section class="modulos">

        <div class="modulo">

            <h3>
                Clientes
            </h3>

            <p>
                Gestión completa de clientes.
            </p>

            <a href="clientes/listar.php">
                Abrir
            </a>

        </div>

        <div class="modulo">

            <h3>
                Productos
            </h3>

            <p>
                Gestión de productos y stock.
            </p>

            <a href="productos/listar.php">
                Abrir
            </a>

        </div>

        <div class="modulo">

            <h3>
                Ventas
            </h3>

            <p>
                Registro y seguimiento de ventas.
            </p>

            <a href="ventas/listar.php">
                Abrir
            </a>

        </div>

        <div class="modulo">

            <h3>
                Informes
            </h3>

            <p>
                Análisis y estadísticas del negocio.
            </p>

            <a href="informes/index.php">
                Abrir
            </a>

        </div>

        <div class="modulo">

            <h3>
                Exportaciones
            </h3>

            <p>
                Exportación de información a CSV y PDF.
            </p>

            <a href="exportaciones/index.php">
                Abrir
            </a>

        </div>

        <div class="modulo">

            <h3>
                Copias de Seguridad
            </h3>

            <p>
                Generación de backups automáticos.
            </p>

            <a href="procesos/respaldo.php">
                Ejecutar
            </a>

        </div>

        <div class="modulo">

            <h3>
                Estadísticas
            </h3>

            <p>
                Actualización automática de métricas.
            </p>

            <a href="procesos/actualizacion_estadisticas.php">
                Ejecutar
            </a>

        </div>

        <div class="modulo">

            <h3>
                Rendimiento
            </h3>

            <p>
                Monitor de rendimiento del sistema.
            </p>

            <a href="informes/rendimiento.php">
                Ver Informe
            </a>

        </div>

    </section>

</div>

<footer>

    ERP-CRM VentasPro © <?= date('Y') ?>

</footer>

<script src="assets/js/index.js"></script>

</body>
</html>
```
**login.php**
```php
<?php

session_start();

if (isset($_SESSION['usuario'])) {

    header('Location: index.php');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $usuario = trim($_POST['usuario'] ?? '');
    $password = trim($_POST['password'] ?? '');

    /*
    |--------------------------------------------------------------------------
    | Credenciales de ejemplo
    |--------------------------------------------------------------------------
    */

    $usuarioValido = 'admin';
    $passwordValida = 'admin123';

    if (
        $usuario === $usuarioValido &&
        $password === $passwordValida
    ) {

        $_SESSION['usuario'] = $usuario;

        header('Location: index.php');
        exit;

    } else {

        $error = 'Usuario o contraseña incorrectos.';
    }
}

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Iniciar Sesión
    </title>

    <link
        rel="stylesheet"
        href="assets/css/login.css"
    >

</head>

<body>

<div class="login-container">

    <div class="login-card">

        <h1>
            ERP-CRM VentasPro
        </h1>

        <h2>
            Iniciar Sesión
        </h2>

        <?php if(!empty($error)): ?>

            <div class="error">

                <?= htmlspecialchars($error) ?>

            </div>

        <?php endif; ?>

        <form
            method="POST"
            id="formLogin"
        >

            <div class="grupo">

                <label for="usuario">
                    Usuario
                </label>

                <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    required
                >

            </div>

            <div class="grupo">

                <label for="password">
                    Contraseña
                </label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                >

            </div>

            <button
                type="submit"
                class="boton"
            >
                Entrar
            </button>

        </form>

        <div class="credenciales">

            Usuario: admin<br>
            Contraseña: admin123

        </div>

    </div>

</div>

<script src="assets/js/login.js"></script>

</body>
</html>
```
**logout.php**
```php
<?php

session_start();

session_unset();

session_destroy();

header('Location: login.php');

exit;
```
### assets
#### css
**clientes_crear.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:700px;
    margin:auto;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

.grupo{
    margin-bottom:20px;
}

label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
}

input{
    width:100%;
    padding:12px;
    border:1px solid #ccc;
    border-radius:6px;
}

input:focus{
    outline:none;
    border-color:#2563eb;
}

.guardar{
    background:#2563eb;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:6px;
    cursor:pointer;
}

.guardar:hover{
    background:#1d4ed8;
}

.error{
    background:#fee2e2;
    color:#b91c1c;
    padding:12px;
    border-radius:6px;
    margin-bottom:20px;
}

.volver{
    display:inline-block;
    margin-top:20px;
    text-decoration:none;
    color:#1e3a8a;
    font-weight:bold;
}
```
**clientes_editar.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:700px;
    margin:auto;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

.grupo{
    margin-bottom:20px;
}

label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
    color:#1f2937;
}

input{
    width:100%;
    padding:12px;
    border:1px solid #d1d5db;
    border-radius:6px;
}

input:focus{
    outline:none;
    border-color:#2563eb;
}

.guardar{
    background:#16a34a;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:6px;
    cursor:pointer;
}

.guardar:hover{
    background:#15803d;
}

.volver{
    display:inline-block;
    margin-top:20px;
    color:#1e3a8a;
    text-decoration:none;
    font-weight:bold;
}

.error{
    background:#fee2e2;
    color:#b91c1c;
    padding:12px;
    border-radius:6px;
    margin-bottom:20px;
}
```
**clientes_listar.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:1200px;
    margin:auto;
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

.acciones{
    margin-bottom:20px;
    display:flex;
    gap:10px;
    flex-wrap:wrap;
}

.boton{
    display:inline-block;
    background:#2563eb;
    color:white;
    text-decoration:none;
    padding:12px 20px;
    border-radius:6px;
    transition:.3s;
}

.boton:hover{
    background:#1d4ed8;
}

.exportar{
    background:#16a34a;
}

.exportar:hover{
    background:#15803d;
}

table{
    width:100%;
    background:white;
    border-collapse:collapse;
    border-radius:10px;
    overflow:hidden;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

th{
    background:#1e3a8a;
    color:white;
    padding:15px;
    text-align:left;
}

td{
    padding:12px;
    border-bottom:1px solid #e5e7eb;
}

tr:hover{
    background:#f8fafc;
}

.editar{
    display:inline-block;
    padding:8px 12px;
    background:#16a34a;
    color:white;
    text-decoration:none;
    border-radius:5px;
    margin-right:5px;
}

.editar:hover{
    background:#15803d;
}

.eliminar{
    display:inline-block;
    padding:8px 12px;
    background:#dc2626;
    color:white;
    text-decoration:none;
    border-radius:5px;
}

.eliminar:hover{
    background:#b91c1c;
}

.sin-datos{
    background:white;
    padding:25px;
    text-align:center;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.volver{
    display:inline-block;
    margin-top:20px;
    color:#1e3a8a;
    text-decoration:none;
    font-weight:bold;
}

.volver:hover{
    text-decoration:underline;
}

@media(max-width:768px){

    body{
        padding:15px;
    }

    table{
        display:block;
        overflow-x:auto;
    }

}
```
**exportaciones_index.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:1200px;
    margin:auto;
}

h1{    color:#1e3a8a;
    margin-bottom:30px;
}

.tarjetas{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
   gap:20px;
}

.tarjeta{
    background:white;
    padding:25px;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.tarjet h2{
    margin-bottom:10px;
    color:#1e3a8a;
}

.tarjeta p{
    margin-bottom:20px;
}

.tarjeta a{
    display:inline-block;
    text-decoration:none;
    background:#16a34a;
    color:white;
    padding:10px 18px;
    border-radius:6px;
}

.tarjeta a:hover{
    background:#15803d;
}

.volver{
    display:inline-block;
    margin-top:30px;
    color:#1e3a8a;
    text-decoration:none;
    font-weight:bold;
}
```
**exportar_pdf.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    padding:20px;
}

.informe{
    max-width:900px;
    margin:auto;
    background:white;
    padding:40px;
    border-radius:10px;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
}

header{
    text-align:center;
    margin-bottom:20px;
}

header h1{
    color:#1e3a8a;
    margin-bottom:10px;
}

h2{
    margin-top:25px;
    margin-bottom:15px;
    color:#1e3a8a;
}

table{
    width:100%;
    border-collapse:collapse;
}

td{
    border:1px solid #ddd;
    padding:12px;
}

td:first-child{
    font-weight:bold;
}

.acciones{
    margin-top:30px;
    text-align:center;
}

button{
    background:#2563eb;
    color:white;
    border:none;
    padding:12px 24px;
    border-radius:6px;
    cursor:pointer;
}

button:hover{
    background:#1d4ed8;
}

@media print{

    .acciones{
        display:none;
    }

    body{
        background:white;
    }

    .informe{
        box-shadow:none;
        border:none;
    }

}
```
**index.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root{
    --color-primario:#1e3a8a;
    --color-secundario:#2563eb;
    --color-exito:#16a34a;
    --color-info:#0891b2;
    --color-fondo:#f4f6f9;
    --color-texto:#1f2937;
    --color-blanco:#ffffff;
    --sombra:0 4px 12px rgba(0,0,0,.08);
}

body{
    background:var(--color-fondo);
    color:var(--color-texto);
    min-height:100vh;
}

header{
    background:linear-gradient(
        135deg,
        var(--color-primario),
        var(--color-secundario)
    );

    color:white;
    padding:30px;
    box-shadow:var(--sombra);
}

header h1{
    font-size:32px;
    margin-bottom:10px;
}

header p{
    opacity:.95;
}

nav{
    background:white;
    padding:15px 30px;
    box-shadow:var(--sombra);

    display:flex;
    flex-wrap:wrap;
    gap:10px;
}

nav a{
    text-decoration:none;
    color:var(--color-primario);
    font-weight:600;
    padding:10px 15px;
    border-radius:6px;
    transition:.3s;
}

nav a:hover{
    background:#dbeafe;
}

.contenedor{
    width:95%;
    max-width:1400px;
    margin:30px auto;
}

.bienvenida{
    background:white;
    padding:25px;
    border-radius:12px;
    box-shadow:var(--sombra);
    margin-bottom:25px;
}

.bienvenida h2{
    color:var(--color-primario);
    margin-bottom:10px;
}

.dashboard{
    display:grid;
    grid-template-columns:
    repeat(
        auto-fit,
        minmax(250px,1fr)
    );

    gap:20px;
}

.tarjeta{
    background:white;
    padding:25px;
    border-radius:12px;
    box-shadow:var(--sombra);
    transition:.3s;
}

.tarjeta:hover{
    transform:translateY(-5px);
}

.tarjeta h2{
    color:var(--color-primario);
    margin-bottom:15px;
    font-size:20px;
}

.numero{
    font-size:42px;
    font-weight:bold;
}

.tarjeta.clientes{
    border-left:6px solid #2563eb;
}

.tarjeta.productos{
    border-left:6px solid #0891b2;
}

.tarjeta.ventas{
    border-left:6px solid #16a34a;
}

.tarjeta.facturacion{
    border-left:6px solid #ca8a04;
}

.modulos{
    margin-top:35px;

    display:grid;

    grid-template-columns:
    repeat(
        auto-fit,
        minmax(250px,1fr)
    );

    gap:20px;
}

.modulo{
    background:white;
    border-radius:12px;
    padding:25px;
    box-shadow:var(--sombra);
}

.modulo h3{
    color:var(--color-primario);
    margin-bottom:15px;
}

.modulo p{
    margin-bottom:20px;
    line-height:1.5;
}

.modulo a{
    display:inline-block;

    text-decoration:none;

    background:var(--color-secundario);
    color:white;

    padding:10px 16px;

    border-radius:6px;
}

.modulo a:hover{
    opacity:.9;
}

footer{
    margin-top:50px;

    text-align:center;

    padding:20px;

    color:#6b7280;
}

@media (max-width:768px){

    header{
        text-align:center;
    }

    nav{
        justify-content:center;
    }

    .numero{
        font-size:32px;
    }

}
```
**informes_index.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:1200px;
    margin:auto;
}

h1{
    color:#1e3a8a;
    margin-bottom:30px;
}

.tarjetas{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.tarjeta{
    background:white;
    padding:25px;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.tarjeta h2{
    margin-bottom:10px;
    color:#1e3a8a;
}

.tarjeta p{
    margin-bottom:20px;
}

.tarjeta a{
    display:inline-block;
    text-decoration:none;
    background:#2563eb;
    color:white;
    padding:10px 16px;
    border-radius:6px;
}

.tarjeta a:hover{
    background:#1d4ed8;
}

.volver{
    display:inline-block;
    margin-top:30px;
    color:#1e3a8a;
    font-weight:bold;
    text-decoration:none;
}
```
**informes_mejores_clientes.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:1200px;
    margin:auto;
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

table{
    width:100%;
    border-collapse:collapse;
    background:white;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

th{
    background:#1e3a8a;
    color:white;
    padding:15px;
}

td{
    padding:12px;
    border-bottom:1px solid #e5e7eb;
}

tr:hover{
    background:#f8fafc;
}

.sin-datos{
    background:white;
    padding:20px;
    border-radius:8px;
    text-align:center;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.volver{
    display:inline-block;
    margin-top:20px;
    text-decoration:none;
    color:#1e3a8a;
    font-weight:bold;
}
```
**informes_productos_vendidos.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:1200px;
    margin:auto;
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

table{
    width:100%;
    border-collapse:collapse;
    background:white;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

th{
    background:#1e3a8a;
    color:white;
    padding:15px;
}

td{
    padding:12px;
    border-bottom:1px solid #e5e7eb;
}

tr:hover{
    background:#f8fafc;
}

.sin-datos{
    background:white;
    padding:20px;
    border-radius:8px;
    text-align:center;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.volver{
    display:inline-block;
    margin-top:20px;
    text-decoration:none;
    color:#1e3a8a;
    font-weight:bold;
}
```
**informes_ventas_mes.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:1200px;
    margin:auto;
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

table{
    width:100%;
    background:white;
    border-collapse:collapse;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

th{
    background:#1e3a8a;
    color:white;
    padding:15px;
}

td{
    padding:12px;
    border-bottom:1px solid #e5e7eb;
}

tr:hover{
    background:#f8fafc;
}

.sin-datos{
    background:white;
    padding:20px;
    border-radius:8px;
    text-align:center;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.volver{
    display:inline-block;
    margin-top:20px;
    text-decoration:none;
    color:#1e3a8a;
    font-weight:bold;
}
```
**login.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#f4f6f9;
}

.login-container{
    width:100%;
    max-width:450px;
    padding:20px;
}

.login-card{
    background:white;
    padding:40px;
    border-radius:12px;
    box-shadow:0 4px 12px rgba(0,0,0,.1);
}

.login-card h1{
    color:#1e3a8a;
    text-align:center;
    margin-bottom:10px;
}

.login-card h2{
    text-align:center;
    margin-bottom:25px;
    color:#374151;
}

.grupo{
    margin-bottom:20px;
}

label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
}

input{
    width:100%;
    padding:12px;
    border:1px solid #d1d5db;
    border-radius:6px;
}

input:focus{
    outline:none;
    border-color:#2563eb;
}

.boton{
    width:100%;
    border:none;
    background:#2563eb;
    color:white;
    padding:12px;
    border-radius:6px;
    cursor:pointer;
    font-size:16px;
}

.boton:hover{
    background:#1d4ed8;
}

.error{
    background:#fee2e2;
    color:#b91c1c;
    padding:12px;
    border-radius:6px;
    margin-bottom:20px;
}

.credenciales{
    margin-top:20px;
    padding:15px;
    background:#f8fafc;
    border-radius:6px;
    text-align:center;
    font-size:14px;
}
```
**productos_crear.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:700px;
    margin:auto;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

.grupo{
    margin-bottom:20px;
}

label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
    color:#1f2937;
}

input{
    width:100%;
    padding:12px;
    border:1px solid #d1d5db;
    border-radius:6px;
}

input:focus{
    outline:none;
    border-color:#2563eb;
}

.guardar{
    background:#2563eb;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:6px;
    cursor:pointer;
}

.guardar:hover{
    background:#1d4ed8;
}

.volver{
    display:inline-block;
    margin-top:20px;
    text-decoration:none;
    color:#1e3a8a;
    font-weight:bold;
}

.error{
    background:#fee2e2;
    color:#b91c1c;
    padding:12px;
    border-radius:6px;
    margin-bottom:20px;
}
```
**productos_editar.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:700px;
    margin:auto;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

.grupo{
    margin-bottom:20px;
}

label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
    color:#1f2937;
}

input{
    width:100%;
    padding:12px;
    border:1px solid #d1d5db;
    border-radius:6px;
}

input:focus{
    outline:none;
    border-color:#2563eb;
}

.guardar{
    background:#16a34a;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:6px;
    cursor:pointer;
}

.guardar:hover{
    background:#15803d;
}

.volver{
    display:inline-block;
    margin-top:20px;
    color:#1e3a8a;
    text-decoration:none;
    font-weight:bold;
}

.error{
    background:#fee2e2;
    color:#b91c1c;
    padding:12px;
    border-radius:6px;
    margin-bottom:20px;
}
```
**productos_listar.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:1200px;
    margin:auto;
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

.acciones{
    margin-bottom:20px;
}

.boton{
    display:inline-block;
    background:#2563eb;
    color:white;
    text-decoration:none;
    padding:12px 20px;
    border-radius:6px;
    transition:.3s;
}

.boton:hover{
    background:#1d4ed8;
}

table{
    width:100%;
    background:white;
    border-collapse:collapse;
    border-radius:10px;
    overflow:hidden;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

th{
    background:#1e3a8a;
    color:white;
    padding:15px;
    text-align:left;
}

td{
    padding:12px;
    border-bottom:1px solid #e5e7eb;
}

tr:hover{
    background:#f8fafc;
}

.editar{
    display:inline-block;
    padding:8px 12px;
    background:#16a34a;
    color:white;
    text-decoration:none;
    border-radius:5px;
    margin-right:5px;
}

.editar:hover{
    background:#15803d;
}

.eliminar{
    display:inline-block;
    padding:8px 12px;
    background:#dc2626;
    color:white;
    text-decoration:none;
    border-radius:5px;
}

.eliminar:hover{
    background:#b91c1c;
}

.sin-datos{
    background:white;
    padding:25px;
    text-align:center;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.volver{
    display:inline-block;
    margin-top:20px;
    color:#1e3a8a;
    text-decoration:none;
    font-weight:bold;
}

.volver:hover{
    text-decoration:underline;
}

@media(max-width:768px){

    body{
        padding:15px;
    }

    table{
        display:block;
        overflow-x:auto;
    }

}
```
**rendimiento.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:1200px;
    margin:auto;
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

.resumen{
    background:white;
    padding:20px;
    border-radius:10px;
    margin-bottom:20px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

table{
    width:100%;
    border-collapse:collapse;
    background:white;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

th{
    background:#1e3a8a;
    color:white;
    padding:15px;
}

td{
    padding:12px;
    border-bottom:1px solid #e5e7eb;
}

tr:hover{
    background:#f8fafc;
}

.total{
    background:white;
    margin-top:20px;
    padding:20px;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.total h2{
    color:#1e3a8a;
    margin-bottom:10px;
}

.total p{
    font-size:22px;
    font-weight:bold;
    color:#16a34a;
}

.volver{
    display:inline-block;
    margin-top:20px;
    text-decoration:none;
    color:#1e3a8a;
    font-weight:bold;
}
```
**ventas_detalle.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:1100px;
    margin:auto;
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

.cabecera{
    background:white;
    padding:20px;
    border-radius:8px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
    margin-bottom:20px;
}

.cabecera p{
    margin-bottom:10px;
}

table{
    width:100%;
    background:white;
    border-collapse:collapse;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

th{
    background:#1e3a8a;
    color:white;
    padding:15px;
}

td{
    padding:12px;
    border-bottom:1px solid #e5e7eb;
}

tr:hover{
    background:#f8fafc;
}

.volver{
    display:inline-block;
    margin-top:20px;
    text-decoration:none;
    color:#1e3a8a;
    font-weight:bold;
}
```
**ventas_listar.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:1200px;
    margin:auto;
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

.acciones{
    margin-bottom:20px;
    display:flex;
    gap:10px;
    flex-wrap:wrap;
}

.boton{
    display:inline-block;
    background:#2563eb;
    color:white;
    text-decoration:none;
    padding:12px 20px;
    border-radius:6px;
    transition:.3s;
}

.boton:hover{
    background:#1d4ed8;
}

.exportar{
    background:#16a34a;
}

.exportar:hover{
    background:#15803d;
}

.pdf{
    background:#dc2626;
}

.pdf:hover{
    background:#b91c1c;
}

table{
    width:100%;
    background:white;
    border-collapse:collapse;
    border-radius:10px;
    overflow:hidden;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

th{
    background:#1e3a8a;
    color:white;
    padding:15px;
    text-align:left;
}

td{
    padding:12px;
    border-bottom:1px solid #e5e7eb;
}

tr:hover{
    background:#f8fafc;
}

.detalle{
    display:inline-block;
    padding:8px 12px;
    background:#0891b2;
    color:white;
    text-decoration:none;
    border-radius:5px;
}

.detalle:hover{
    background:#0e7490;
}

.sin-datos{
    background:white;
    padding:25px;
    text-align:center;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

.volver{
    display:inline-block;
    margin-top:20px;
    color:#1e3a8a;
    text-decoration:none;
    font-weight:bold;
}

.volver:hover{
    text-decoration:underline;
}

@media(max-width:768px){

    body{
        padding:15px;
    }

    table{
        display:block;
        overflow-x:auto;
    }

}
```
**ventas_nueva.css**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f6f9;
    padding:30px;
}

.contenedor{
    max-width:700px;
    margin:auto;
    background:white;
    padding:30px;
    border-radius:10px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
}

h1{
    color:#1e3a8a;
    margin-bottom:25px;
}

.grupo{
    margin-bottom:20px;
}

label{
    display:block;
    margin-bottom:8px;
    font-weight:bold;
}

input,
select{
    width:100%;
    padding:12px;
    border:1px solid #ccc;
    border-radius:6px;
}

.guardar{
    background:#2563eb;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:6px;
    cursor:pointer;
}

.guardar:hover{
    background:#1d4ed8;
}

#totalVista{
    font-size:24px;
    font-weight:bold;
    color:#16a34a;
}

.error{
    background:#fee2e2;
    color:#b91c1c;
    padding:12px;
    border-radius:6px;
    margin-bottom:20px;
}

.volver{
    display:inline-block;
    margin-top:20px;
    text-decoration:none;
    color:#1e3a8a;
}
```
#### js
**clientes_crear.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById('formCliente');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', (evento) => {

        const nombre =
            document.getElementById('nombre')
            .value
            .trim();

        if (nombre.length < 2) {

            alert(
                'El nombre debe tener al menos 2 caracteres.'
            );

            evento.preventDefault();
        }

    });

});
```
**clientes_editar.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById('formEditarCliente');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', (evento) => {

        const nombre =
            document.getElementById('nombre')
            .value
            .trim();

        if (nombre.length < 2) {

            alert(
                'El nombre debe tener al menos 2 caracteres.'
            );

            evento.preventDefault();
        }

    });

});
```
**clientes_listar.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    const enlacesEliminar =
        document.querySelectorAll('.eliminar');

    enlacesEliminar.forEach(enlace => {

        enlace.addEventListener('click', (evento) => {

            const confirmar = confirm(
                '¿Seguro que deseas eliminar este cliente?'
            );

            if (!confirmar) {

                evento.preventDefault();

            }

        });

    });

});
```
**exportaciones_index.js**
```js
document.addEEventListener('DOMContentLoaded', () => {

    console.log(
        'Centro de exportaciones cargado'
    );

});
```
**exportar_pdf.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    console.log(
        'Módulo de exportación PDF cargado'
    );

});
```
**index.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    console.log('ERP-CRM VentasPro iniciado');

    const tarjetas =
        document.querySelectorAll('.tarjeta');

    tarjetas.forEach((tarjeta) => {

        tarjeta.addEventListener('mouseenter', () => {

            tarjeta.style.transition =
                'all 0.3s ease';

        });

    });

    const fechaActual =
        new Date();

    console.log(
        'Fecha:',
        fechaActual.toLocaleString()
    );

});
```
**informes_index.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    console.log('Centro de informes cargado');

});
```
**informes_mejores_clientes.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    console.log(
        'Informe de mejores clientes cargado'
    );

});
```
**informes_productos_vendidos.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    console.log(
        'Informe de productos vendidos cargado'
    );

});
```
**informes_ventas_mes.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    console.log(
        'Informe de ventas mensuales cargado'
    );

});
```
**login.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById('formLogin');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', (evento) => {

        const usuario =
            document.getElementById('usuario')
            .value
            .trim();

        const password =
            document.getElementById('password')
            .value
            .trim();

        if (
            usuario.length < 3 ||
            password.length < 3
        ) {

            alert(
                'Usuario y contraseña no válidos.'
            );

            evento.preventDefault();
        }

    });

});
```
**productos_crear.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById('formProducto');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', (evento) => {

        const nombre =
            document.getElementById('nombre')
            .value
            .trim();

        const precio =
            parseFloat(
                document.getElementById('precio').value
            );

        const stock =
            parseInt(
                document.getElementById('stock').value
            );

        if (nombre.length < 2) {

            alert(
                'El nombre debe tener al menos 2 caracteres.'
            );

            evento.preventDefault();
            return;
        }

        if (precio < 0) {

            alert(
                'El precio no puede ser negativo.'
            );

            evento.preventDefault();
            return;
        }

        if (stock < 0) {

            alert(
                'El stock no puede ser negativo.'
            );

            evento.preventDefault();
        }

    });

});
```
**productos_editar.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById('formEditarProducto');

    if (!formulario) {
        return;
    }

    formulario.addEventListener('submit', (evento) => {

        const nombre =
            document.getElementById('nombre')
            .value
            .trim();

        const precio =
            parseFloat(
                document.getElementById('precio').value
            );

        const stock =
            parseInt(
                document.getElementById('stock').value
            );

        if (nombre.length < 2) {

            alert(
                'El nombre debe tener al menos 2 caracteres.'
            );

            evento.preventDefault();
            return;
        }

        if (precio < 0) {

            alert(
                'El precio no puede ser negativo.'
            );

            evento.preventDefault();
            return;
        }

        if (stock < 0) {

            alert(
                'El stock no puede ser negativo.'
            );

            evento.preventDefault();
        }

    });

});
```
**productos_listar.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    const enlacesEliminar =
        document.querySelectorAll('.eliminar');

    enlacesEliminar.forEach(enlace => {

        enlace.addEventListener('click', (evento) => {

            const confirmar = confirm(
                '¿Seguro que deseas eliminar este producto?'
            );

            if (!confirmar) {

                evento.preventDefault();

            }

        });

    });

});
```
**rendimiento.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    console.log(
        'Monitor de rendimiento iniciado'
    );

});
```
**ventas_detalle.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    console.log('Detalle de venta cargado');

});
```
**ventas_listar.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    console.log('Módulo de ventas cargado');

});
```
**ventas_nueva.js**
```js
document.addEventListener('DOMContentLoaded', () => {

    const producto =
        document.getElementById('producto_id');

    const cantidad =
        document.getElementById('cantidad');

    const totalVista =
        document.getElementById('totalVista');

    function calcularTotal() {

        const opcion =
            producto.options[
                producto.selectedIndex
            ];

        const precio =
            parseFloat(
                opcion.dataset.precio || 0
            );

        const cantidadSeleccionada =
            parseInt(cantidad.value) || 0;

        const total =
            precio * cantidadSeleccionada;

        totalVista.textContent =
            total.toFixed(2) + ' €';
    }

    producto.addEventListener(
        'change',
        calcularTotal
    );

    cantidad.addEventListener(
        'input',
        calcularTotal
    );

});
```
### clientes
**crear.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $telefono = trim($_POST['telefono'] ?? '');

    if (empty($nombre)) {

        $error = 'El nombre es obligatorio';

    } else {

        $stmt = $db->prepare("
            INSERT INTO clientes
            (
                nombre,
                email,
                telefono
            )
            VALUES
            (
                :nombre,
                :email,
                :telefono
            )
        ");

        $stmt->execute([
            ':nombre' => $nombre,
            ':email' => $email,
            ':telefono' => $telefono
        ]);

        header('Location: listar.php');
        exit;
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Nuevo Cliente</title>

    <link
        rel="stylesheet"
        href="../assets/css/clientes_crear.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Nuevo Cliente</h1>

    <?php if(!empty($error)): ?>

        <div class="error">
            <?= $error ?>
        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formCliente"
    >

        <div class="grupo">

            <label for="nombre">
                Nombre
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                required
            >

        </div>

        <div class="grupo">

            <label for="email">
                Correo electrónico
            </label>

            <input
                type="email"
                id="email"
                name="email"
            >

        </div>

        <div class="grupo">

            <label for="telefono">
                Teléfono
            </label>

            <input
                type="text"
                id="telefono"
                name="telefono"
            >

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Guardar Cliente
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/clientes_crear.js"></script>

</body>
</html>
```
**editar.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

$stmt = $db->prepare("
    SELECT *
    FROM clientes
    WHERE id = :id
");

$stmt->execute([
    ':id' => $id
]);

$cliente = $stmt->fetch();

if (!$cliente) {
    die('Cliente no encontrado.');
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $telefono = trim($_POST['telefono'] ?? '');

    if (empty($nombre)) {

        $error = 'El nombre es obligatorio.';

    } else {

        $stmt = $db->prepare("
            UPDATE clientes
            SET
                nombre = :nombre,
                email = :email,
                telefono = :telefono
            WHERE id = :id
        ");

        $stmt->execute([
            ':nombre' => $nombre,
            ':email' => $email,
            ':telefono' => $telefono,
            ':id' => $id
        ]);

        header('Location: listar.php');
        exit;
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Editar Cliente</title>

    <link
        rel="stylesheet"
        href="../assets/css/clientes_editar.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Editar Cliente</h1>

    <?php if(!empty($error)): ?>

        <div class="error">
            <?= $error ?>
        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formEditarCliente"
    >

        <div class="grupo">

            <label for="nombre">
                Nombre
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                value="<?= htmlspecialchars($cliente['nombre']) ?>"
                required
            >

        </div>

        <div class="grupo">

            <label for="email">
                Correo Electrónico
            </label>

            <input
                type="email"
                id="email"
                name="email"
                value="<?= htmlspecialchars($cliente['email']) ?>"
            >

        </div>

        <div class="grupo">

            <label for="telefono">
                Teléfono
            </label>

            <input
                type="text"
                id="telefono"
                name="telefono"
                value="<?= htmlspecialchars($cliente['telefono']) ?>"
            >

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Actualizar Cliente
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/clientes_editar.js"></script>

</body>
</html>
```
**eliminar.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$id = isset($_GET['id'])
    ? (int) $_GET['id']
    : 0;

if ($id <= 0) {

    header('Location: listar.php');
    exit;
}

/*
|--------------------------------------------------------------------------
| Eliminar detalles de ventas asociados
|--------------------------------------------------------------------------
|
| Esto evita problemas futuros cuando existan ventas
| relacionadas con el cliente.
|
*/

$stmt = $db->prepare("
    DELETE FROM detalle_ventas
    WHERE venta_id IN (
        SELECT id
        FROM ventas
        WHERE cliente_id = :cliente_id
    )
");

$stmt->execute([
    ':cliente_id' => $id
]);

/*
|--------------------------------------------------------------------------
| Eliminar ventas del cliente
|--------------------------------------------------------------------------
*/

$stmt = $db->prepare("
    DELETE FROM ventas
    WHERE cliente_id = :cliente_id
");

$stmt->execute([
    ':cliente_id' => $id
]);

/*
|--------------------------------------------------------------------------
| Eliminar cliente
|--------------------------------------------------------------------------
*/

$stmt = $db->prepare("
    DELETE FROM clientes
    WHERE id = :id
");

$stmt->execute([
    ':id' => $id
]);

header('Location: listar.php');
exit;
```
**listar.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT *
    FROM clientes
    ORDER BY id DESC
");

$clientes = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Gestión de Clientes
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/clientes_listar.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Gestión de Clientes
    </h1>

    <div class="acciones">

        <a
            href="crear.php"
            class="boton"
        >
            Nuevo Cliente
        </a>

        <a
            href="../exportaciones/exportar_clientes.php"
            class="boton exportar"
        >
            Exportar CSV
        </a>

    </div>

    <?php if(count($clientes) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                </tr>

            </thead>

            <tbody>

                <?php foreach($clientes as $cliente): ?>

                    <tr>

                        <td>
                            <?= $cliente['id'] ?>
                        </td>

                        <td>
                            <?= htmlspecialchars($cliente['nombre']) ?>
                        </td>

                        <td>
                            <?= htmlspecialchars($cliente['email']) ?>
                        </td>

                        <td>
                            <?= htmlspecialchars($cliente['telefono']) ?>
                        </td>

                        <td>

                            <a
                                href="editar.php?id=<?= $cliente['id'] ?>"
                                class="editar"
                            >
                                Editar
                            </a>

                            <a
                                href="eliminar.php?id=<?= $cliente['id'] ?>"
                                class="eliminar"
                            >
                                Eliminar
                            </a>

                        </td>

                    </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    <?php else: ?>

        <div class="sin-datos">

            No hay clientes registrados.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/clientes_listar.js"></script>

</body>
</html>
```
### database
**conexion.php**
```php
<?php

class Conexion
{
    private static $db = null;

    public static function conectar()
    {
        if (self::$db === null) {

            $ruta = __DIR__ . '/erp.sqlite';

            self::$db = new PDO('sqlite:' . $ruta);

            // Activar claves foráneas en SQLite
            self::$db->exec('PRAGMA foreign_keys = ON');

            // Mostrar errores PDO
            self::$db->setAttribute(
                PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION
            );

            // Devolver resultados como array asociativo
            self::$db->setAttribute(
                PDO::ATTR_DEFAULT_FETCH_MODE,
                PDO::FETCH_ASSOC
            );

            /*
            |--------------------------------------------------------------------------
            | Tabla clientes
            |--------------------------------------------------------------------------
            */

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS clientes (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    email TEXT,
                    telefono TEXT
                )
            ");

            /*
            |--------------------------------------------------------------------------
            | Tabla productos
            |--------------------------------------------------------------------------
            */

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS productos (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    precio REAL NOT NULL,
                    stock INTEGER NOT NULL DEFAULT 0
                )
            ");

            /*
            |--------------------------------------------------------------------------
            | Tabla ventas
            |--------------------------------------------------------------------------
            */

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS ventas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    cliente_id INTEGER NOT NULL,
                    fecha TEXT NOT NULL,
                    total REAL NOT NULL,
                    FOREIGN KEY (cliente_id)
                    REFERENCES clientes(id)
                )
            ");

            /*
            |--------------------------------------------------------------------------
            | Tabla detalle_ventas
            |--------------------------------------------------------------------------
            */

            self::$db->exec("
                CREATE TABLE IF NOT EXISTS detalle_ventas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    venta_id INTEGER NOT NULL,
                    producto_id INTEGER NOT NULL,
                    cantidad INTEGER NOT NULL,
                    precio REAL NOT NULL,

                    FOREIGN KEY (venta_id)
                    REFERENCES ventas(id),

                    FOREIGN KEY (producto_id)
                    REFERENCES productos(id)
                )
            ");
        }

        return self::$db;
    }
}
```
### docs
**incidencias.md**
```markdown
# Registro de Incidencias

## ERP-CRM VentasPro

Versión 1.0

---

# Objetivo

Este documento recoge las incidencias detectadas durante el desarrollo, pruebas e implantación del sistema ERP-CRM VentasPro.

También se documentan las soluciones aplicadas para resolver cada problema.

---

# Incidencia 001

Fecha:
14/11/2026

Módulo:
Base de datos

Descripción:

Error al conectar con la base de datos SQLite.

Mensaje:

unable to open database file

Causa:

La carpeta database no disponía de permisos de escritura.

Solución aplicada:

Asignación de permisos de lectura y escritura a la carpeta database.

Estado:

Resuelta.

---

# Incidencia 002

Fecha:
14/11/2026

Módulo:
Clientes

Descripción:

No se almacenaban correctamente los registros nuevos.

Causa:

Error en la sentencia SQL INSERT.

Solución aplicada:

Revisión y corrección de la consulta preparada mediante PDO.

Estado:

Resuelta.

---

# Incidencia 003

Fecha:
14/11/2026

Módulo:
Productos

Descripción:

Al introducir un stock negativo se almacenaban valores incorrectos.

Causa:

Falta de validación de formulario.

Solución aplicada:

Validación mediante PHP y JavaScript.

Estado:

Resuelta.

---

# Incidencia 004

Fecha:
14/11/2026

Módulo:
Ventas

Descripción:

Se intentaba registrar una venta con stock insuficiente.

Causa:

No existía verificación previa del stock disponible.

Solución aplicada:

Comprobación del stock antes de registrar la venta.

Estado:

Resuelta.

---

# Incidencia 005

Fecha:
14/11/2026

Módulo:
Ventas

Descripción:

El stock no se actualizaba después de una venta.

Causa:

Falta de actualización en la tabla productos.

Solución aplicada:

Descuento automático de unidades mediante consulta UPDATE.

Estado:

Resuelta.

---

# Incidencia 006

Fecha:
14/11/2026

Módulo:
Informes

Descripción:

Los informes mostraban valores nulos cuando no existían ventas.

Causa:

Las funciones SUM devolvían NULL.

Solución aplicada:

Utilización de la función COALESCE.

Estado:

Resuelta.

---

# Incidencia 007

Fecha:
14/11/2026

Módulo:
Exportaciones

Descripción:

Los archivos CSV presentaban problemas de codificación.

Causa:

Configuración incorrecta del juego de caracteres.

Solución aplicada:

Configuración UTF-8 en las cabeceras de exportación.

Estado:

Resuelta.

---

# Incidencia 008

Fecha:
14/11/2026

Módulo:
Procesos

Descripción:

No se generaban correctamente las copias de seguridad.

Causa:

La carpeta backups no existía.

Solución aplicada:

Creación automática de la carpeta mediante mkdir().

Estado:

Resuelta.

---

# Incidencia 009

Fecha:
14/11/2026

Módulo:
Estadísticas

Descripción:

No se encontraba el archivo estadisticas.json.

Causa:

La carpeta estadisticas no estaba creada.

Solución aplicada:

Creación automática de la carpeta antes de guardar el archivo.

Estado:

Resuelta.

---

# Registro de Mantenimiento

## Mantenimiento Preventivo

- Verificación semanal de copias de seguridad.
- Verificación de integridad de la base de datos.
- Revisión periódica de los informes generados.
- Comprobación del espacio disponible en disco.

---

## Mantenimiento Correctivo

- Reparación de errores detectados por los usuarios.
- Corrección de consultas SQL.
- Actualización de los formularios de gestión.

---

# Conclusiones

Durante el desarrollo y prueba del sistema ERP-CRM VentasPro se registraron diversas incidencias relacionadas con el acceso a datos, validación de formularios y generación de informes.

Todas las incidencias fueron identificadas, documentadas y solucionadas correctamente, garantizando el correcto funcionamiento de la aplicación.

---

Fin del Registro de Incidencias.
```
**manual_instalacion.md**
```markdown
# Manual de Instalación

## ERP-CRM VentasPro

Versión 1.0

---

# Requisitos del Sistema

Para ejecutar la aplicación correctamente es necesario disponer de:

- Sistema operativo Windows, Linux o macOS.
- Servidor web Apache.
- PHP 8.0 o superior.
- Extensión PDO SQLite habilitada.
- Navegador web moderno.

---

# Software Recomendado

Para entorno Windows se recomienda instalar:

- XAMPP

Descarga:

https://www.apachefriends.org

---

# Instalación

## Paso 1. Instalar XAMPP

1. Descargar XAMPP.
2. Ejecutar el instalador.
3. Mantener seleccionados:

   - Apache
   - PHP

4. Finalizar la instalación.

---

## Paso 2. Iniciar Apache

Abrir el panel de control de XAMPP.

Pulsar:

Start → Apache

Comprobar que Apache se encuentra en color verde.

---

## Paso 3. Copiar el proyecto

Copiar la carpeta del proyecto:

erp-crm

en:

C:\xampp\htdocs\

Debe quedar:

C:\xampp\htdocs\erp-crm

---

## Paso 4. Verificar la estructura

La estructura mínima debe ser:

erp-crm/

├── assets/

├── clientes/

├── productos/

├── ventas/

├── informes/

├── exportaciones/

├── procesos/

├── docs/

├── database/

└── index.php

---

## Paso 5. Verificar SQLite

Comprobar que PHP tiene habilitada la extensión:

pdo_sqlite

En el archivo:

php.ini

debe existir:

extension=pdo_sqlite

Si no está habilitada:

1. Eliminar el carácter ;
2. Guardar cambios.
3. Reiniciar Apache.

---

## Paso 6. Primera ejecución

Abrir el navegador y acceder a:

http://localhost/erp-crm

La primera ejecución creará automáticamente:

- Base de datos SQLite.
- Tabla clientes.
- Tabla productos.
- Tabla ventas.
- Tabla detalle_ventas.

Archivo generado:

database/erp.sqlite

---

# Comprobación de funcionamiento

Realizar las siguientes pruebas:

## Clientes

- Crear cliente.
- Editar cliente.
- Eliminar cliente.

## Productos

- Crear producto.
- Editar producto.
- Eliminar producto.

## Ventas

- Registrar venta.
- Consultar detalle de venta.

## Informes

- Ventas mensuales.
- Mejores clientes.
- Productos vendidos.

## Exportaciones

- Exportar clientes.
- Exportar ventas.
- Generar informe PDF.

---

# Copias de seguridad

Ejecutar:

procesos/respaldo.php

Se generará una copia de seguridad en:

procesos/backups/

---

# Actualización de estadísticas

Ejecutar:

procesos/actualizacion_estadisticas.php

Se generará:

procesos/estadisticas/estadisticas.json

---

# Solución de problemas

## Error: unable to open database file

Causa:

La carpeta database no tiene permisos de escritura.

Solución:

Conceder permisos de escritura a la carpeta database.

---

## Error: PDOException

Causa:

La extensión SQLite no está habilitada.

Solución:

Habilitar pdo_sqlite en php.ini y reiniciar Apache.

---

## Página en blanco

Causa:

Error PHP no mostrado.

Solución:

Activar errores en desarrollo:

ini_set('display_errors', 1);
error_reporting(E_ALL);

---

# Desinstalación

1. Detener Apache.
2. Eliminar la carpeta:

C:\xampp\htdocs\erp-crm

3. Eliminar la base de datos:

database/erp.sqlite

---

Fin del Manual de Instalación.
```
**manual_usuario.md**
```markdown
# Manual de Usuario

## ERP-CRM VentasPro

Versión 1.0

---

# Introducción

ERP-CRM VentasPro es una aplicación desarrollada para la gestión de clientes, productos y ventas.

Permite administrar la información comercial de una empresa, registrar operaciones de venta, consultar informes y exportar datos.

---

# Acceso al sistema

Abrir el navegador web y acceder a:

http://localhost/erp-crm

Desde la página principal se podrá acceder a todos los módulos del sistema.

---

# Gestión de Clientes

## Crear cliente

1. Acceder a Clientes.
2. Pulsar "Nuevo Cliente".
3. Introducir los datos solicitados.
4. Pulsar "Guardar Cliente".

## Modificar cliente

1. Acceder a Clientes.
2. Pulsar "Editar".
3. Modificar los datos.
4. Pulsar "Actualizar Cliente".

## Eliminar cliente

1. Acceder a Clientes.
2. Pulsar "Eliminar".
3. Confirmar la operación.

---

# Gestión de Productos

## Crear producto

1. Acceder a Productos.
2. Pulsar "Nuevo Producto".
3. Introducir:
   - Nombre
   - Precio
   - Stock
4. Pulsar "Guardar Producto".

## Modificar producto

1. Acceder a Productos.
2. Pulsar "Editar".
3. Actualizar los datos.
4. Guardar cambios.

## Eliminar producto

1. Acceder a Productos.
2. Pulsar "Eliminar".

Nota:
No es posible eliminar productos asociados a ventas.

---

# Gestión de Ventas

## Registrar venta

1. Acceder a Ventas.
2. Pulsar "Nueva Venta".
3. Seleccionar un cliente.
4. Seleccionar un producto.
5. Introducir la cantidad.
6. Pulsar "Registrar Venta".

El sistema:

- Calcula el importe automáticamente.
- Actualiza el stock del producto.
- Registra la operación en la base de datos.

---

# Consultar ventas

1. Acceder a Ventas.
2. Visualizar la lista de ventas registradas.
3. Pulsar "Ver Detalle" para consultar la información completa.

---

# Informes

El sistema dispone de los siguientes informes:

## Ventas mensuales

Muestra:

- Número de ventas por mes.
- Facturación mensual.

## Mejores clientes

Muestra:

- Clientes con mayor facturación.
- Número de compras realizadas.

## Productos vendidos

Muestra:

- Ranking de productos.
- Unidades vendidas.
- Ingresos generados.

---

# Exportación de datos

El sistema permite:

## Exportar clientes

Genera un archivo CSV con:

- ID
- Nombre
- Email
- Teléfono

## Exportar ventas

Genera un archivo CSV con:

- ID
- Cliente
- Fecha
- Total

## Exportar informe PDF

Genera un informe imprimible del estado global del sistema.

---

# Copias de seguridad

El sistema permite generar copias de seguridad de la base de datos SQLite.

Las copias se almacenan en:

procesos/backups/

---

# Cierre de la aplicación

Para finalizar el trabajo simplemente cerrar el navegador.

Todos los datos quedan almacenados automáticamente en la base de datos SQLite.

---

Fin del Manual de Usuario.
```
### exportaciones
**exportar_clientes.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        id,
        nombre,
        email,
        telefono
    FROM clientes
    ORDER BY nombre
");

$clientes = $stmt->fetchAll();

header('Content-Type: text/csv; charset=utf-8');
header(
    'Content-Disposition: attachment; filename=clientes.csv'
);

$archivo = fopen('php://output', 'w');

fputcsv(
    $archivo,
    [
        'ID',
        'Nombre',
        'Email',
        'Telefono'
    ],
    ';'
);

foreach ($clientes as $cliente) {

    fputcsv(
        $archivo,
        [
            $cliente['id'],
            $cliente['nombre'],
            $cliente['email'],
            $cliente['telefono']
        ],
        ';'
    );
}

fclose($archivo);
exit;
```
**exportar_pdf.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$totalClientes = $db->query("
    SELECT COUNT(*)
    FROM clientes
")->fetchColumn();

$totalProductos = $db->query("
    SELECT COUNT(*)
    FROM productos
")->fetchColumn();

$totalVentas = $db->query("
    SELECT COUNT(*)
    FROM ventas
")->fetchColumn();

$facturacion = $db->query("
    SELECT COALESCE(
        SUM(total),
        0
    )
    FROM ventas
")->fetchColumn();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <title>
        Informe ERP-CRM
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/exportar_pdf.css"
    >

</head>

<body>

<div class="informe">

    <header>

        <h1>
            ERP-CRM VentasPro
        </h1>

        <p>
            Informe General del Sistema
        </p>

        <p>
            Fecha:
            <?= date('d/m/Y H:i') ?>
        </p>

    </header>

    <hr>

    <section>

        <h2>
            Resumen General
        </h2>

        <table>

            <tr>
                <td>Total Clientes</td>
                <td><?= $totalClientes ?></td>
            </tr>

            <tr>
                <td>Total Productos</td>
                <td><?= $totalProductos ?></td>
            </tr>

            <tr>
                <td>Total Ventas</td>
                <td><?= $totalVentas ?></td>
            </tr>

            <tr>
                <td>Facturación Total</td>
                <td>
                    <?= number_format(
                        $facturacion,
                        2
                    ) ?>
                    €
                </td>
            </tr>

        </table>

    </section>

    <section>

        <h2>
            Observaciones
        </h2>

        <p>
            Este documento ha sido generado
            automáticamente por el sistema
            ERP-CRM VentasPro.
        </p>

    </section>

    <div class="acciones">

        <button onclick="window.print()">
            Imprimir / Guardar PDF
        </button>

    </div>

</div>

<script src="../assets/js/exportar_pdf.js"></script>

</body>
</html>
```
**exportar_ventas.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        ventas.id,
        clientes.nombre AS cliente,
        ventas.fecha,
        ventas.total
    FROM ventas
    INNER JOIN clientes
        ON ventas.cliente_id = clientes.id
    ORDER BY ventas.id DESC
");

$ventas = $stmt->fetchAll();

header('Content-Type: text/csv; charset=utf-8');

header(
    'Content-Disposition: attachment; filename=ventas.csv'
);

$archivo = fopen(
    'php://output',
    'w'
);

fputcsv(
    $archivo,
    [
        'ID',
        'Cliente',
        'Fecha',
        'Total'
    ],
    ';'
);

foreach ($ventas as $venta) {

    fputcsv(
        $archivo,
        [
            $venta['id'],
            $venta['cliente'],
            $venta['fecha'],
            $venta['total']
        ],
        ';'
    );
}

fclose($archivo);

exit;
```
**index.php**
```php
<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Centro de Exportaciones
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/exportaciones_index.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Centro de Exportaciones
    </h1>

    <div class="tarjetas">

        <div class="tarjeta">

            <h2>
                Exportar Clientes
            </h2>

            <p>
                Generar archivo CSV con todos los clientes.
            </p>

            <a href="exportar_clientes.php">
                Exportar CSV
            </a>

        </div>

        <div class="tarjeta">

            <h2>
                Exportar Ventas
            </h2>

            <p>
                Generar archivo CSV con todas las ventas.
            </p>

            <a href="exportar_ventas.php">
                Exportar CSV
            </a>

        </div>

        <div class="tarjeta">

            <h2>
                Informe PDF
            </h2>

            <p>
                Generar informe general para impresión.
            </p>

            <a href="exportar_pdf.php">
                Generar PDF
            </a>

        </div>

    </div>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/exportaciones_index.js"></script>

</body>
</html>
```
### informes
**index.php**
```php
<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Centro de Informes
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/informes_index.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Centro de Informes
    </h1>

    <div class="tarjetas">

        <div class="tarjeta">

            <h2>
                Ventas Mensuales
            </h2>

            <p>
                Facturación y ventas agrupadas por meses.
            </p>

            <a href="ventas_mes.php">
                Abrir
            </a>

        </div>

        <div class="tarjeta">

            <h2>
                Mejores Clientes
            </h2>

            <p>
                Ranking de clientes según facturación.
            </p>

            <a href="mejores_clientes.php">
                Abrir
            </a>

        </div>

        <div class="tarjeta">

            <h2>
                Productos Vendidos
            </h2>

            <p>
                Ranking de productos vendidos.
            </p>

            <a href="productos_vendidos.php">
                Abrir
            </a>

        </div>

        <div class="tarjeta">

            <h2>
                Rendimiento
            </h2>

            <p>
                Verificación del rendimiento del sistema.
            </p>

            <a href="rendimiento.php">
                Abrir
            </a>

        </div>

    </div>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/informes_index.js"></script>

</body>
</html>
```
**mejores_clientes.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        clientes.id,
        clientes.nombre,
        COUNT(ventas.id) AS numero_ventas,
        COALESCE(SUM(ventas.total), 0) AS facturacion_total
    FROM clientes
    LEFT JOIN ventas
        ON clientes.id = ventas.cliente_id
    GROUP BY clientes.id, clientes.nombre
    ORDER BY facturacion_total DESC
");

$clientes = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Mejores Clientes</title>

    <link
        rel="stylesheet"
        href="../assets/css/informes_mejores_clientes.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Ranking de Clientes</h1>

    <?php if(count($clientes) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>Posición</th>
                    <th>Cliente</th>
                    <th>Nº Ventas</th>
                    <th>Facturación Total (€)</th>
                </tr>

            </thead>

            <tbody>

                <?php
                $posicion = 1;

                foreach($clientes as $cliente):
                ?>

                <tr>

                    <td>
                        <?= $posicion++ ?>
                    </td>

                    <td>
                        <?= htmlspecialchars($cliente['nombre']) ?>
                    </td>

                    <td>
                        <?= $cliente['numero_ventas'] ?>
                    </td>

                    <td>
                        <?= number_format(
                            $cliente['facturacion_total'],
                            2
                        ) ?>
                    </td>

                </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    <?php else: ?>

        <div class="sin-datos">

            No existen datos para generar el informe.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/informes_mejores_clientes.js"></script>

</body>
</html>
```
**productos_vendidos.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        productos.id,
        productos.nombre,
        COALESCE(SUM(detalle_ventas.cantidad), 0) AS unidades_vendidas,
        COALESCE(
            SUM(
                detalle_ventas.cantidad *
                detalle_ventas.precio
            ),
            0
        ) AS ingresos_generados
    FROM productos
    LEFT JOIN detalle_ventas
        ON productos.id = detalle_ventas.producto_id
    GROUP BY productos.id, productos.nombre
    ORDER BY unidades_vendidas DESC
");

$productos = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Productos Más Vendidos</title>

    <link
        rel="stylesheet"
        href="../assets/css/informes_productos_vendidos.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Productos Más Vendidos</h1>

    <?php if(count($productos) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>Posición</th>
                    <th>Producto</th>
                    <th>Unidades Vendidas</th>
                    <th>Ingresos Generados (€)</th>
                </tr>

            </thead>

            <tbody>

                <?php
                $posicion = 1;

                foreach($productos as $producto):
                ?>

                <tr>

                    <td>
                        <?= $posicion++ ?>
                    </td>

                    <td>
                        <?= htmlspecialchars($producto['nombre']) ?>
                    </td>

                    <td>
                        <?= $producto['unidades_vendidas'] ?>
                    </td>

                    <td>
                        <?= number_format(
                            $producto['ingresos_generados'],
                            2
                        ) ?>
                    </td>

                </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    <?php else: ?>

        <div class="sin-datos">

            No existen datos para generar el informe.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/informes_productos_vendidos.js"></script>

</body>
</html>
```
**rendimiento.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

/*
|--------------------------------------------------------------------------
| Medición de rendimiento
|--------------------------------------------------------------------------
*/

$inicioClientes = microtime(true);

$totalClientes = $db->query("
    SELECT COUNT(*)
    FROM clientes
")->fetchColumn();

$tiempoClientes = microtime(true) - $inicioClientes;

$inicioProductos = microtime(true);

$totalProductos = $db->query("
    SELECT COUNT(*)
    FROM productos
")->fetchColumn();

$tiempoProductos = microtime(true) - $inicioProductos;

$inicioVentas = microtime(true);

$totalVentas = $db->query("
    SELECT COUNT(*)
    FROM ventas
")->fetchColumn();

$tiempoVentas = microtime(true) - $inicioVentas;

$inicioFacturacion = microtime(true);

$facturacionTotal = $db->query("
    SELECT COALESCE(
        SUM(total),
        0
    )
    FROM ventas
")->fetchColumn();

$tiempoFacturacion = microtime(true) - $inicioFacturacion;

$tiempoTotal =
    $tiempoClientes +
    $tiempoProductos +
    $tiempoVentas +
    $tiempoFacturacion;

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Rendimiento del Sistema
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/rendimiento.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Rendimiento del Sistema ERP-CRM
    </h1>

    <div class="resumen">

        <p>
            Verificación del rendimiento de las
            consultas principales del sistema.
        </p>

    </div>

    <table>

        <thead>

            <tr>
                <th>Consulta</th>
                <th>Resultado</th>
                <th>Tiempo (segundos)</th>
            </tr>

        </thead>

        <tbody>

            <tr>
                <td>Total Clientes</td>
                <td><?= $totalClientes ?></td>
                <td><?= number_format($tiempoClientes, 6) ?></td>
            </tr>

            <tr>
                <td>Total Productos</td>
                <td><?= $totalProductos ?></td>
                <td><?= number_format($tiempoProductos, 6) ?></td>
            </tr>

            <tr>
                <td>Total Ventas</td>
                <td><?= $totalVentas ?></td>
                <td><?= number_format($tiempoVentas, 6) ?></td>
            </tr>

            <tr>
                <td>Facturación Total</td>
                <td>
                    <?= number_format($facturacionTotal, 2) ?> €
                </td>
                <td><?= number_format($tiempoFacturacion, 6) ?></td>
            </tr>

        </tbody>

    </table>

    <div class="total">

        <h2>
            Tiempo Total de Ejecución
        </h2>

        <p>
            <?= number_format($tiempoTotal, 6) ?>
            segundos
        </p>

    </div>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/rendimiento.js"></script>

</body>
</html>
```
**ventas_mes.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        strftime('%Y', fecha) AS anio,
        strftime('%m', fecha) AS mes,
        COUNT(*) AS total_ventas,
        SUM(total) AS facturacion
    FROM ventas
    GROUP BY anio, mes
    ORDER BY anio DESC, mes DESC
");

$informes = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Informe de Ventas Mensuales</title>

    <link
        rel="stylesheet"
        href="../assets/css/informes_ventas_mes.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Informe de Ventas Mensuales</h1>

    <?php if(count($informes) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>Año</th>
                    <th>Mes</th>
                    <th>Nº Ventas</th>
                    <th>Facturación (€)</th>
                </tr>

            </thead>

            <tbody>

                <?php foreach($informes as $fila): ?>

                    <tr>

                        <td>
                            <?= $fila['anio'] ?>
                        </td>

                        <td>
                            <?= $fila['mes'] ?>
                        </td>

                        <td>
                            <?= $fila['total_ventas'] ?>
                        </td>

                        <td>
                            <?= number_format(
                                $fila['facturacion'],
                                2
                            ) ?>
                        </td>

                    </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    <?php else: ?>

        <div class="sin-datos">

            Todavía no existen ventas registradas.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/informes_ventas_mes.js"></script>

</body>
</html>
```
### procesos
**actualizacion_estadisticas.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

/*
|--------------------------------------------------------------------------
| Obtener estadísticas
|--------------------------------------------------------------------------
*/

$totalClientes = $db->query("
    SELECT COUNT(*)
    FROM clientes
")->fetchColumn();

$totalProductos = $db->query("
    SELECT COUNT(*)
    FROM productos
")->fetchColumn();

$totalVentas = $db->query("
    SELECT COUNT(*)
    FROM ventas
")->fetchColumn();

$facturacionTotal = $db->query("
    SELECT COALESCE(
        SUM(total),
        0
    )
    FROM ventas
")->fetchColumn();

/*
|--------------------------------------------------------------------------
| Crear carpeta estadísticas
|--------------------------------------------------------------------------
*/

$carpeta = __DIR__ . '/estadisticas';

if (!is_dir($carpeta)) {

    mkdir(
        $carpeta,
        0777,
        true
    );
}

/*
|--------------------------------------------------------------------------
| Guardar estadísticas en JSON
|--------------------------------------------------------------------------
*/

$estadisticas = [

    'fecha_generacion' => date('Y-m-d H:i:s'),

    'clientes' => (int) $totalClientes,

    'productos' => (int) $totalProductos,

    'ventas' => (int) $totalVentas,

    'facturacion' => (float) $facturacionTotal

];

$archivo = $carpeta . '/estadisticas.json';

file_put_contents(
    $archivo,
    json_encode(
        $estadisticas,
        JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
    )
);

echo 'Estadísticas actualizadas correctamente.';
```
**respaldo.php**
```php
<?php

require_once '../database/conexion.php';

$dbOrigen = __DIR__ . '/../database/erp.sqlite';

if (!file_exists($dbOrigen)) {
    die('La base de datos no existe.');
}

$carpetaBackups = __DIR__ . '/backups';

if (!is_dir($carpetaBackups)) {

    mkdir(
        $carpetaBackups,
        0777,
        true
    );
}

$fecha = date('Y-m-d_H-i-s');

$archivoDestino =
    $carpetaBackups .
    '/backup_' .
    $fecha .
    '.sqlite';

if (copy($dbOrigen, $archivoDestino)) {

    echo 'Copia de seguridad creada correctamente.<br>';
    echo 'Archivo: ' . basename($archivoDestino);

} else {

    echo 'Error al generar la copia de seguridad.';
}
```
### productos
**crear.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $precio = trim($_POST['precio'] ?? '');
    $stock = trim($_POST['stock'] ?? '');

    if (empty($nombre)) {

        $error = 'El nombre es obligatorio.';

    } elseif (!is_numeric($precio) || $precio < 0) {

        $error = 'El precio debe ser válido.';

    } elseif (!is_numeric($stock) || $stock < 0) {

        $error = 'El stock debe ser válido.';

    } else {

        $stmt = $db->prepare("
            INSERT INTO productos
            (
                nombre,
                precio,
                stock
            )
            VALUES
            (
                :nombre,
                :precio,
                :stock
            )
        ");

        $stmt->execute([
            ':nombre' => $nombre,
            ':precio' => $precio,
            ':stock' => $stock
        ]);

        header('Location: listar.php');
        exit;
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Nuevo Producto</title>

    <link
        rel="stylesheet"
        href="../assets/css/productos_crear.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Nuevo Producto</h1>

    <?php if (!empty($error)): ?>

        <div class="error">
            <?= $error ?>
        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formProducto"
    >

        <div class="grupo">

            <label for="nombre">
                Nombre del producto
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                required
            >

        </div>

        <div class="grupo">

            <label for="precio">
                Precio (€)
            </label>

            <input
                type="number"
                id="precio"
                name="precio"
                min="0"
                step="0.01"
                required
            >

        </div>

        <div class="grupo">

            <label for="stock">
                Stock
            </label>

            <input
                type="number"
                id="stock"
                name="stock"
                min="0"
                required
            >

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Guardar Producto
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/productos_crear.js"></script>

</body>
</html>
```
**editar.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$id = isset($_GET['id'])
    ? (int) $_GET['id']
    : 0;

$stmt = $db->prepare("
    SELECT *
    FROM productos
    WHERE id = :id
");

$stmt->execute([
    ':id' => $id
]);

$producto = $stmt->fetch();

if (!$producto) {
    die('Producto no encontrado.');
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = trim($_POST['nombre'] ?? '');
    $precio = trim($_POST['precio'] ?? '');
    $stock = trim($_POST['stock'] ?? '');

    if (empty($nombre)) {

        $error = 'El nombre es obligatorio.';

    } elseif (!is_numeric($precio) || $precio < 0) {

        $error = 'El precio debe ser válido.';

    } elseif (!is_numeric($stock) || $stock < 0) {

        $error = 'El stock debe ser válido.';

    } else {

        $stmt = $db->prepare("
            UPDATE productos
            SET
                nombre = :nombre,
                precio = :precio,
                stock = :stock
            WHERE id = :id
        ");

        $stmt->execute([
            ':nombre' => $nombre,
            ':precio' => $precio,
            ':stock' => $stock,
            ':id' => $id
        ]);

        header('Location: listar.php');
        exit;
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Editar Producto</title>

    <link
        rel="stylesheet"
        href="../assets/css/productos_editar.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Editar Producto</h1>

    <?php if (!empty($error)): ?>

        <div class="error">
            <?= $error ?>
        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formEditarProducto"
    >

        <div class="grupo">

            <label for="nombre">
                Nombre del producto
            </label>

            <input
                type="text"
                id="nombre"
                name="nombre"
                value="<?= htmlspecialchars($producto['nombre']) ?>"
                required
            >

        </div>

        <div class="grupo">

            <label for="precio">
                Precio (€)
            </label>

            <input
                type="number"
                id="precio"
                name="precio"
                step="0.01"
                min="0"
                value="<?= $producto['precio'] ?>"
                required
            >

        </div>

        <div class="grupo">

            <label for="stock">
                Stock
            </label>

            <input
                type="number"
                id="stock"
                name="stock"
                min="0"
                value="<?= $producto['stock'] ?>"
                required
            >

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Actualizar Producto
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/productos_editar.js"></script>

</body>
</html>
```
**eliminar.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$id = isset($_GET['id'])
    ? (int) $_GET['id']
    : 0;

if ($id <= 0) {

    header('Location: listar.php');
    exit;
}

/*
|--------------------------------------------------------------------------
| Verificar si el producto está siendo usado en ventas
|--------------------------------------------------------------------------
*/

$stmt = $db->prepare("
    SELECT COUNT(*)
    FROM detalle_ventas
    WHERE producto_id = :id
");

$stmt->execute([
    ':id' => $id
]);

$ventasAsociadas = $stmt->fetchColumn();

if ($ventasAsociadas > 0) {

    die(
        'No se puede eliminar el producto porque está asociado a una o más ventas.'
    );
}

/*
|--------------------------------------------------------------------------
| Eliminar producto
|--------------------------------------------------------------------------
*/

$stmt = $db->prepare("
    DELETE FROM productos
    WHERE id = :id
");

$stmt->execute([
    ':id' => $id
]);

header('Location: listar.php');
exit;
```
**listar.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT *
    FROM productos
    ORDER BY id DESC
");

$productos = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Gestión de Productos
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/productos_listar.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Gestión de Productos
    </h1>

    <div class="acciones">

        <a
            href="crear.php"
            class="boton"
        >
            Nuevo Producto
        </a>

    </div>

    <?php if(count($productos) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio (€)</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>

            </thead>

            <tbody>

                <?php foreach($productos as $producto): ?>

                    <tr>

                        <td>
                            <?= $producto['id'] ?>
                        </td>

                        <td>
                            <?= htmlspecialchars($producto['nombre']) ?>
                        </td>

                        <td>
                            <?= number_format(
                                $producto['precio'],
                                2
                            ) ?>
                        </td>

                        <td>
                            <?= $producto['stock'] ?>
                        </td>

                        <td>

                            <a
                                href="editar.php?id=<?= $producto['id'] ?>"
                                class="editar"
                            >
                                Editar
                            </a>

                            <a
                                href="eliminar.php?id=<?= $producto['id'] ?>"
                                class="eliminar"
                            >
                                Eliminar
                            </a>

                        </td>

                    </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    <?php else: ?>

        <div class="sin-datos">

            No hay productos registrados.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/productos_listar.js"></script>

</body>
</html>
```
### ventas
**detalle.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$id = isset($_GET['id'])
    ? (int) $_GET['id']
    : 0;

$stmt = $db->prepare("
    SELECT
        ventas.id,
        ventas.fecha,
        ventas.total,
        clientes.nombre AS cliente
    FROM ventas
    INNER JOIN clientes
        ON ventas.cliente_id = clientes.id
    WHERE ventas.id = :id
");

$stmt->execute([
    ':id' => $id
]);

$venta = $stmt->fetch();

if (!$venta) {
    die('Venta no encontrada.');
}

$stmt = $db->prepare("
    SELECT
        detalle_ventas.cantidad,
        detalle_ventas.precio,
        productos.nombre
    FROM detalle_ventas
    INNER JOIN productos
        ON detalle_ventas.producto_id = productos.id
    WHERE detalle_ventas.venta_id = :venta_id
");

$stmt->execute([
    ':venta_id' => $id
]);

$detalles = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Detalle de Venta</title>

    <link
        rel="stylesheet"
        href="../assets/css/ventas_detalle.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Detalle de Venta #<?= $venta['id'] ?></h1>

    <div class="cabecera">

        <p>
            <strong>Cliente:</strong>
            <?= htmlspecialchars($venta['cliente']) ?>
        </p>

        <p>
            <strong>Fecha:</strong>
            <?= htmlspecialchars($venta['fecha']) ?>
        </p>

        <p>
            <strong>Total:</strong>
            <?= number_format($venta['total'], 2) ?> €
        </p>

    </div>

    <table>

        <thead>

            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
            </tr>

        </thead>

        <tbody>

        <?php foreach ($detalles as $detalle): ?>

            <tr>

                <td>
                    <?= htmlspecialchars($detalle['nombre']) ?>
                </td>

                <td>
                    <?= $detalle['cantidad'] ?>
                </td>

                <td>
                    <?= number_format($detalle['precio'], 2) ?> €
                </td>

                <td>
                    <?= number_format(
                        $detalle['cantidad'] * $detalle['precio'],
                        2
                    ) ?>
                    €
                </td>

            </tr>

        <?php endforeach; ?>

        </tbody>

    </table>

    <a
        href="listar.php"
        class="volver"
    >
        Volver a ventas
    </a>

</div>

<script src="../assets/js/ventas_detalle.js"></script>

</body>
</html>
```
**listar.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$stmt = $db->query("
    SELECT
        ventas.id,
        ventas.fecha,
        ventas.total,
        clientes.nombre AS cliente
    FROM ventas
    INNER JOIN clientes
        ON ventas.cliente_id = clientes.id
    ORDER BY ventas.id DESC
");

$ventas = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>
        Gestión de Ventas
    </title>

    <link
        rel="stylesheet"
        href="../assets/css/ventas_listar.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>
        Gestión de Ventas
    </h1>

    <div class="acciones">

        <a
            href="nueva.php"
            class="boton"
        >
            Nueva Venta
        </a>

        <a
            href="../exportaciones/exportar_ventas.php"
            class="boton exportar"
        >
            Exportar CSV
        </a>

        <a
            href="../exportaciones/exportar_pdf.php"
            class="boton pdf"
        >
            Informe PDF
        </a>

    </div>

    <?php if(count($ventas) > 0): ?>

        <table>

            <thead>

                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Total (€)</th>
                    <th>Acciones</th>
                </tr>

            </thead>

            <tbody>

                <?php foreach($ventas as $venta): ?>

                    <tr>

                        <td>
                            <?= $venta['id'] ?>
                        </td>

                        <td>
                            <?= htmlspecialchars($venta['cliente']) ?>
                        </td>

                        <td>
                            <?= htmlspecialchars($venta['fecha']) ?>
                        </td>

                        <td>
                            <?= number_format(
                                $venta['total'],
                                2
                            ) ?>
                        </td>

                        <td>

                            <a
                                href="detalle.php?id=<?= $venta['id'] ?>"
                                class="detalle"
                            >
                                Ver Detalle
                            </a>

                        </td>

                    </tr>

                <?php endforeach; ?>

            </tbody>

        </table>

    <?php else: ?>

        <div class="sin-datos">

            No hay ventas registradas.

        </div>

    <?php endif; ?>

    <a
        href="../index.php"
        class="volver"
    >
        Volver al panel principal
    </a>

</div>

<script src="../assets/js/ventas_listar.js"></script>

</body>
</html>
```
**nueva.php**
```php
<?php

require_once '../database/conexion.php';

$db = Conexion::conectar();

$clientes = $db->query("
    SELECT *
    FROM clientes
    ORDER BY nombre
")->fetchAll();

$productos = $db->query("
    SELECT *
    FROM productos
    WHERE stock > 0
    ORDER BY nombre
")->fetchAll();

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $clienteId = (int) ($_POST['cliente_id'] ?? 0);
    $productoId = (int) ($_POST['producto_id'] ?? 0);
    $cantidad = (int) ($_POST['cantidad'] ?? 0);

    if ($clienteId <= 0 || $productoId <= 0 || $cantidad <= 0) {

        $error = 'Todos los campos son obligatorios.';

    } else {

        $stmt = $db->prepare("
            SELECT *
            FROM productos
            WHERE id = :id
        ");

        $stmt->execute([
            ':id' => $productoId
        ]);

        $producto = $stmt->fetch();

        if (!$producto) {

            $error = 'Producto no encontrado.';

        } elseif ($producto['stock'] < $cantidad) {

            $error = 'Stock insuficiente.';

        } else {

            $precioUnitario = $producto['precio'];

            $total =
                $precioUnitario * $cantidad;

            $db->beginTransaction();

            try {

                $stmt = $db->prepare("
                    INSERT INTO ventas
                    (
                        cliente_id,
                        fecha,
                        total
                    )
                    VALUES
                    (
                        :cliente_id,
                        :fecha,
                        :total
                    )
                ");

                $stmt->execute([
                    ':cliente_id' => $clienteId,
                    ':fecha' => date('Y-m-d'),
                    ':total' => $total
                ]);

                $ventaId = $db->lastInsertId();

                $stmt = $db->prepare("
                    INSERT INTO detalle_ventas
                    (
                        venta_id,
                        producto_id,
                        cantidad,
                        precio
                    )
                    VALUES
                    (
                        :venta_id,
                        :producto_id,
                        :cantidad,
                        :precio
                    )
                ");

                $stmt->execute([
                    ':venta_id' => $ventaId,
                    ':producto_id' => $productoId,
                    ':cantidad' => $cantidad,
                    ':precio' => $precioUnitario
                ]);

                $stmt = $db->prepare("
                    UPDATE productos
                    SET stock = stock - :cantidad
                    WHERE id = :id
                ");

                $stmt->execute([
                    ':cantidad' => $cantidad,
                    ':id' => $productoId
                ]);

                $db->commit();

                header('Location: listar.php');
                exit;

            } catch (Exception $e) {

                $db->rollBack();

                $error =
                    'Se produjo un error al registrar la venta.';
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Nueva Venta</title>

    <link
        rel="stylesheet"
        href="../assets/css/ventas_nueva.css"
    >

</head>

<body>

<div class="contenedor">

    <h1>Nueva Venta</h1>

    <?php if (!empty($error)): ?>

        <div class="error">
            <?= $error ?>
        </div>

    <?php endif; ?>

    <form
        method="POST"
        id="formVenta"
    >

        <div class="grupo">

            <label for="cliente_id">
                Cliente
            </label>

            <select
                name="cliente_id"
                id="cliente_id"
                required
            >

                <option value="">
                    Seleccione un cliente
                </option>

                <?php foreach ($clientes as $cliente): ?>

                    <option value="<?= $cliente['id'] ?>">
                        <?= htmlspecialchars($cliente['nombre']) ?>
                    </option>

                <?php endforeach; ?>

            </select>

        </div>

        <div class="grupo">

            <label for="producto_id">
                Producto
            </label>

            <select
                name="producto_id"
                id="producto_id"
                required
            >

                <option value="">
                    Seleccione un producto
                </option>

                <?php foreach ($productos as $producto): ?>

                    <option
                        value="<?= $producto['id'] ?>"
                        data-precio="<?= $producto['precio'] ?>"
                        data-stock="<?= $producto['stock'] ?>"
                    >
                        <?= htmlspecialchars($producto['nombre']) ?>
                        (Stock: <?= $producto['stock'] ?>)
                    </option>

                <?php endforeach; ?>

            </select>

        </div>

        <div class="grupo">

            <label for="cantidad">
                Cantidad
            </label>

            <input
                type="number"
                id="cantidad"
                name="cantidad"
                min="1"
                value="1"
                required
            >

        </div>

        <div class="grupo">

            <label>
                Total estimado
            </label>

            <div id="totalVista">
                0.00 €
            </div>

        </div>

        <button
            type="submit"
            class="guardar"
        >
            Registrar Venta
        </button>

    </form>

    <a
        href="listar.php"
        class="volver"
    >
        Volver al listado
    </a>

</div>

<script src="../assets/js/ventas_nueva.js"></script>

</body>
</html>
```
## 003-Resultado de Aprendizaje

A- Se han utilizado herramientas y lenguajes de consulta y manipulación de datos proporcionados por los sistemas ERP-CRM.
------------------------------------------------------------

Para el desarrollo de la aplicación se ha utilizado SQLite como sistema gestor de bases de datos y PHP mediante PDO para la comunicación con la base de datos.

Se han realizado consultas SQL para la inserción, modificación, eliminación y consulta de información almacenada en las tablas clientes, productos, ventas y detalle_ventas.

Se han utilizado sentencias SQL como:

- SELECT
- INSERT
- UPDATE
- DELETE
- COUNT
- SUM
- GROUP BY
- ORDER BY
- INNER JOIN
- LEFT JOIN

Estas consultas permiten gestionar toda la información del sistema ERP-CRM de forma eficiente.

------------------------------------------------------------
B- Se han generado formularios.
------------------------------------------------------------

La aplicación incorpora diversos formularios para la gestión de la información:

- Alta de clientes.
- Edición de clientes.
- Alta de productos.
- Edición de productos.
- Registro de ventas.
- Inicio de sesión.

Todos los formularios incluyen validaciones tanto en el lado cliente mediante JavaScript como en el lado servidor mediante PHP.

------------------------------------------------------------
C- Se han generado informes.
------------------------------------------------------------

Se ha desarrollado un módulo específico de informes que permite generar información resumida y estadística del sistema.

Los informes implementados son:

- Informe de ventas mensuales.
- Informe de mejores clientes.
- Informe de productos más vendidos.
- Informe de rendimiento del sistema.

Estos informes ayudan a analizar la actividad comercial registrada en la aplicación.

------------------------------------------------------------
D- Se han exportado datos e informes.
------------------------------------------------------------

La aplicación permite exportar información en diferentes formatos para facilitar su utilización externa.

Se han implementado las siguientes exportaciones:

- Exportación de clientes a formato CSV.
- Exportación de ventas a formato CSV.
- Generación de informe general en formato PDF imprimible.

Estas funcionalidades permiten compartir, almacenar y analizar la información fuera del sistema.

------------------------------------------------------------
E- Se han automatizado las extracciones de datos mediante procesos.
------------------------------------------------------------

Se han desarrollado procesos automáticos encargados de realizar tareas de mantenimiento y obtención de información.

Procesos implementados:

- respaldo.php
  Genera automáticamente copias de seguridad de la base de datos SQLite.

- actualizacion_estadisticas.php
  Obtiene indicadores del sistema y genera un archivo JSON con estadísticas actualizadas.

Estos procesos automatizan tareas que normalmente deberían realizarse manualmente.

------------------------------------------------------------
F- Se ha verificado el rendimiento del sistema ERP-CRM.
------------------------------------------------------------

Se ha desarrollado el informe rendimiento.php para medir el tiempo de ejecución de las principales consultas realizadas sobre la base de datos.

El informe muestra:

- Número de clientes.
- Número de productos.
- Número de ventas.
- Facturación total.
- Tiempo de ejecución de cada consulta.
- Tiempo total empleado.

Gracias a este análisis es posible comprobar el comportamiento y rendimiento general del sistema.

------------------------------------------------------------
G- Se han documentado las operaciones realizadas y las incidencias observadas.
------------------------------------------------------------

Se ha elaborado la documentación completa del proyecto:

- manual_usuario.md
  Describe el funcionamiento de la aplicación para el usuario final.

- manual_instalacion.md
  Explica el proceso de instalación, configuración y puesta en marcha.

- incidencias.md
  Recoge los problemas detectados durante el desarrollo y las soluciones aplicadas.

Toda la documentación permite garantizar el mantenimiento y utilización del sistema.

------------------------------------------------------------
H- Se ha obtenido información relevante a partir de los datos procesados.
------------------------------------------------------------

A partir de la información almacenada en la base de datos se han obtenido indicadores y estadísticas relevantes para la gestión empresarial.

Entre los datos obtenidos destacan:

- Facturación total.
- Número de ventas realizadas.
- Clientes con mayor volumen de compras.
- Productos más vendidos.
- Estadísticas generales del sistema.
- Información de rendimiento de las consultas.

Esta información facilita la toma de decisiones y la evaluación del funcionamiento de la actividad comercial.
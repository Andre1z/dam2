# Ejemplos de conectores AndreiBBDD

La carpeta contiene ejemplos equivalentes para los conectores nativos de Python y PHP.

## Python

Compilar:

```bash
./compilar_python.sh
```

Ejecutar, usando el módulo generado en la raíz:

```bash
PYTHONPATH=. python3 doc/python/01_basico.py
PYTHONPATH=. python3 doc/python/02_transacciones_vistas.py
PYTHONPATH=. python3 doc/python/03_subconsultas.py
```

## PHP

En Ubuntu/Debian se necesitan las cabeceras de desarrollo de PHP:

```bash
sudo apt install php-dev
```

Compilar:

```bash
./compilar_php.sh
```

No es necesario instalar la extensión para probarla:

```bash
php -d extension=./andreibbdd.so doc/php/01_basico.php
php -d extension=./andreibbdd.so doc/php/02_transacciones_vistas.php
php -d extension=./andreibbdd.so doc/php/03_subconsultas.php
```

Instalación opcional del módulo:

```bash
./instalar_php.sh
```

Después de habilitar `extension=andreibbdd.so`, los scripts pueden ejecutarse simplemente con `php archivo.php`.

## Correspondencia básica

| Python | PHP |
|---|---|
| `andreibbdd.crear_base()` | `andreibbdd_crear_base()` |
| `andreibbdd.usar_base()` | `andreibbdd_usar_base()` |
| `andreibbdd.insertar()` | `andreibbdd_insertar()` |
| `andreibbdd.consultar()` | `andreibbdd_consultar()` |
| `andreibbdd.iniciar_transaccion()` | `andreibbdd_iniciar_transaccion()` |
| `andreibbdd.confirmar()` | `andreibbdd_confirmar()` |
| `andreibbdd.deshacer()` | `andreibbdd_deshacer()` |
| `andreibbdd.crear_vista()` | `andreibbdd_crear_vista()` |

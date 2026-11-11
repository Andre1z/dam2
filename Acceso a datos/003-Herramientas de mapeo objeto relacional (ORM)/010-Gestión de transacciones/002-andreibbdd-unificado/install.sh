#!/usr/bin/env bash
set -Eeuo pipefail
cd "$(dirname "$(readlink -f "$0")")"
trap 'echo "ERROR en línea $LINENO: $BASH_COMMAND" >&2' ERR

if [[ $EUID -eq 0 ]]; then echo 'Ejecuta como usuario normal (el script usa sudo).'; exit 1; fi
for f in Makefile src/AndreiBBDD.cpp src/conector_python.cpp src/conector_php.cpp python/andreiorm.py php/AndreiORM.php config.json; do
  [[ -f "$f" ]] || { echo "Falta $f: ejecuta desde el proyecto unificado" >&2; exit 1; }
done

sudo apt-get update
sudo apt-get install -y build-essential make libjson-c-dev python3-dev php-dev

# -B obliga a compilar incluso si existen directorios python/ y php/.
make -B andreibbdd libandreiorm.so
make -B python
make -B php

PY_SUFFIX="$(python3-config --extension-suffix)"
PY_MODULE="andreibbdd${PY_SUFFIX}"
[[ -f "$PY_MODULE" ]] || { echo "No se generó $PY_MODULE" >&2; exit 1; }
[[ -f andreibbdd.so && -f libandreiorm.so ]] || { echo 'Faltan bibliotecas compiladas' >&2; exit 1; }

sudo install -m 755 andreibbdd /usr/local/bin/andreibbdd
sudo install -m 755 libandreiorm.so /usr/local/lib/libandreiorm.so
sudo ldconfig

# Python: instalar en dist-packages del Python del sistema Ubuntu.
PY_DEST="$(python3 - <<'PY'
import sysconfig
print(sysconfig.get_path('platlib', scheme='posix_local'))
PY
)"
sudo install -d "$PY_DEST"
sudo install -m 644 python/andreiorm.py "$PY_DEST/andreiorm.py"
sudo install -m 755 "$PY_MODULE" "$PY_DEST/$PY_MODULE"

# PHP: instalar extensión SQL, sin activarla globalmente sin permiso explícito.
PHP_EXT_DIR="$(php-config --extension-dir)"
sudo install -d "$PHP_EXT_DIR"
sudo install -m 755 andreibbdd.so "$PHP_EXT_DIR/andreibbdd.so"
sudo install -d /usr/local/share/andreiorm/php
sudo install -m 644 php/AndreiORM.php /usr/local/share/andreiorm/php/AndreiORM.php

# Configuración de ejemplo accesible desde cualquier directorio.
sudo install -d /etc/andreibbdd
if [[ ! -f /etc/andreibbdd/config.json ]]; then
  sudo install -m 644 config.json /etc/andreibbdd/config.json
fi

printf '\n=== VERIFICACIONES ===\n'
command -v andreibbdd
ldconfig -p | grep libandreiorm || true
python3 -c 'import andreiorm; print("Python ORM: OK")'
python3 -c 'import andreibbdd; print("Python SQL: OK")'
php -d "extension=$PHP_EXT_DIR/andreibbdd.so" -r 'echo "PHP SQL: ", extension_loaded("andreibbdd") ? "OK\n" : "ERROR\n";'
php -l /usr/local/share/andreiorm/php/AndreiORM.php
printf '\nInstalación terminada.\n'
printf 'PHP SQL: ejecutar con php -d extension=%s/andreibbdd.so script.php\n' "$PHP_EXT_DIR"
printf 'PHP ORM: requiere FFI habilitado; usa /usr/local/share/andreiorm/php/AndreiORM.php\n'
printf 'Configuración: /etc/andreibbdd/config.json (pásala explícitamente a AndreiORM)\n'

#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$(readlink -f "$0")")"
if [[ "${EUID}" -ne 0 ]]; then echo "Ejecuta: sudo ./install-system.sh"; exit 1; fi
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y build-essential make pkg-config libjson-c-dev python3-dev php-dev php-cli python3
make clean
make all python php
install -d -m 755 /usr/local/bin /usr/local/lib /usr/local/include /usr/local/share/andreiorm/php /etc/andrei /var/lib/andrei/basededatos
install -m 755 andreibbdd /usr/local/bin/andreibbdd
install -m 755 libandreiorm.so /usr/local/lib/libandreiorm.so
install -m 644 include/AndreiBBDD.hpp include/AndreiORM.hpp /usr/local/include/
install -m 644 php/AndreiORM.php /usr/local/share/andreiorm/php/AndreiORM.php
PYDIR="$(python3 - <<'PYTHON'
import sysconfig
print(sysconfig.get_path('platlib',scheme='posix_local'))
PYTHON
)"
install -d -m 755 "$PYDIR"
install -m 644 python/andreiorm.py "$PYDIR/andreiorm.py"
install -m 755 andreibbdd$(python3-config --extension-suffix) "$PYDIR/"
PHPEXT="$(php-config --extension-dir)"
install -d -m 755 "$PHPEXT"
install -m 755 andreibbdd.so "$PHPEXT/andreibbdd.so"
PHPVER="$(php -r 'echo PHP_MAJOR_VERSION.".".PHP_MINOR_VERSION;')"
install -d -m 755 "/etc/php/$PHPVER/mods-available"
printf 'extension=andreibbdd.so\n' > "/etc/php/$PHPVER/mods-available/andreibbdd.ini"
phpenmod -v "$PHPVER" andreibbdd
if [[ ! -f /etc/andrei/config.json && -f /etc/jocarsa/config.json ]]; then
  cp -a /etc/jocarsa/config.json /etc/andrei/config.json
fi
if [[ ! -f /etc/andrei/config.json ]]; then
  printf '{\n  "instalacion": "/var/lib/andrei/basededatos/",\n  "tamanoRegistro": 512\n}\n' > /etc/andrei/config.json
fi
chmod 755 /var/lib/andrei /var/lib/andrei/basededatos
ldconfig
if systemctl is-active --quiet apache2; then systemctl restart apache2; fi
php -m | grep -ix andreibbdd
python3 -c 'import andreibbdd, andreiorm; print("Python OK")'
echo 'Instalacion completada. Configura permisos de /var/lib/andrei/basededatos para el usuario de tus aplicaciones.'

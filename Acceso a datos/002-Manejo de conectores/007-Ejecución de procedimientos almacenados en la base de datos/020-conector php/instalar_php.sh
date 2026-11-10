#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
./compilar_php.sh
PHP_CONFIG="${PHP_CONFIG:-php-config}"
EXT_DIR="$($PHP_CONFIG --extension-dir)"
INI_DIR="$($PHP_CONFIG --ini-dir 2>/dev/null || true)"
sudo install -Dm755 andreibbdd.so "$EXT_DIR/andreibbdd.so"
echo "[AndreiBBDD] Instalado en $EXT_DIR/andreibbdd.so"
echo "Actívalo añadiendo: extension=andreibbdd.so"
echo "Después comprueba: php -m | grep -i andreibbdd"

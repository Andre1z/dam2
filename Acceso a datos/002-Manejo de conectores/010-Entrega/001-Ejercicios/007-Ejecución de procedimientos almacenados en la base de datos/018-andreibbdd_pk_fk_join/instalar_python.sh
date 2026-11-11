#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
./compilar_python.sh
PYTHON="${PYTHON:-python3}"
EXT="$($PYTHON-config --extension-suffix)"
SITE="$($PYTHON -c "import sysconfig; print(sysconfig.get_paths()['platlib'])")"
echo "[AndreiBBDD] Instalando conector en: $SITE"
sudo install -Dm755 "andreibbdd${EXT}" "$SITE/andreibbdd${EXT}"
$PYTHON -c 'import andreibbdd; print("Conector Python importado correctamente")'

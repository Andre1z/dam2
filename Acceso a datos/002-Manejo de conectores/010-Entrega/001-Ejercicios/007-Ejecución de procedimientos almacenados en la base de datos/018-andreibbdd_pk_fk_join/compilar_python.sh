#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
PYTHON="${PYTHON:-python3}"
CXX="${CXX:-g++}"
EXT="$($PYTHON-config --extension-suffix)"
INCLUDES="$($PYTHON-config --includes)"
echo "[AndreiBBDD] Python: $($PYTHON --version)"
echo "[AndreiBBDD] Compilando andreibbdd${EXT}"
$CXX -std=c++20 -O2 -Wall -Wextra -pedantic -fPIC -shared $INCLUDES conector_python.cpp AndreiBBDD.cpp -o "andreibbdd${EXT}"
echo "[AndreiBBDD] Generado: andreibbdd${EXT}"

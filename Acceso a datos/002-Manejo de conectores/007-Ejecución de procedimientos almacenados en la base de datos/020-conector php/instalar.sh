#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "[AndreiBBDD] Compilando e instalando terminal + conector Python"
make -j"$(nproc)"
sudo make install

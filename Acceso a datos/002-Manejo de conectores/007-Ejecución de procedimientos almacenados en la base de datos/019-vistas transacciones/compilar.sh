#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "[AndreiBBDD] Compilando proyecto completo"
make -j"$(nproc)"

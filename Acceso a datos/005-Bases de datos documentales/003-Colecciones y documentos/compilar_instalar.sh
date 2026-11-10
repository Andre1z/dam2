#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
g++ -std=c++17 -O2 -Wall -Wextra -pedantic andrei_documental.cpp -o andrei-documental-bin $(pkg-config --cflags --libs sqlite3 json-c)
echo 'Compilado: ./andrei-documental-bin'
if [[ "${1:-}" == "--instalar" ]]; then
  install -Dm755 andrei-documental-bin /usr/local/bin/andrei-documental
  echo 'Instalado: /usr/local/bin/andrei-documental'
fi

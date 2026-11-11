#!/bin/bash
set -e

echo "=================================="
echo " Instalador AndreiBBDD + ORM"
echo "=================================="

sudo apt update
sudo apt install -y \
    build-essential \
    libjson-c-dev \
    python3-dev \
    php-dev

make clean
make
make python
make php

echo "Instalando motor..."

sudo install -m 755 andreibbdd /usr/local/bin/
sudo install -m 755 libandreiorm.so /usr/local/lib/

sudo ldconfig

echo "Instalando conector Python..."

PYTHON_DIR=$(python3 -c \
    "import sysconfig; print(sysconfig.get_path('platlib'))")

sudo mkdir -p "$PYTHON_DIR"
sudo cp python/andreiorm.py "$PYTHON_DIR/"
sudo cp andreibbdd.cpython-*.so "$PYTHON_DIR/"

echo "Instalando conector PHP ORM..."

sudo mkdir -p /usr/local/share/andreiorm/php
sudo cp php/AndreiORM.php /usr/local/share/andreiorm/php/

echo "=================================="
echo " Instalación completada"
echo "=================================="
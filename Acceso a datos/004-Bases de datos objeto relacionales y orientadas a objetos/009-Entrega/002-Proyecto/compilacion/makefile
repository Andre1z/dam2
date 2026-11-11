CXX = g++

CXXFLAGS = -std=c++17 -Wall -Wextra

SQLITE_DIR = C:/xampp/perl/vendor/lib/auto/share/dist/DBD-SQLite

SRC = \
../nucleo/main.cpp \
../nucleo/modelos/autor.cpp \
../nucleo/modelos/categoria.cpp \
../nucleo/modelos/libro.cpp \
../nucleo/persistencia/basedatos.cpp \
../nucleo/persistencia/inicializadorbd.cpp \
../nucleo/persistencia/orm.cpp \
../nucleo/utilidades/logger.cpp

TARGET = gestor_objetos.exe

all: $(TARGET)

$(TARGET): $(SRC)
	$(CXX) $(CXXFLAGS) -I$(SQLITE_DIR) $(SRC) -x c $(SQLITE_DIR)/sqlite3.c -o $(TARGET)

clean:
	del /Q $(TARGET) 2>NUL || exit 0

run:
	./$(TARGET)

rebuild: clean all

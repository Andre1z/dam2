# AndreiDB - compilación en Linux / macOS
#   make           compila ./andreidb (en esta misma carpeta)
#   make ejecutar  compila y arranca el servidor
# Los datos persistentes se guardan en data/ (junto al ejecutable).
CXX ?= g++
CXXFLAGS ?= -std=c++17 -O2 -Wall -Wextra
FUENTES := $(wildcard server/*.cpp) $(wildcard procedimientos/*.cpp)

andreidb: $(FUENTES) $(wildcard server/*.hpp) $(wildcard procedimientos/*.hpp)
	$(CXX) $(CXXFLAGS) -Iserver -Iprocedimientos $(FUENTES) -o $@

ejecutar: andreidb
	./andreidb

clean:
	rm -f andreidb

.PHONY: ejecutar clean

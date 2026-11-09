CXX=g++
CXXFLAGS=-std=c++20 -O2 -Wall -Wextra -pedantic -fPIC
PYTHON=python3
PY_INCLUDES=$(shell $(PYTHON)-config --includes)
PY_SUFFIX=$(shell $(PYTHON)-config --extension-suffix)
PY_PLATLIB=$(shell $(PYTHON) -c "import sysconfig; print(sysconfig.get_path('platlib'))")
MODULE=andreibbdd$(PY_SUFFIX)

all: andrei $(MODULE)

andrei: main.cpp AndreiBBDD.cpp AndreiBBDD.hpp
	$(CXX) $(CXXFLAGS) main.cpp AndreiBBDD.cpp -o andrei

$(MODULE): conector_python.cpp AndreiBBDD.cpp AndreiBBDD.hpp
	$(CXX) $(CXXFLAGS) -shared $(PY_INCLUDES) conector_python.cpp AndreiBBDD.cpp -o $(MODULE)

install: all
	install -d /etc/andreibbdd
	install -m 644 config.json /etc/andreibbdd/config.json
	install -d /var/andrei-basededatos
	@if [ -n "$$SUDO_USER" ]; then chown $$SUDO_USER:$$SUDO_USER /var/andrei-basededatos; fi
	install -m 755 andrei /usr/local/bin/andrei
	install -m 755 $(MODULE) $(PY_PLATLIB)/$(MODULE)
	@echo "Instalado. Prueba: cd /tmp && python3 -c 'import andreibbdd; print(andreibbdd.configuracion())'"

uninstall:
	rm -f /usr/local/bin/andrei
	rm -f $(PY_PLATLIB)/andreibbdd*.so
	rm -rf /etc/andreibbdd
	@echo "Datos conservados en /var/andrei-basededatos"

clean:
	rm -f andrei andreibbdd*.so

CXX := g++
CXXFLAGS := -std=c++20 -O2 -Wall -Wextra -pedantic -fPIC
PYTHON := python3
PY_INCLUDES := $(shell $(PYTHON)-config --includes)
PY_EXT := $(shell $(PYTHON)-config --extension-suffix)
PREFIX ?= /usr/local
PY_SITE := $(shell $(PYTHON) -c "import sysconfig; print(sysconfig.get_paths()['platlib'])")

all: andreibbdd andreibbdd$(PY_EXT)

andreibbdd: main.cpp AndreiBBDD.cpp AndreiBBDD.hpp
	$(CXX) $(CXXFLAGS) main.cpp AndreiBBDD.cpp -o $@

andreibbdd$(PY_EXT): conector_python.cpp AndreiBBDD.cpp AndreiBBDD.hpp
	$(CXX) $(CXXFLAGS) -shared $(PY_INCLUDES) conector_python.cpp AndreiBBDD.cpp -o $@

install: all
	install -Dm755 andreibbdd $(PREFIX)/bin/andreibbdd
	install -Dm755 andreibbdd$(PY_EXT) $(PY_SITE)/andreibbdd$(PY_EXT)
	install -d /etc/andreibbdd
	@test -f /etc/andreibbdd/config.json || install -m644 config.json /etc/andreibbdd/config.json
	install -d /var/andrei-basededatos

uninstall:
	rm -f $(PREFIX)/bin/andreibbdd
	rm -f $(PY_SITE)/andreibbdd*.so

clean:
	rm -f andreibbdd andreibbdd*.so jocarsabbdd jocarsabbdd*.so *.o

.PHONY: all install uninstall clean

CXX=g++
CXXFLAGS=-std=c++11 -O2 -Wall -Wextra -pedantic
PYTHON_CONFIG ?= python3-config

all: andrei

andrei: main.cpp AndreiBBDD.cpp AndreiBBDD.hpp
	$(CXX) $(CXXFLAGS) main.cpp AndreiBBDD.cpp -o andrei

python-extension: andreibbdd.so

andreibbdd.so: conector_python.cpp AndreiBBDD.cpp AndreiBBDD.hpp
	$(CXX) $(CXXFLAGS) -shared -fPIC $$($(PYTHON_CONFIG) --includes) conector_python.cpp AndreiBBDD.cpp -o $@ $$($(PYTHON_CONFIG) --ldflags)

clean:
	rm -f andrei andreibbdd*.so andreibbdd*.pyd

.PHONY: all clean python-extension

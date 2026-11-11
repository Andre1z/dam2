CXX=g++
CXXFLAGS=-std=c++17 -O2 -Wall -Wextra -fPIC -Iinclude
LDLIBS=-ljson-c
all: andreibbdd libandreiorm.so
andreibbdd: src/main.cpp src/AndreiBBDD.cpp include/AndreiBBDD.hpp
	$(CXX) $(CXXFLAGS) src/main.cpp src/AndreiBBDD.cpp $(LDLIBS) -o $@
libandreiorm.so: src/AndreiBBDD.cpp src/AndreiORM.cpp src/andreiorm_c.cpp
	$(CXX) $(CXXFLAGS) -shared $^ $(LDLIBS) -o $@
python:
	$(CXX) $(CXXFLAGS) -shared $$(python3-config --includes) src/conector_python.cpp src/AndreiBBDD.cpp $(LDLIBS) -o andreibbdd$$(python3-config --extension-suffix)
php:
	$(CXX) $(CXXFLAGS) -shared $$(php-config --includes) -DCOMPILE_DL_ANDREIBBDD src/conector_php.cpp src/AndreiBBDD.cpp $(LDLIBS) -o andreibbdd.so
clean:
	rm -f andreibbdd libandreiorm.so andreibbdd.so andreibbdd.cpython-*.so \
		jocarsabbdd libjocarsaorm.so jocarsabbdd.so jocarsabbdd.cpython-*.so
.PHONY: all python php clean

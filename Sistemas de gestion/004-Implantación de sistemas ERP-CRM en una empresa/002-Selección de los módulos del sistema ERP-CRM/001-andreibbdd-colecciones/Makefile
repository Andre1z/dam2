CXX=g++
CXXFLAGS=-std=c++17 -O2 -Wall -Wextra -fPIC -Iinclude
LDLIBS=-ljson-c
all: jocarsabbdd libjocarsaorm.so
jocarsabbdd: src/main.cpp src/AndreiBBDD.cpp include/AndreiBBDD.hpp
	$(CXX) $(CXXFLAGS) src/main.cpp src/AndreiBBDD.cpp $(LDLIBS) -o $@
libjocarsaorm.so: src/AndreiBBDD.cpp src/AndreiORM.cpp src/jocarsaorm_c.cpp
	$(CXX) $(CXXFLAGS) -shared $^ $(LDLIBS) -o $@
python:
	$(CXX) $(CXXFLAGS) -shared $$(python3-config --includes) src/conector_python.cpp src/AndreiBBDD.cpp $(LDLIBS) -o jocarsabbdd$$(python3-config --extension-suffix)
php:
	$(CXX) $(CXXFLAGS) -shared $$(php-config --includes) -DCOMPILE_DL_JOCARSABBDD src/conector_php.cpp src/AndreiBBDD.cpp $(LDLIBS) -o jocarsabbdd.so
clean:
	rm -f jocarsabbdd libjocarsaorm.so jocarsabbdd.so jocarsabbdd.cpython-*.so
.PHONY: all python php clean

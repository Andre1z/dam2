CXX := g++
CXXFLAGS := -std=c++17 -O2 -Wall -Wextra -fPIC -Iinclude
.PHONY: all clean python php install
all: andreibbdd libandreiorm.so
andreibbdd: src/main.cpp src/AndreiBBDD.cpp
	$(CXX) $(CXXFLAGS) $^ -o $@
libandreiorm.so: src/AndreiBBDD.cpp src/AndreiORM.cpp src/andreiorm_c.cpp
	$(CXX) $(CXXFLAGS) -shared $^ -ljson-c -o $@
python:
	$(CXX) $(CXXFLAGS) -shared $$(python3-config --includes) src/conector_python.cpp src/AndreiBBDD.cpp -o andreibbdd$$(python3-config --extension-suffix)
php:
	$(CXX) $(CXXFLAGS) -shared $$(php-config --includes) -DCOMPILE_DL_ANDREIBBDD src/conector_php.cpp src/AndreiBBDD.cpp -o andreibbdd.so
install:
	./install.sh
clean:
	rm -f andreibbdd libandreiorm.so andreibbdd*.so

CXX ?= g++
CXXFLAGS = -std=c++17 -O2 -Wall -Wextra -fPIC -Iinclude
LDFLAGS = -lsqlite3
PREFIX ?= /usr/local
all: libandreiorm.so andreiorm
libandreiorm.so: src/AndreiORM.cpp src/andreiorm_c.cpp include/AndreiORM.h include/andreiorm_c.h
	$(CXX) $(CXXFLAGS) -shared src/AndreiORM.cpp src/andreiorm_c.cpp -o $@ $(LDFLAGS)
andreiorm: src/main.cpp libandreiorm.so
	$(CXX) $(CXXFLAGS) src/main.cpp -L. -landreiorm -Wl,-rpath,'$$ORIGIN/../lib' -o $@
install: all
	install -d $(DESTDIR)$(PREFIX)/lib $(DESTDIR)$(PREFIX)/bin $(DESTDIR)$(PREFIX)/include
	install -m 755 libandreiorm.so $(DESTDIR)$(PREFIX)/lib/
	install -m 755 andreiorm $(DESTDIR)$(PREFIX)/bin/
	install -m 644 include/AndreiORM.h include/andreiorm_c.h $(DESTDIR)$(PREFIX)/include/
uninstall:
	rm -f $(DESTDIR)$(PREFIX)/lib/libandreiorm.so $(DESTDIR)$(PREFIX)/bin/andreiorm $(DESTDIR)$(PREFIX)/include/AndreiORM.h $(DESTDIR)$(PREFIX)/include/andreiorm_c.h
clean:
	rm -f libandreiorm.so andreiorm
.PHONY: all install uninstall clean

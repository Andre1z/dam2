#pragma once
#include "AndreiBBDD.hpp"
#include <string>

class AndreiORM {
public:
    explicit AndreiORM(AndreiBBDD& motor) : db(motor) {}

    long long guardar(const std::string&, const std::string&);
    std::string obtener(const std::string&, long long) const;
    std::string todos(const std::string&) const;
    std::string buscar(const std::string&, const std::string&, const std::string&) const;
    bool actualizar(const std::string&, long long, const std::string&);
    bool eliminar(const std::string&, long long);
    long long contar(const std::string&) const;

private:
    AndreiBBDD& db;

    std::string tabla(const std::string&) const;
    void asegurar(const std::string&);
};
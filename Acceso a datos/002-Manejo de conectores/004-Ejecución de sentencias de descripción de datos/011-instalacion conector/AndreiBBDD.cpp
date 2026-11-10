#include "AndreiBBDD.hpp"
#include <algorithm>
#include <cstdlib>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <regex>
#include <sstream>
#include <stdexcept>

namespace fs = std::filesystem;

std::string AndreiSerializador::serializar(const std::vector<std::string>& lista, char delimitador) const {
    std::ostringstream out;
    for (std::size_t i=0; i<lista.size(); ++i) { if (i) out << delimitador; out << lista[i]; }
    return out.str();
}
std::vector<std::string> AndreiSerializador::desserializar(const std::string& cadena, char delimitador) const {
    std::vector<std::string> r; std::stringstream ss(cadena); std::string x;
    while (std::getline(ss,x,delimitador)) r.push_back(x);
    if (!cadena.empty() && cadena.back()==delimitador) r.push_back("");
    return r;
}

AndreiBBDD::AndreiBBDD(const std::string& config) {
    // Prioridad: ruta explicita/local -> variable de entorno -> configuracion global.
    std::string rutaConfig = config;
    if (!fs::exists(rutaConfig)) {
        if (const char* env = std::getenv("ANDREIBBDD_CONFIG"); env && fs::exists(env)) rutaConfig = env;
        else if (fs::exists("/etc/andreibbdd/config.json")) rutaConfig = "/etc/andreibbdd/config.json";
        else throw std::runtime_error("No se ha encontrado config.json, ANDREIBBDD_CONFIG ni /etc/andreibbdd/config.json");
    }
    std::ifstream f(rutaConfig); if (!f) throw std::runtime_error("No se puede abrir la configuracion: " + rutaConfig);
    std::string s((std::istreambuf_iterator<char>(f)), {});
    std::smatch m;
    if (!std::regex_search(s,m,std::regex("\\\"instalacion\\\"\\s*:\\s*\\\"([^\\\"]+)\\\""))) throw std::runtime_error("Falta 'instalacion' en config.json");
    instalacion=m[1].str();
    if (!std::regex_search(s,m,std::regex("\\\"tamanoRegistro\\\"\\s*:\\s*([0-9]+)"))) throw std::runtime_error("Falta 'tamanoRegistro' en config.json");
    tamanoRegistro=std::stoull(m[1].str());
    fs::create_directories(instalacion);
}
std::string AndreiBBDD::rutaTabla(const std::string& t,const std::string& e) const { return (fs::path(instalacion)/basededatos/(t+e)).string(); }
std::string AndreiBBDD::trimDerecha(std::string s){ while(!s.empty() && (s.back()==' '||s.back()=='\n'||s.back()=='\r'||s.back()=='\t')) s.pop_back(); return s; }
bool AndreiBBDD::creaBaseDatos(const std::string& n){ fs::path p=fs::path(instalacion)/n; if(fs::exists(p)){std::cerr<<"La base de datos ya existe\n";return false;} return fs::create_directory(p); }
bool AndreiBBDD::usaBaseDatos(const std::string& n){ fs::path p=fs::path(instalacion)/n; if(!fs::exists(p)){std::cerr<<"La base de datos no existe\n";return false;} basededatos=n; return true; }
bool AndreiBBDD::creaTabla(const std::string& n,const std::string& e){ if(basededatos.empty()){std::cerr<<"No hay base seleccionada\n";return false;} auto csv=rutaTabla(n,".csv"); if(fs::exists(csv)){std::cerr<<"La tabla ya existe\n";return false;} std::ofstream(csv,std::ios::binary); std::ofstream(rutaTabla(n,".esquema"))<<"id,activo,"<<e; std::ofstream(rutaTabla(n,".idx")); return true; }
std::vector<std::string> AndreiBBDD::obtenerEsquema(const std::string& t) const { std::ifstream f(rutaTabla(t,".esquema")); if(!f) return {}; std::string s((std::istreambuf_iterator<char>(f)),{}); return AndreiSerializador().desserializar(s); }
long long AndreiBBDD::siguienteId(const std::string& t) const { std::ifstream f(rutaTabla(t,".idx")); long long ultimo=0,id,pos; char c; while(f>>id>>c>>pos) ultimo=id; return ultimo+1; }
std::string AndreiBBDD::prepararRegistro(const std::vector<std::string>& e) const { auto s=AndreiSerializador().serializar(e); if(s.size()>tamanoRegistro-1) throw std::runtime_error("Registro demasiado grande"); s.append(tamanoRegistro-1-s.size(),' '); s.push_back('\n'); return s; }
long long AndreiBBDD::insertarDatos(const std::string& t,const std::vector<std::string>& datos){ if(basededatos.empty()||!fs::exists(rutaTabla(t,".csv"))) return -1; auto id=siguienteId(t); std::vector<std::string> e={std::to_string(id),"1"}; e.insert(e.end(),datos.begin(),datos.end()); auto reg=prepararRegistro(e); std::ofstream f(rutaTabla(t,".csv"),std::ios::binary|std::ios::app); auto pos=fs::file_size(rutaTabla(t,".csv")); f.write(reg.data(),reg.size()); std::ofstream(rutaTabla(t,".idx"),std::ios::app)<<id<<","<<pos<<"\n"; return id; }
std::int64_t AndreiBBDD::buscarPosicion(const std::string& t,long long buscado) const { std::ifstream f(rutaTabla(t,".idx")); long long id,pos; char c; while(f>>id>>c>>pos) if(id==buscado) return pos; return -1; }
std::vector<std::string> AndreiBBDD::leerRegistro(const std::string& t,long long id) const { auto pos=buscarPosicion(t,id); if(pos<0)return{}; std::ifstream f(rutaTabla(t,".csv"),std::ios::binary); f.seekg(pos); std::string b(tamanoRegistro,'\0'); f.read(b.data(),tamanoRegistro); b.resize(f.gcount()); auto e=AndreiSerializador().desserializar(trimDerecha(b)); if(e.size()<2||e[1]=="0")return{}; return e; }
std::map<std::string,std::string> AndreiBBDD::seleccionar(const std::string& t,long long id) const { auto e=leerRegistro(t,id), es=obtenerEsquema(t); std::map<std::string,std::string> r; if(e.size()!=es.size())return r; for(size_t i=0;i<es.size();++i)r[es[i]]=e[i]; return r; }
std::vector<std::map<std::string,std::string>> AndreiBBDD::listarTodo(const std::string& t) const { std::vector<std::map<std::string,std::string>> out; auto es=obtenerEsquema(t); std::ifstream f(rutaTabla(t,".csv"),std::ios::binary); while(f){std::string b(tamanoRegistro,'\0');f.read(b.data(),tamanoRegistro);if(f.gcount()==0)break;b.resize(f.gcount());auto e=AndreiSerializador().desserializar(trimDerecha(b));if(e.size()==es.size()&&e.size()>1&&e[1]=="1"){std::map<std::string,std::string> r;for(size_t i=0;i<es.size();++i)r[es[i]]=e[i];out.push_back(r);}}return out; }
std::vector<std::map<std::string,std::string>> AndreiBBDD::buscarColumna(const std::string& t,const std::string& col,const std::string& val) const { auto es=obtenerEsquema(t); auto it=std::find(es.begin(),es.end(),col); if(it==es.end())return{}; size_t p=it-es.begin(); std::vector<std::map<std::string,std::string>> out; for(auto&r:listarTodo(t)) if(r.at(es[p])==val) out.push_back(r); return out; }
bool AndreiBBDD::actualizar(const std::string& t,long long id,const std::vector<std::string>& datos){auto pos=buscarPosicion(t,id);auto es=obtenerEsquema(t);if(pos<0||leerRegistro(t,id).empty()||datos.size()!=es.size()-2)return false;std::vector<std::string>e={std::to_string(id),"1"};e.insert(e.end(),datos.begin(),datos.end());auto reg=prepararRegistro(e);std::fstream f(rutaTabla(t,".csv"),std::ios::binary|std::ios::in|std::ios::out);f.seekp(pos);f.write(reg.data(),reg.size());return bool(f);}
bool AndreiBBDD::eliminar(const std::string& t,long long id){auto pos=buscarPosicion(t,id);auto e=leerRegistro(t,id);if(pos<0||e.empty())return false;e[1]="0";auto reg=prepararRegistro(e);std::fstream f(rutaTabla(t,".csv"),std::ios::binary|std::ios::in|std::ios::out);f.seekp(pos);f.write(reg.data(),reg.size());return bool(f);}

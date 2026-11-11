#include "andreiorm_c.h"
#include "AndreiORM.h"
#include <cstdlib>
#include <cstring>
#include <exception>
#include <string>
static thread_local std::string ultimo_error;
static char* copiar(const std::string& texto){char* p=(char*)std::malloc(texto.size()+1);if(!p)throw std::bad_alloc();std::memcpy(p,texto.c_str(),texto.size()+1);return p;}
template<typename F,typename T>static T seguro(F f,T fallo){try{ultimo_error.clear();return f();}catch(const std::exception& e){ultimo_error=e.what();return fallo;}catch(...){ultimo_error="Error desconocido";return fallo;}}
extern "C" {
void* andrei_open(const char* ruta){return seguro([&]()->void*{if(!ruta)throw std::runtime_error("Ruta nula");return new AndreiORM(ruta);},(void*)nullptr);}
void andrei_close(void* orm){delete static_cast<AndreiORM*>(orm);}
int64_t andrei_guardar(void* p,const char* c,const char* j){return seguro([&]()->int64_t{return static_cast<AndreiORM*>(p)->guardar(c,nlohmann::json::parse(j));},(int64_t)-1);}
char* andrei_obtener(void* p,const char* c,int64_t id){return seguro([&]()->char*{return copiar(static_cast<AndreiORM*>(p)->obtener(c,id).dump());},(char*)nullptr);}
char* andrei_todos(void* p,const char* c){return seguro([&]()->char*{return copiar(static_cast<AndreiORM*>(p)->todos(c).dump());},(char*)nullptr);}
char* andrei_buscar(void* p,const char* c,const char* campo,const char* v){return seguro([&]()->char*{return copiar(static_cast<AndreiORM*>(p)->buscar(c,campo,nlohmann::json::parse(v)).dump());},(char*)nullptr);}
int andrei_actualizar(void* p,const char* c,int64_t id,const char* v){return seguro([&]()->int{return static_cast<AndreiORM*>(p)->actualizar(c,id,nlohmann::json::parse(v))?1:0;},-1);}
int andrei_eliminar(void* p,const char* c,int64_t id){return seguro([&]()->int{return static_cast<AndreiORM*>(p)->eliminar(c,id)?1:0;},-1);}
int64_t andrei_contar(void* p,const char* c){return seguro([&]()->int64_t{return static_cast<AndreiORM*>(p)->contar(c);},(int64_t)-1);}
int64_t andrei_importar(void* p,const char* c,const char* ruta){return seguro([&]()->int64_t{return static_cast<AndreiORM*>(p)->importar(c,ruta);},(int64_t)-1);}
int64_t andrei_exportar(void* p,const char* c,const char* ruta){return seguro([&]()->int64_t{return static_cast<AndreiORM*>(p)->exportar(c,ruta);},(int64_t)-1);}
const char* andrei_error(void){return ultimo_error.c_str();}
void andrei_free(char* p){std::free(p);}
}

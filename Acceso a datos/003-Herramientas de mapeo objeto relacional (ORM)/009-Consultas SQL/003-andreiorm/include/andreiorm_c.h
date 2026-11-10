#ifndef ANDREIORM_C_H
#define ANDREIORM_C_H
#include <stdint.h>
#ifdef __cplusplus
extern "C" {
#endif
void* andrei_open(const char* ruta);
void andrei_close(void* orm);
int64_t andrei_guardar(void* orm,const char* coleccion,const char* json_texto);
char* andrei_obtener(void* orm,const char* coleccion,int64_t id);
char* andrei_todos(void* orm,const char* coleccion);
char* andrei_buscar(void* orm,const char* coleccion,const char* campo,const char* json_valor);
int andrei_actualizar(void* orm,const char* coleccion,int64_t id,const char* json_cambios);
int andrei_eliminar(void* orm,const char* coleccion,int64_t id);
int64_t andrei_contar(void* orm,const char* coleccion);
int64_t andrei_importar(void* orm,const char* coleccion,const char* carpeta);
int64_t andrei_exportar(void* orm,const char* coleccion,const char* carpeta);
const char* andrei_error(void);
void andrei_free(char* texto);
#ifdef __cplusplus
}
#endif
#endif

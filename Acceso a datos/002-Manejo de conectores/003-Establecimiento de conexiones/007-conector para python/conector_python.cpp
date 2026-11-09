#define PY_SSIZE_T_CLEAN
#include <Python.h>
#include "AndreiBBDD.hpp"

static AndreiBBDD& baseDatos(){
    static AndreiBBDD db;
    return db;
}


// ============================================
// CREAR BASE
// ============================================

static PyObject* crear_base(
    PyObject*,
    PyObject* args
){
    const char* nombre;

    if(!PyArg_ParseTuple(args, "s", &nombre)){
        return NULL;
    }

    try{
        return PyBool_FromLong(baseDatos().creaBaseDatos(nombre));
    }
    catch(const std::exception& e){
        PyErr_SetString(
            PyExc_RuntimeError,
            e.what()
        );

        return NULL;
    }
}


// ============================================
// USAR BASE
// ============================================

static PyObject* usar_base(
    PyObject*,
    PyObject* args
){
    const char* nombre;

    if(!PyArg_ParseTuple(args, "s", &nombre)){
        return NULL;
    }

    try{
        return PyBool_FromLong(baseDatos().usaBaseDatos(nombre));
    }
    catch(const std::exception& e){
        PyErr_SetString(
            PyExc_RuntimeError,
            e.what()
        );

        return NULL;
    }
}


// ============================================
// CREAR TABLA
// ============================================

static PyObject* crear_tabla(
    PyObject*,
    PyObject* args
){
    const char* tabla;
    const char* esquema;

    if(!PyArg_ParseTuple(
        args,
        "ss",
        &tabla,
        &esquema
    )){
        return NULL;
    }

    try{
        return PyBool_FromLong(baseDatos().creaTabla(
            tabla,
            esquema
        ));
    }
    catch(const std::exception& e){

        PyErr_SetString(
            PyExc_RuntimeError,
            e.what()
        );

        return NULL;
    }
}


// ============================================
// INSERTAR
// ============================================

static PyObject* insertar(
    PyObject*,
    PyObject* args
){
    const char* tabla;
    PyObject* lista;

    if(!PyArg_ParseTuple(
        args,
        "sO",
        &tabla,
        &lista
    )){
        return NULL;
    }

    if(!PyList_Check(lista)){
        PyErr_SetString(
            PyExc_TypeError,
            "El segundo argumento debe ser una lista"
        );

        return NULL;
    }

    std::vector<std::string> datos;

    Py_ssize_t cantidad =
        PyList_Size(lista);

    for(Py_ssize_t i = 0;
        i < cantidad;
        i++){

        PyObject* elemento =
            PyList_GetItem(lista, i);

        if(!PyUnicode_Check(elemento)){
            PyErr_SetString(
                PyExc_TypeError,
                "Todos los valores deben ser strings"
            );

            return NULL;
        }

        Py_ssize_t longitud;
        const char* texto = PyUnicode_AsUTF8AndSize(elemento, &longitud);
        if(!texto){
            return NULL;
        }
        datos.push_back(std::string(texto, static_cast<std::size_t>(longitud)));
    }

    try{

        long long id =
            baseDatos().insertarDatos(
                tabla,
                datos
            );

        return PyLong_FromLongLong(id);

    }
    catch(const std::exception& e){

        PyErr_SetString(
            PyExc_RuntimeError,
            e.what()
        );

        return NULL;
    }
}


// ============================================
// DEFINICIÓN DEL MÓDULO
// ============================================

static PyMethodDef Metodos[] = {

    {
        "crear_base",
        crear_base,
        METH_VARARGS,
        "Crea una base de datos"
    },

    {
        "usar_base",
        usar_base,
        METH_VARARGS,
        "Selecciona una base de datos"
    },

    {
        "crear_tabla",
        crear_tabla,
        METH_VARARGS,
        "Crea una tabla"
    },

    {
        "insertar",
        insertar,
        METH_VARARGS,
        "Inserta un registro"
    },

    {NULL, NULL, 0, NULL}
};


static struct PyModuleDef modulo = {
    PyModuleDef_HEAD_INIT,
    "andreibbdd",
    "Conector Python para Andrei BBDD",
    -1,
    Metodos,
    NULL,
    NULL,
    NULL,
    NULL
};


PyMODINIT_FUNC
PyInit_andreibbdd(void){
    return PyModule_Create(&modulo);
}
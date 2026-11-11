#define PY_SSIZE_T_CLEAN
#include <Python.h>
#include "AndreiBBDD.hpp"
#include <memory>
#include <stdexcept>

static std::unique_ptr<AndreiBBDD> db;

static AndreiBBDD& motor() {
    if (!db) db = std::make_unique<AndreiBBDD>();
    return *db;
}

static PyObject* error_cpp(const std::exception& e) {
    PyErr_SetString(PyExc_RuntimeError, e.what());
    return nullptr;
}

static bool lista_a_vector(PyObject* lista, std::vector<std::string>& datos) {
    if (!PyList_Check(lista) && !PyTuple_Check(lista)) {
        PyErr_SetString(PyExc_TypeError, "Los datos deben ser una lista o tupla de strings");
        return false;
    }
    const Py_ssize_t n = PySequence_Size(lista);
    if (n < 0) return false;

    for (Py_ssize_t i = 0; i < n; ++i) {
        PyObject* item = PySequence_GetItem(lista, i);
        if (!item) return false;
        if (!PyUnicode_Check(item)) {
            Py_DECREF(item);
            PyErr_SetString(PyExc_TypeError, "Todos los valores deben ser strings");
            return false;
        }

        Py_ssize_t size = 0;
        const char* s = PyUnicode_AsUTF8AndSize(item, &size);
        if (!s) {
            Py_DECREF(item);
            return false;
        }
        datos.emplace_back(s, static_cast<std::size_t>(size));
        Py_DECREF(item);
    }
    return true;
}

static PyObject* mapa_a_dict(const std::map<std::string,std::string>& m) {
    PyObject* d = PyDict_New();
    if (!d) return nullptr;

    for (const auto& [k,v] : m) {
        PyObject* pv = PyUnicode_FromStringAndSize(
            v.data(),
            static_cast<Py_ssize_t>(v.size())
        );
        if (!pv) {
            Py_DECREF(d);
            return nullptr;
        }
        if (PyDict_SetItemString(d, k.c_str(), pv) < 0) {
            Py_DECREF(pv);
            Py_DECREF(d);
            return nullptr;
        }
        Py_DECREF(pv);
    }
    return d;
}

static PyObject* filas_a_lista(
    const std::vector<std::map<std::string,std::string>>& filas
) {
    PyObject* lista = PyList_New(static_cast<Py_ssize_t>(filas.size()));
    if (!lista) return nullptr;

    for (std::size_t i = 0; i < filas.size(); ++i) {
        PyObject* fila = mapa_a_dict(filas[i]);
        if (!fila) {
            Py_DECREF(lista);
            return nullptr;
        }
        PyList_SET_ITEM(lista, static_cast<Py_ssize_t>(i), fila);
    }
    return lista;
}

static PyObject* crear_base(PyObject*, PyObject* args) {
    const char* n; if (!PyArg_ParseTuple(args,"s",&n)) return nullptr;
    try { return PyBool_FromLong(motor().creaBaseDatos(n)); } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* usar_base(PyObject*, PyObject* args) {
    const char* n; if (!PyArg_ParseTuple(args,"s",&n)) return nullptr;
    try { return PyBool_FromLong(motor().usaBaseDatos(n)); } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* crear_tabla(PyObject*, PyObject* args) {
    const char *t,*e; if (!PyArg_ParseTuple(args,"ss",&t,&e)) return nullptr;
    try { return PyBool_FromLong(motor().creaTabla(t,e)); } catch(const std::exception& ex){ return error_cpp(ex); }
}
static PyObject* insertar(PyObject*, PyObject* args) {
    const char* t; PyObject* l; if (!PyArg_ParseTuple(args,"sO",&t,&l)) return nullptr;
    try {
        std::vector<std::string> d;
        if (!lista_a_vector(l, d)) return nullptr;
        return PyLong_FromLongLong(motor().insertarDatos(t, d));
    } catch(const std::exception& e) { return error_cpp(e); }
}
static PyObject* seleccionar(PyObject*, PyObject* args) {
    const char* t; long long id; if(!PyArg_ParseTuple(args,"sL",&t,&id)) return nullptr;
    try { return mapa_a_dict(motor().seleccionar(t,id)); } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* listar(PyObject*, PyObject* args) {
    const char* t; if (!PyArg_ParseTuple(args,"s",&t)) return nullptr;
    try {
        return filas_a_lista(motor().listarTodo(t));
    } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* buscar(PyObject*, PyObject* args) {
    const char *t,*c,*v; if(!PyArg_ParseTuple(args,"sss",&t,&c,&v)) return nullptr;
    try {
        return filas_a_lista(motor().buscarColumna(t,c,v));
    } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* actualizar(PyObject*, PyObject* args) {
    const char* t; long long id; PyObject* l; if(!PyArg_ParseTuple(args,"sLO",&t,&id,&l)) return nullptr;
    try {
        std::vector<std::string> d;
        if (!lista_a_vector(l, d)) return nullptr;
        return PyBool_FromLong(motor().actualizar(t, id, d));
    } catch(const std::exception& e) { return error_cpp(e); }
}
static PyObject* eliminar(PyObject*, PyObject* args) {
    const char* t; long long id; if(!PyArg_ParseTuple(args,"sL",&t,&id)) return nullptr;
    try { return PyBool_FromLong(motor().eliminar(t,id)); } catch(const std::exception& e){ return error_cpp(e); }
}
static PyObject* configuracion(PyObject*, PyObject*) {
    try {
        auto& m=motor();
        PyObject* d=PyDict_New();
        if (!d) return nullptr;

        PyObject* p=PyUnicode_FromString(m.instalacion.c_str());
        if (!p || PyDict_SetItemString(d, "instalacion", p) < 0) {
            Py_XDECREF(p);
            Py_DECREF(d);
            return nullptr;
        }
        Py_DECREF(p);

        p=PyLong_FromSize_t(m.tamanoRegistro);
        if (!p || PyDict_SetItemString(d, "tamanoRegistro", p) < 0) {
            Py_XDECREF(p);
            Py_DECREF(d);
            return nullptr;
        }
        Py_DECREF(p);
        return d;
    } catch(const std::exception& e){ return error_cpp(e); }
}

static PyMethodDef Metodos[] = {
    {"crear_base",crear_base,METH_VARARGS,"Crea una base de datos"},
    {"usar_base",usar_base,METH_VARARGS,"Selecciona una base de datos"},
    {"crear_tabla",crear_tabla,METH_VARARGS,"Crea una tabla"},
    {"insertar",insertar,METH_VARARGS,"Inserta un registro"},
    {"seleccionar",seleccionar,METH_VARARGS,"Selecciona un registro por id"},
    {"listar",listar,METH_VARARGS,"Lista registros activos"},
    {"buscar",buscar,METH_VARARGS,"Busca por columna y valor"},
    {"actualizar",actualizar,METH_VARARGS,"Actualiza un registro"},
    {"eliminar",eliminar,METH_VARARGS,"Borrado logico"},
    {"configuracion",configuracion,METH_NOARGS,"Devuelve la configuracion activa"},
    {nullptr,nullptr,0,nullptr}
};
static PyModuleDef modulo={PyModuleDef_HEAD_INIT,"andreibbdd","Conector nativo Python para Andrei BBDD",-1,Metodos};
PyMODINIT_FUNC PyInit_andreibbdd(void){ return PyModule_Create(&modulo); }

#ifndef PROCESO_HPP
#define PROCESO_HPP

#include "informe.hpp"

class Proceso
{
public:
    /**
     * Crea un proceso hijo y espera a que termine.
     * Linux: fork() + wait().
     * Windows: CreateProcess() relanzando el propio ejecutable
     * con el argumento "--hijo" + WaitForSingleObject().
     */
    static ResultadoProceso ejecutar();

    /**
     * Tarea que realiza el proceso hijo.
     */
    static void tarea_hijo();
};

#endif

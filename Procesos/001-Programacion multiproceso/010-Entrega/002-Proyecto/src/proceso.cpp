#include "../include/proceso.hpp"
#include "../include/registro.hpp"

#include <chrono>
#include <string>
#include <thread>

#ifdef _WIN32
#ifndef NOMINMAX
#define NOMINMAX
#endif
#include <windows.h>
#else
#include <sys/types.h>
#include <sys/wait.h>
#include <unistd.h>
#endif

namespace
{
    long long milisegundos_desde(
        std::chrono::steady_clock::time_point inicio
    )
    {
        return std::chrono::duration_cast<std::chrono::milliseconds>(
            std::chrono::steady_clock::now() - inicio
        ).count();
    }
}

void Proceso::tarea_hijo()
{
    Registro::info(
        "Proceso hijo iniciado."
    );

    std::this_thread::sleep_for(
        std::chrono::seconds(3)
    );

    Registro::info(
        "Proceso hijo finalizado."
    );
}

#ifdef _WIN32

ResultadoProceso Proceso::ejecutar()
{
    ResultadoProceso resultado;
    resultado.pid_padre = static_cast<long>(GetCurrentProcessId());

    char ruta[MAX_PATH];

    DWORD longitud = GetModuleFileNameA(
        nullptr,
        ruta,
        MAX_PATH
    );

    if (longitud == 0 || longitud == MAX_PATH)
    {
        Registro::error(
            "No se pudo obtener la ruta del ejecutable."
        );
        return resultado;
    }

    std::string linea_comandos =
        "\"" + std::string(ruta) + "\" --hijo";

    STARTUPINFOA info_inicio;
    PROCESS_INFORMATION info_proceso;

    ZeroMemory(&info_inicio, sizeof(info_inicio));
    info_inicio.cb = sizeof(info_inicio);
    ZeroMemory(&info_proceso, sizeof(info_proceso));

    auto inicio = std::chrono::steady_clock::now();

    if (!CreateProcessA(
            nullptr,
            &linea_comandos[0],
            nullptr,
            nullptr,
            FALSE,
            0,
            nullptr,
            nullptr,
            &info_inicio,
            &info_proceso))
    {
        Registro::error(
            "Error al crear el proceso hijo."
        );
        return resultado;
    }

    resultado.pid_hijo = static_cast<long>(info_proceso.dwProcessId);

    Registro::info(
        "Proceso padre esperando al hijo (PID "
        + std::to_string(resultado.pid_hijo) + ")."
    );

    WaitForSingleObject(
        info_proceso.hProcess,
        INFINITE
    );

    DWORD codigo = 1;
    GetExitCodeProcess(info_proceso.hProcess, &codigo);

    CloseHandle(info_proceso.hProcess);
    CloseHandle(info_proceso.hThread);

    resultado.codigo_salida = static_cast<int>(codigo);
    resultado.correcto = (codigo == 0);
    resultado.duracion_ms = milisegundos_desde(inicio);

    Registro::info(
        "Proceso hijo completado."
    );

    return resultado;
}

#else

ResultadoProceso Proceso::ejecutar()
{
    ResultadoProceso resultado;
    resultado.pid_padre = static_cast<long>(getpid());

    auto inicio = std::chrono::steady_clock::now();

    pid_t pid = fork();

    if (pid < 0)
    {
        Registro::error(
            "Error al crear el proceso hijo."
        );
    }
    else if (pid == 0)
    {
        tarea_hijo();

        _exit(0);
    }
    else
    {
        resultado.pid_hijo = static_cast<long>(pid);

        Registro::info(
            "Proceso padre esperando al hijo (PID "
            + std::to_string(resultado.pid_hijo) + ")."
        );

        int estado = 0;
        waitpid(pid, &estado, 0);

        if (WIFEXITED(estado))
        {
            resultado.codigo_salida = WEXITSTATUS(estado);
        }

        resultado.correcto = (resultado.codigo_salida == 0);
        resultado.duracion_ms = milisegundos_desde(inicio);

        Registro::info(
            "Proceso hijo completado."
        );
    }

    return resultado;
}

#endif

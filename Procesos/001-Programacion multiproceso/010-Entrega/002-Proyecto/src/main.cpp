#include "../include/principal.hpp"
#include "../include/proceso.hpp"

#include <string>

int main(int argc, char* argv[])
{
    // En Windows el proceso hijo se crea relanzando
    // este mismo ejecutable con el argumento "--hijo".
    if (argc > 1 && std::string(argv[1]) == "--hijo")
    {
        Proceso::tarea_hijo();
        return 0;
    }

    iniciar_aplicacion();
    return 0;
}

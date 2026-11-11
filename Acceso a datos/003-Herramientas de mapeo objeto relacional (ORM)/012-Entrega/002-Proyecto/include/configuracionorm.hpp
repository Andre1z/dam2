#pragma once

#include "sqlite_orm/sqlite_orm.h"

#include "cliente.hpp"
#include "empresa.hpp"
#include "contacto.hpp"
#include "oportunidad.hpp"
#include "actividad.hpp"
#include "usuario.hpp"
#include "tarea.hpp"

inline auto crear_almacenamiento(const std::string& ruta_bd)
{
    using namespace sqlite_orm;

    return make_storage(
        ruta_bd,

        make_table(
            "clientes",
            make_column(
                "id",
                &cliente::id,
                primary_key().autoincrement()
            ),
            make_column(
                "nombre",
                &cliente::nombre,
                not_null()
            ),
            make_column(
                "email",
                &cliente::email,
                unique(),
                not_null()
            ),
            make_column(
                "telefono",
                &cliente::telefono
            ),
            make_column(
                "direccion",
                &cliente::direccion
            )
        ),

        make_table(
            "empresas",
            make_column(
                "id",
                &empresa::id,
                primary_key().autoincrement()
            ),
            make_column(
                "nombre",
                &empresa::nombre,
                not_null()
            ),
            make_column(
                "sector",
                &empresa::sector
            ),
            make_column(
                "telefono",
                &empresa::telefono
            ),
            make_column(
                "email",
                &empresa::email
            ),
            make_column(
                "direccion",
                &empresa::direccion
            )
        ),

        make_table(
            "contactos",
            make_column(
                "id",
                &contacto::id,
                primary_key().autoincrement()
            ),
            make_column(
                "empresaid",
                &contacto::empresaid,
                not_null()
            ),
            make_column(
                "nombre",
                &contacto::nombre,
                not_null()
            ),
            make_column(
                "cargo",
                &contacto::cargo
            ),
            make_column(
                "email",
                &contacto::email
            ),
            make_column(
                "telefono",
                &contacto::telefono
            ),
            foreign_key(
                &contacto::empresaid
            ).references(
                &empresa::id
            )
        ),

        make_table(
            "oportunidades",
            make_column(
                "id",
                &oportunidad::id,
                primary_key().autoincrement()
            ),
            make_column(
                "clienteid",
                &oportunidad::clienteid,
                not_null()
            ),
            make_column(
                "descripcion",
                &oportunidad::descripcion,
                not_null()
            ),
            make_column(
                "valor",
                &oportunidad::valor,
                not_null()
            ),
            make_column(
                "estado",
                &oportunidad::estado,
                not_null()
            ),
            foreign_key(
                &oportunidad::clienteid
            ).references(
                &cliente::id
            )
        ),

        make_table(
            "actividades",
            make_column(
                "id",
                &actividad::id,
                primary_key().autoincrement()
            ),
            make_column(
                "clienteid",
                &actividad::clienteid,
                not_null()
            ),
            make_column(
                "fecha",
                &actividad::fecha,
                not_null()
            ),
            make_column(
                "tipo",
                &actividad::tipo,
                not_null()
            ),
            make_column(
                "descripcion",
                &actividad::descripcion,
                not_null()
            ),
            foreign_key(
                &actividad::clienteid
            ).references(
                &cliente::id
            )
        ),

        make_table(
            "usuarios",
            make_column(
                "id",
                &usuario::id,
                primary_key().autoincrement()
            ),
            make_column(
                "nombre",
                &usuario::nombre,
                not_null()
            ),
            make_column(
                "email",
                &usuario::email,
                unique()
            ),
            make_column(
                "usuario_login",
                &usuario::usuario_login,
                unique()
            ),
            make_column(
                "contrasena",
                &usuario::contrasena,
                not_null()
            ),
            make_column(
                "rol",
                &usuario::rol,
                not_null()
            )
        ),

        make_table(
            "tareas",
            make_column(
                "id",
                &tarea::id,
                primary_key().autoincrement()
            ),
            make_column(
                "usuarioid",
                &tarea::usuarioid,
                not_null()
            ),
            make_column(
                "clienteid",
                &tarea::clienteid,
                not_null()
            ),
            make_column(
                "titulo",
                &tarea::titulo,
                not_null()
            ),
            make_column(
                "descripcion",
                &tarea::descripcion
            ),
            make_column(
                "fecha_limite",
                &tarea::fecha_limite
            ),
            make_column(
                "estado",
                &tarea::estado,
                not_null()
            ),
            foreign_key(
                &tarea::usuarioid
            ).references(
                &usuario::id
            ),
            foreign_key(
                &tarea::clienteid
            ).references(
                &cliente::id
            )
        )
    );
}

inline auto& obtener_almacenamiento()
{
    static auto almacenamiento = crear_almacenamiento("database/crm.sqlite");
    static const bool esquema_sincronizado =
        (almacenamiento.sync_schema(), true);

    (void)esquema_sincronizado;
    return almacenamiento;
}

const Componentes = (() => {

    async function cargarPlantilla(nombre) {

        const respuesta = await fetch(
            `templates/${nombre}.html?t=${Date.now()}`,
            {
                cache: "no-store"
            }
        );

        if (!respuesta.ok) {
            throw new Error(
                `No existe templates/${nombre}.html`
            );
        }

        return await respuesta.text();
    }

    function escapar(valor) {

        return String(valor ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function atributos(elemento) {

        const ignorar = [
            "label",
            "placeholder",
            "columnas",
            "class",
            "type"
        ];

        return [...elemento.attributes]
            .filter(
                atributo =>
                    !ignorar.includes(
                        atributo.name
                    )
            )
            .map(
                atributo =>
                    `${atributo.name}="${escapar(
                        atributo.value
                    )}"`
            )
            .join(" ");
    }

    async function transformar(nodo) {

        for (const hijo of [...nodo.children]) {
            await transformar(hijo);
        }

        if (
            !nodo.localName.startsWith(
                "ui-"
            )
        ) {
            return;
        }

        const nombre =
            nodo.localName.substring(3);

        let plantilla =
            await cargarPlantilla(nombre);

        const columnas =
            (
                nodo.getAttribute(
                    "columnas"
                ) || ""
            )
                .split(",")
                .filter(Boolean);

        const variables = {

            contenido:
                nodo.innerHTML,

            attrs:
                atributos(nodo),

            class:
                escapar(
                    nodo.getAttribute(
                        "class"
                    ) || ""
                ),

            label:
                escapar(
                    nodo.getAttribute(
                        "label"
                    ) || ""
                ),

            placeholder:
                escapar(
                    nodo.getAttribute(
                        "placeholder"
                    ) || ""
                ),

            type:
                escapar(
                    nodo.getAttribute(
                        "type"
                    ) || "text"
                ),

            cabeceras:
                columnas
                    .map(
                        columna =>
                            `<th>${escapar(
                                columna.trim()
                            )}</th>`
                    )
                    .join("")
        };

        plantilla =
            plantilla.replace(
                /{{(\w+)}}/g,
                (_, clave) =>
                    variables[clave] ?? ""
            );

        const fragmento =
            document
                .createRange()
                .createContextualFragment(
                    plantilla
                );

        nodo.replaceWith(
            fragmento
        );
    }

    async function renderizar(
        raiz
    ) {

        for (
            const hijo of [...raiz.children]
        ) {
            await transformar(hijo);
        }
    }

    return {
        renderizar
    };

})();
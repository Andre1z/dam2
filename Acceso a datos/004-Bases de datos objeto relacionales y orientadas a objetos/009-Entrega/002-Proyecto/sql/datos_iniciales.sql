INSERT INTO autores
(
    nombre,
    nacionalidad
)
VALUES
(
    'Miguel de Cervantes',
    'España'
);

INSERT INTO autores
(
    nombre,
    nacionalidad
)
VALUES
(
    'Jules Verne',
    'Francia'
);

INSERT INTO categorias
(
    nombre
)
VALUES
(
    'Novela'
);

INSERT INTO categorias
(
    nombre
)
VALUES
(
    'Ciencia Ficcion'
);

INSERT INTO libros
(
    titulo,
    anio_publicacion,
    numero_paginas,
    autor_id,
    categoria_id
)
VALUES
(
    'Don Quijote de la Mancha',
    1605,
    863,
    1,
    1
);

INSERT INTO libros
(
    titulo,
    anio_publicacion,
    numero_paginas,
    autor_id,
    categoria_id
)
VALUES
(
    'Viaje al centro de la Tierra',
    1864,
    350,
    2,
    2
);
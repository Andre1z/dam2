CREATE TABLE clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    telefono TEXT,
    direccion TEXT
);

CREATE TABLE empresas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    sector TEXT,
    telefono TEXT,
    email TEXT,
    direccion TEXT
);

CREATE TABLE contactos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    empresaid INTEGER NOT NULL,
    nombre TEXT NOT NULL,
    cargo TEXT,
    email TEXT,
    telefono TEXT,
    FOREIGN KEY (empresaid)
        REFERENCES empresas(id)
);

CREATE TABLE oportunidades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clienteid INTEGER NOT NULL,
    descripcion TEXT NOT NULL,
    valor REAL NOT NULL,
    estado TEXT NOT NULL,
    FOREIGN KEY (clienteid)
        REFERENCES clientes(id)
);

CREATE TABLE actividades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clienteid INTEGER NOT NULL,
    fecha TEXT NOT NULL,
    tipo TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    FOREIGN KEY (clienteid)
        REFERENCES clientes(id)
);

CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE,
    usuario_login TEXT UNIQUE,
    contrasena TEXT NOT NULL,
    rol TEXT NOT NULL
);

CREATE TABLE tareas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuarioid INTEGER NOT NULL,
    clienteid INTEGER NOT NULL,
    titulo TEXT NOT NULL,
    descripcion TEXT,
    fecha_limite TEXT,
    estado TEXT NOT NULL,
    FOREIGN KEY (usuarioid)
        REFERENCES usuarios(id),
    FOREIGN KEY (clienteid)
        REFERENCES clientes(id)
);
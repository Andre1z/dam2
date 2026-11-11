-- CLIENTES

INSERT INTO clientes
(nombre,email,telefono,direccion)
VALUES
('Tecnologias Valencia','contacto@tecnovalencia.com','961111111','Valencia');

INSERT INTO clientes
(nombre,email,telefono,direccion)
VALUES
('Informatica Levante','info@levante.es','962222222','Castellon');

INSERT INTO clientes
(nombre,email,telefono,direccion)
VALUES
('Servicios Mediterraneo','ventas@mediterraneo.es','963333333','Alicante');



-- EMPRESAS

INSERT INTO empresas
(nombre,sector,telefono,email,direccion)
VALUES
(
    'Microsoft Iberica',
    'Tecnologia',
    '917000000',
    'contacto@microsoft.es',
    'Madrid'
);

INSERT INTO empresas
(nombre,sector,telefono,email,direccion)
VALUES
(
    'Oracle Espana',
    'Tecnologia',
    '914000000',
    'info@oracle.es',
    'Madrid'
);



-- CONTACTOS

INSERT INTO contactos
(empresaid,nombre,cargo,email,telefono)
VALUES
(
    1,
    'Juan Perez',
    'Director Comercial',
    'juan@microsoft.es',
    '600111111'
);

INSERT INTO contactos
(empresaid,nombre,cargo,email,telefono)
VALUES
(
    2,
    'Ana Garcia',
    'Account Manager',
    'ana@oracle.es',
    '600222222'
);



-- USUARIOS

INSERT INTO usuarios
(nombre,email,usuario_login,contrasena,rol)
VALUES
(
    'Administrador',
    'admin@crm.com',
    'admin',
    'admin123',
    'administrador'
);

INSERT INTO usuarios
(nombre,email,usuario_login,contrasena,rol)
VALUES
(
    'Comercial',
    'comercial@crm.com',
    'comercial',
    'comercial123',
    'vendedor'
);



-- OPORTUNIDADES

INSERT INTO oportunidades
(clienteid,descripcion,valor,estado)
VALUES
(
    1,
    'Implantacion CRM',
    7500.00,
    'abierta'
);

INSERT INTO oportunidades
(clienteid,descripcion,valor,estado)
VALUES
(
    2,
    'Migracion de servidores',
    12000.00,
    'ganada'
);

INSERT INTO oportunidades
(clienteid,descripcion,valor,estado)
VALUES
(
    3,
    'Consultoria tecnica',
    3500.00,
    'perdida'
);



-- ACTIVIDADES

INSERT INTO actividades
(clienteid,fecha,tipo,descripcion)
VALUES
(
    1,
    '2026-11-01',
    'llamada',
    'Primera toma de contacto'
);

INSERT INTO actividades
(clienteid,fecha,tipo,descripcion)
VALUES
(
    2,
    '2026-11-02',
    'reunion',
    'Presentacion del producto'
);

INSERT INTO actividades
(clienteid,fecha,tipo,descripcion)
VALUES
(
    3,
    '2026-11-03',
    'correo',
    'Envio de propuesta comercial'
);



-- TAREAS

INSERT INTO tareas
(usuarioid,clienteid,titulo,descripcion,fecha_limite,estado)
VALUES
(
    1,
    1,
    'Preparar presupuesto',
    'Crear propuesta economica',
    '2026-12-01',
    'pendiente'
);

INSERT INTO tareas
(usuarioid,clienteid,titulo,descripcion,fecha_limite,estado)
VALUES
(
    2,
    2,
    'Llamar al cliente',
    'Seguimiento de la oportunidad',
    '2026-12-05',
    'en progreso'
);
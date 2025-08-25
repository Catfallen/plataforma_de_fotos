drop table if exists clientes;
create table clientes(
        id serial primary key,
        nome varchar,
        email varchar unique not null,
        celular varchar
);


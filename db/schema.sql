create database b09lr7qjdqxfnu42;
use b09lr7qjdqxfnu42;

create table burgers (
id int auto_increment not null,
burger_name varchar (255) not null,
devoured BOOLEAN default false,
primary key (id)
);
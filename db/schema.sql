create database burgers_db;
use burgers_db;

create table burgers (
id int auto_increment not null,
burger_name varchar (255) not null,
devoured BOOLEAN default false,
primary key (id)
);
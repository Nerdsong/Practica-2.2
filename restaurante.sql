DROP DATABASE IF EXISTS restaurante;

CREATE DATABASE restaurante;

USE restaurante;

CREATE TABLE platos(
    id_plato INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    precio FLOAT NOT NULL,
    con_oferta TINYINT NOT NULL default FALSE,
    PRIMARY KEY(id_plato)
);

INSERT INTO platos (nombre, precio, con_oferta) 
VALUES ("mila con papas", 1500.0, FALSE);

INSERT INTO platos (nombre, precio, con_oferta) 
VALUES ("pizza", 900.0, TRUE);

INSERT INTO platos (nombre, precio, con_oferta) 
VALUES ("sushi", 1300.0, FALSE);


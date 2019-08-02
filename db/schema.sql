DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(150) not null,
	chomped BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
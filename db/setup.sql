DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT FALSE,
	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO burgers (burger_name) VALUES 
('Bacon Cheeseburger'),
('Southwest Chili Burger'),
('Breakfast Burger'),
('Swiss and Mushroom Burger'),
('Triple Cheddar Burger');
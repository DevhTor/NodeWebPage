CREATE DATABASE database_links;

USE database_links;

CREATE TABLE users(
  id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(60) NOT NULL,
  fullname VARCHAR(100) NOT NULL
);
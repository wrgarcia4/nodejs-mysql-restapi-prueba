create database IF NOT EXISTS companydb;

SHOW DATABASES;
use companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee (name,salary) VALUES
    ('John',1000),
    ('Mike',1500),
    ('David',1200),
    ('Emma',1800),
    ('Sophia',1600);
    ('Sarah',2000);

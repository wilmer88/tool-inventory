drop database if exists t5rng6ofq8x2hgxg;
create database t5rng6ofq8x2hgxg;
USE t5rng6ofq8x2hgxg;
SELECT * FROM Items;
SELECT * FROM Users;
SELECT * FROM DepartmentCrew;

INSERT INTO Items
VALUES (UUID(),"torque wrench","3",now(),now() );

INSERT INTO Items
VALUES (UUID(),"nosile", "150",now(),now() );
INSERT INTO DepartmentCrew
VALUES (UUID(),"Welding","Montana","Miklo","Welding",now(),now() );




DELETE FROM tools WHERE "id" = "1";
INSERT INTO tools
VALUES (UUID(),"torque drill", "assembly",now(),now() );

DROP DATABASE IF EXISTS wilmer_database;
CREATE DATABASE wilmer_database;
USE wilmer_database;
SELECT * FROM Items;
SELECT * FROM Departments;
ALTER TABLE Items
DROP COLUMN DapartmentName;
DROP TABLE items;



DROP DATABASE IF EXISTS t5rng6ofq8x2hgxg;
CREATE DATABASE t5rng6ofq8x2hgxg;
USE t5rng6ofq8x2hgxg;
SELECT * FROM Items;
SELECT * FROM Departments;
ALTER TABLE Items
DROP COLUMN DapartmentName;
DROP TABLE table_name;
 "development": {
    "username": "azl0lhdmpi1v78e5",
    "password": "jhuzdzpo27pk2jfj",
    "database": "t5rng6ofq8x2hgxg",
    "host": "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"}
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



DROP DATABASE IF EXISTS l6ebmp3z903muv0s;
CREATE DATABASE l6ebmp3z903muv0s;
USE t5rng6ofq8x2hgxg;
SELECT * FROM Items;
SELECT * FROM Departments;
ALTER TABLE Items
DROP DepartmentName;
DROP TABLE table_name;
  "development": {
    "host": "u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "username": "ipg6wljvcepzicls",
    "password": "ysyfx253jc7xxnum",
    "port": 3306,
    "database": "l6ebmp3z903muv0s",
    "dialect": "mysql"
  },

    
  "development": {
    "username": "root",
    "password": "morter706",
    "database": "wilmer_database",
    "host": "localhost",
    "dialect": "mysql"
  },
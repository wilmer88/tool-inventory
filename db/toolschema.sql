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
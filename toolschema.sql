drop database if exists nmrnlexiy1pqivgu;
create database nmrnlexiy1pqivgu;
USE nmrnlexiy1pqivgu;
SELECT * FROM items;

INSERT INTO Items
VALUES (UUID(),"torque wrench","3",now(),now() );

INSERT INTO Items
VALUES (UUID(),"nosile", "150",now(),now() );




DELETE FROM tools WHERE "id" = "1";
INSERT INTO tools
VALUES (UUID(),"torque drill", "assembly",now(),now() );
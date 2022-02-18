drop database if exists nmrnlexiy1pqivgu;
create database nmrnlexiy1pqivgu;
USE nmrnlexiy1pqivgu;
SELECT * FROM tools;
INSERT INTO tools
VALUES (UUID(),"torque wranch","torque wranch", "ben", "white 1996 2500", "toolbox",now(),now() );
INSERT INTO tools
VALUES (UUID(),"wrench", "welding",now(),now() );
DELETE FROM tools WHERE "id" = "1";
INSERT INTO tools
VALUES (UUID(),"torque drill", "assembly",now(),now() );
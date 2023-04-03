USE io3jgDudc93sepze;
SELECT * FROM tools;
INSERT INTO tools
VALUES (1,"skill saw","skill saw", "joe", "gray 2016 dodge", "toolbox",now(),now() );
INSERT INTO tools
VALUES (now(), UUID(),"impact drill","welding",now() );


CREATE TABLE user (
  personName timestamp  NOT NULL,
id INTEGER NOT NULL,
tool_name VARCHAR(50),
department VARCHAR(50),
updated_at timestamp  NOT NULL
);
CREATE DATABASE IF NOT EXISTS io3jgDudc93sepze;
SHOW TABLES 

CREATE DATABASE IF NOT EXISTS wilmer_database;
SHOW TABLES 
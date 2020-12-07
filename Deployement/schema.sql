DROP DATABASE IF EXISTS forum;
CREATE DATABASE forum;
USE forum;

CREATE TABLE students ( 
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(50) ,
    lastname varchar(50),
    email varchar(70) , 
    password varchar(200) ,  
    resume varchar(1300) , 
    imageUrl varchar(200) ,  
    class varchar(80) , 
    phoneNumber INT(10) 
);


CREATE TABLE companies ( 
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(50) ,
    email varchar(70) , 
    password varchar(200) ,   
    imageUrl varchar(200) ,  
    address varchar(80) ,
    city varchar(20),
    zip varchar(10), 
    phoneNumber INT(10), 
    description varchar(1000),
    requirements varchar(1000)
);




CREATE TABLE rooms (
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    time varchar(20) , 
    companyBooked varchar(30),
    roomUrl varchar(200)
); 
-- minbooked
CREATE TABLE minbooked(
    id int(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    valeur varchar(20),
    affichage int(2) DEFAULT 5,
    company varchar(30)
);



CREATE TABLE studentsBooked(
id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
studentName varchar(50) ,
time varchar(40) ,
companyBooked varchar(30),companyImg varchar(200),
roomid int(4),
roomUrl varchar(200),
resume varchar(5000)
);

-- CREATE TABLE links(
-- id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- link varchar(200) , 
-- companyName varchar(50), 
-- time varchar(50) 
-- );

CREATE TABLE times (
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    companyBooked int(4)  DEFAULT 5 ,
    time varchar(20) 
); 

CREATE TABLE bookingTimes(
 id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
 time varchar(20)
);
INSERT INTO bookingTimes (time) values ("08:00 => 09:00");
INSERT INTO bookingTimes (time) values ("09:00 => 10:00");
INSERT INTO bookingTimes (time) values ("10:00 => 11:00");
INSERT INTO bookingTimes (time) values ("11:00 => 12:00");
INSERT INTO bookingTimes (time) values ("12:00 => 13:00");
INSERT INTO bookingTimes (time) values ("13:00 => 14:00");
INSERT INTO bookingTimes (time) values ("14:00 => 15:00");
INSERT INTO bookingTimes (time) values ("15:00 => 16:00");
INSERT INTO bookingTimes (time) values ("16:00 => 17:00");
INSERT INTO bookingTimes (time) values ("17:00 => 18:00");
INSERT INTO bookingTimes (time) values ("18:00 => 19:00");

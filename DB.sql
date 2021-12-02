DROP TABLE IF EXISTS Profiles;
DROP TABLE IF EXISTS Candidates;
DROP TABLE IF EXISTS Jobs;
DROP TABLE IF EXISTS Event;


CREATE TABLE Profiles (
username VARCHAR(15) NOT NULL PRIMARY KEY,
password VARCHAR(15) NOT NULL,
fullname VARCHAR(30) NOT NULL,
token VARCHAR(250) NOT NULL,
status_vote BOOLEAN NOT NULL,
candidate_id INT(10),
job_id INT(10) NOT NULL,
gender VARCHAR(6) NOT NULL,
last_modified BIGINT(50) NOT NULL,
time_stamp BIGINT(50) NOT NULL);

CREATE TABLE Candidates (
candidate_id INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
chairman_name VARCHAR(30) NOT NULL,
chairman_image VARCHAR(50) NOT NULL,
vice_chairman_name VARCHAR(30) NOT NULL,
vice_chairman_image VARCHAR(50) NOT NULL,
candidate_number INT(2) NOT NULL);

CREATE TABLE Jobs (
job_id INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
job_name VARCHAR(30) NOT NULL);

CREATE TABLE Event (
event_start_at BIGINT(50) NOT NULL,
event_finish_at BIGINT(50) NOT NULL,
event_title VARCHAR(250) NOT NULL,
event_logo VARCHAR(100) NOT NULL,
passcode INT(8) NOT NULL DEFAULT 00000000);

ALTER TABLE Profiles ADD CONSTRAINT Profiles_candidate_id_Candidates_candidate_id FOREIGN KEY (candidate_id) REFERENCES Candidates(candidate_id);
ALTER TABLE Profiles ADD CONSTRAINT Profiles_job_id_Jobs_job_id FOREIGN KEY (job_id) REFERENCES Jobs(job_id);

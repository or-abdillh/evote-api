
-- MariaDB dump 10.19  Distrib 10.6.4-MariaDB, for Android (aarch64)
--
-- Host: localhost    Database: EvoteDB
-- ------------------------------------------------------
-- Server version	10.6.4-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Accounts`
--

DROP TABLE IF EXISTS `Accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Accounts` (
  `username` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `fullname` varchar(30) NOT NULL,
  `candidate_id` int(10) DEFAULT NULL,
  `job_id` int(10) NOT NULL,
  `status_vote` tinyint(1) NOT NULL,
  `last_modified` bigint(50) NOT NULL,
  `create_at` bigint(50) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `time_stamp` bigint(50) DEFAULT NULL,
  `token` varchar(250) NOT NULL,
  PRIMARY KEY (`username`),
  KEY `Profiles_job_id_Jobs_job_id` (`job_id`),
  KEY `Profiles_candidate_id_Candidates_candidate_id` (`candidate_id`),
  CONSTRAINT `Profiles_candidate_id_Candidates_candidate_id` FOREIGN KEY (`candidate_id`) REFERENCES `Candidates` (`candidate_id`),
  CONSTRAINT `Profiles_job_id_Jobs_job_id` FOREIGN KEY (`job_id`) REFERENCES `Jobs` (`job_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Accounts`
--

LOCK TABLES `Accounts` WRITE;
/*!40000 ALTER TABLE `Accounts` DISABLE KEYS */;
INSERT INTO `Accounts` VALUES ('atiya','atiya','Atiya',2,1,1,1735272826,1672537287382,'female',1637766889270,'7pzc6fiu1359ke09ygnzepi8l0guumjkl20oqlsdj8kscrnqf1e18y3sjfjm3e0yt2v7dz4043tzaeaze58tmr8w7zldjweuj1tdj4ug9iqq16tlowqqh4yp6bz9ga5eikgdih61tq5xqsjv24hbk8m1oq8xo527sys246i13y1qv290ylarb89hl9t28pdijbd0xbqqgp1xiewlxie1rpcufmnyv38lbgfuvltv4bj6h75ykp69gwsogq'),('sandhika','sandhika','Sandhika',2,2,1,1735272826,1672537287382,'male',1637767272625,'hj2cq290wipndkmvqb17xp4ozyyhkleass2z87630ffmwy6m5qjwdplvtxdp63eynrqz1r70byjs5am8v6cvf9qy5yeb5ejlqh7njcp5irtscqwsy6o3scvxhsxoc88giz6gihn42br5jyiyilppr6pxq0eibxxyvt5d3cc3axipqkan296ax9mj7npo0dujphsrqhq00mzlnucm5llqrlp1mkyqvzhqgup21hh1ta91hy6k38voqj2vpu');
/*!40000 ALTER TABLE `Accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Candidates`
--

DROP TABLE IF EXISTS `Candidates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Candidates` (
  `candidate_id` int(10) NOT NULL AUTO_INCREMENT,
  `candidate_number` int(2) NOT NULL,
  `chairman_name` varchar(30) NOT NULL,
  `chairman_image` varchar(50) NOT NULL,
  `vice_chairman_name` varchar(30) NOT NULL,
  `vice_chairman_image` varchar(50) NOT NULL,
  `last_modified` bigint(50) NOT NULL,
  `create_at` bigint(50) NOT NULL,
  PRIMARY KEY (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Candidates`
--

LOCK TABLES `Candidates` WRITE;
/*!40000 ALTER TABLE `Candidates` DISABLE KEYS */;
INSERT INTO `Candidates` VALUES (1,1,'Fulan bin Fulan','/public/img-34343.png','Lana bin Lana','/public/img-4343.png',1553127353,672372353),(2,2,'Fulan binti Fulan','/public/img-34343.png','Lana binti Lana','/public/img-4343.png',1553127353,672372353),(3,1,'Fulan bin Fulan','/profle.jpg','Fulanah bin Fulanah','/profile.jpg',24242123134,1414141443);
/*!40000 ALTER TABLE `Candidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Event`
--

DROP TABLE IF EXISTS `Event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Event` (
  `event_title` varchar(250) DEFAULT NULL,
  `event_logo` varchar(50) NOT NULL,
  `event_start_at` bigint(50) NOT NULL,
  `event_finish_at` bigint(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Event`
--

LOCK TABLES `Event` WRITE;
/*!40000 ALTER TABLE `Event` DISABLE KEYS */;
INSERT INTO `Event` VALUES ('Pemilihan Ketua Umum dan Wakil Ketua Umum HIMA TI Polihasnur Tahun 2020/2021','/logo.png',1637726400000,1637812800000);
/*!40000 ALTER TABLE `Event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Jobs`
--

DROP TABLE IF EXISTS `Jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Jobs` (
  `job_id` int(10) NOT NULL AUTO_INCREMENT,
  `job_name` varchar(30) NOT NULL,
  PRIMARY KEY (`job_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Jobs`
--

LOCK TABLES `Jobs` WRITE;
/*!40000 ALTER TABLE `Jobs` DISABLE KEYS */;
INSERT INTO `Jobs` VALUES (1,'Dosen'),(2,'Mahasiswa'),(3,'Pengurus');
/*!40000 ALTER TABLE `Jobs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-25  8:48:30

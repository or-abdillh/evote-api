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
  `token` varchar(250) NOT NULL,
  `status_vote` tinyint(1) NOT NULL,
  `candidate_id` int(10) DEFAULT NULL,
  `job_id` int(10) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `last_modified` bigint(50) NOT NULL,
  `time_stamp` bigint(50) NOT NULL,
  PRIMARY KEY (`username`),
  KEY `Profiles_candidate_id_Candidates_candidate_id` (`candidate_id`),
  KEY `Profiles_job_id_Jobs_job_id` (`job_id`),
  CONSTRAINT `Profiles_candidate_id_Candidates_candidate_id` FOREIGN KEY (`candidate_id`) REFERENCES `Candidates` (`candidate_id`),
  CONSTRAINT `Profiles_job_id_Jobs_job_id` FOREIGN KEY (`job_id`) REFERENCES `Jobs` (`job_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Accounts`
--

LOCK TABLES `Accounts` WRITE;
/*!40000 ALTER TABLE `Accounts` DISABLE KEYS */;
INSERT INTO `Accounts` VALUES ('aulia','aulia','Aulia Rahmah','9icn4fl5oo8wsblujh0ahurqzp5bc6rok4k8u7r24nlrnm6tgdw6p739fhmnchrkplllr1ufiheycawrb6abc0dgyjn61whxpq58t3bck3s4wi2zfz4wzk23xaezoktarjklk25nvcng1lgr34ssnmhemv9yy4ru2r30j3q8rp0npqymawby8wykr6zh7gduzps2hy3dg4hnm38wy1rp0tm73bbaqfam9qwj2pfkjebbk4fugq62edk9m4',0,1,2,'female',0,0),('sandhika','sandhika','Sandhika Galih','yefqz13uh6zf6rlbe6oto6kzkqr3914udzyu0svgckdbe2l8zjrbuohc700t86z1bqyseg97wf5f3gul2vcmdcnc2xshwwpcg5t7ifi5qrsp05g70xezy5bml8oc8fxzn9qy0n6v4817wvchp2ja4c2nqwagiqky9nnzrwwm60bd0tkaql4qjw4kook0g76p28d4bojnjgabg6125gipgvfb44u2oh1spwl1v4ez7qpkfp5lqkqmycoal6',0,1,1,'male',0,1638447011928);
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
  `chairman_name` varchar(30) NOT NULL,
  `chairman_image` varchar(50) NOT NULL,
  `vice_chairman_name` varchar(30) NOT NULL,
  `vice_chairman_image` varchar(50) NOT NULL,
  `candidate_number` int(2) NOT NULL,
  PRIMARY KEY (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Candidates`
--

LOCK TABLES `Candidates` WRITE;
/*!40000 ALTER TABLE `Candidates` DISABLE KEYS */;
INSERT INTO `Candidates` VALUES (1,'Fukan bin Fukan','/male.jpg','Fulanah bin Fulah','/female.jpg',1),(2,'Ihwan wa sahlan','/male.jpg','Fulanah bin Fulah','/female.jpg',2),(3,'Fulan bin Fulan','/male.jpg','Fulanah bin Fulah','/female.jpg',3),(4,'Fukan bin Fukan','/male.jpg','Fulanah bin Fulah','/female.jpg',4);
/*!40000 ALTER TABLE `Candidates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Event`
--

DROP TABLE IF EXISTS `Event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Event` (
  `event_start_at` bigint(50) NOT NULL,
  `event_finish_at` bigint(50) NOT NULL,
  `event_title` varchar(250) NOT NULL,
  `passcode` int(8) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Event`
--

LOCK TABLES `Event` WRITE;
/*!40000 ALTER TABLE `Event` DISABLE KEYS */;
INSERT INTO `Event` VALUES (1613091600000,1638504000000,'Pemilihan Ketua dan Wakil Ketua Umum HIMA TI Polihasnur Tahun 2021',12345678);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Jobs`
--

LOCK TABLES `Jobs` WRITE;
/*!40000 ALTER TABLE `Jobs` DISABLE KEYS */;
INSERT INTO `Jobs` VALUES (1,'Dosen'),(2,'Mahasiswa');
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

-- Dump completed on 2021-12-03 23:09:07

CREATE DATABASE  IF NOT EXISTS `ramp_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ramp_db`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 54.86.138.25    Database: ramp_db
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account_number` varchar(45) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `due_date` datetime DEFAULT NULL,
  `invoice_date` datetime DEFAULT NULL,
  `invoice_number` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  `employee_id` int DEFAULT NULL,
  `file_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKle28mnhpamru2e2o22d5u78bu` (`employee_id`),
  KEY `FKeqcuvgfq3eh16428e9j9o73ut` (`file_id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `category_rule`
--

DROP TABLE IF EXISTS `category_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_rule` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quick_book_id` int NOT NULL,
  `ramp_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_pbexk96b5junwibypn4ff3ul5` (`ramp_id`),
  KEY `FKioo3grsplgtimnhk72j48axn1` (`quick_book_id`),
  CONSTRAINT `FKioo3grsplgtimnhk72j48axn1` FOREIGN KEY (`quick_book_id`) REFERENCES `quick_book` (`id`),
  CONSTRAINT `FKjhh8qu79rtv4i18u6665v714u` FOREIGN KEY (`ramp_id`) REFERENCES `ramp` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact` decimal(38,0) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `employee_id` varchar(255) DEFAULT NULL,
  `joining_date` datetime DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `data` mediumblob,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `flyway_schema_history`
--

DROP TABLE IF EXISTS `flyway_schema_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flyway_schema_history` (
  `installed_rank` int NOT NULL,
  `version` varchar(50) DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `script` varchar(1000) NOT NULL,
  `checksum` int DEFAULT NULL,
  `installed_by` varchar(100) NOT NULL,
  `installed_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `execution_time` int NOT NULL,
  `success` tinyint(1) NOT NULL,
  PRIMARY KEY (`installed_rank`),
  KEY `flyway_schema_history_s_idx` (`success`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `merchant_rule`
--

DROP TABLE IF EXISTS `merchant_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `merchant_rule` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `updated_date` datetime(6) DEFAULT NULL,
  `quickbook_id` int DEFAULT NULL,
  `vendor_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_461nk8rxyl6sixbht828fm37s` (`vendor_id`),
  KEY `FKmfb35bm0ty1revielm01t59j4` (`quickbook_id`),
  CONSTRAINT `FK3llqokwngnn8jksj39sot48fu` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `FKmfb35bm0ty1revielm01t59j4` FOREIGN KEY (`quickbook_id`) REFERENCES `quick_book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `quick_book`
--

DROP TABLE IF EXISTS `quick_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quick_book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quickbook_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ramp`
--

DROP TABLE IF EXISTS `ramp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ramp` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ramp_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ncpano0u1at3pg75xm1c2r9je` (`ramp_name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `created_date` datetime(6) DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `memo` int DEFAULT NULL,
  `receipt` int DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `updated_date` datetime(6) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `virtual_name` varchar(255) DEFAULT NULL,
  `quickbook_id` int DEFAULT NULL,
  `vendor_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9x6gl06x2ngbf6ya3da8fdq6c` (`quickbook_id`),
  KEY `FK5cpv0vgf70pxdtuna3mh69qw1` (`vendor_id`),
  CONSTRAINT `FK5cpv0vgf70pxdtuna3mh69qw1` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`id`),
  CONSTRAINT `FK9x6gl06x2ngbf6ya3da8fdq6c` FOREIGN KEY (`quickbook_id`) REFERENCES `quick_book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `display_name` varchar(255) DEFAULT NULL,
  `short_name` varchar(255) DEFAULT NULL,
  `updated_date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'ramp_db'
--

--
-- Dumping routines for database 'ramp_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-30 15:01:32
-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.17-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for restoran
CREATE DATABASE IF NOT EXISTS `restoran` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `restoran`;

-- Dumping structure for table restoran.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table restoran.admin: ~0 rows (approximately)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`admin_id`, `password`) VALUES
	('zavo', '1234');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- Dumping structure for table restoran.chef
CREATE TABLE IF NOT EXISTS `chef` (
  `chef_id` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table restoran.chef: ~3 rows (approximately)
/*!40000 ALTER TABLE `chef` DISABLE KEYS */;
INSERT INTO `chef` (`chef_id`, `password`) VALUES
	('dario', '12345'),
	('marko', '48124128'),
	('petar', '2942');
/*!40000 ALTER TABLE `chef` ENABLE KEYS */;

-- Dumping structure for table restoran.client
CREATE TABLE IF NOT EXISTS `client` (
  `order_id` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `surname` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `ad_number` varchar(50) DEFAULT NULL,
  `place` varchar(50) DEFAULT NULL,
  `tel_numb` varchar(50) DEFAULT NULL,
  `datetime` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table restoran.client: ~3 rows (approximately)
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` (`order_id`, `name`, `surname`, `address`, `ad_number`, `place`, `tel_numb`, `datetime`) VALUES
	('qqq0fyyc', 'Dario', 'Zavisic', 'A B Simica', '11', 'Vinkovci', '923910391', '2021-5-13 22:48'),
	('k56sagik', 'Luka', 'Zunic', 'Zadarksa', '5', 'Zadar', '90492104', '2021-5-14 1:3');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;

-- Dumping structure for table restoran.courses
CREATE TABLE IF NOT EXISTS `courses` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table restoran.courses: ~5 rows (approximately)
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` (`id`, `name`) VALUES
	(1, 'Glavno jelo'),
	(2, 'Hladno predjelo'),
	(3, 'Toplo predjelo'),
	(4, 'Salate'),
	(5, 'Deserti');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;

-- Dumping structure for table restoran.menu
CREATE TABLE IF NOT EXISTS `menu` (
  `courses_id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `currency` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table restoran.menu: ~32 rows (approximately)
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` (`courses_id`, `name`, `price`, `currency`) VALUES
	(2, 'KREMA OD SLANUTKA', 35, 'HRK'),
	(2, 'BEEF TARTARE', 45, 'HRK'),
	(2, 'BEEF CARPACCIO', 55, 'HRK'),
	(2, 'DIMLJENA PAŠTETA OD ČVARAKA', 25, 'HRK'),
	(3, 'SMUĐ NA SALATI', 45, 'HRK'),
	(3, 'OKRUGLICE OD DIMLJENE ŠUNKE', 20, 'HRK'),
	(3, 'SOČNA GOVEDINA', 28, 'HRK'),
	(1, 'FILET SMUĐA', 70, 'HRK'),
	(1, 'DOMAĆA DIMLJENA KOBASICA', 65, 'HRK'),
	(1, 'SVINJSKI FILE', 75, 'HRK'),
	(1, 'JANJEĆI FRENCH RACK', 160, 'HRK'),
	(1, 'BEEFSTEAK', 150, 'HRK'),
	(1, 'VATRENI BURGER', 60, 'HRK'),
	(1, 'PILEĆI FILE U HRUSTI OD BADEMA', 60, 'HRK'),
	(1, 'FILET SMUĐA', 80, 'HRK'),
	(1, 'RUMPSTEAK', 95, 'HRK'),
	(4, '«LU» SALATA', 65, 'HRK'),
	(4, '«EX» SALATA', 30, 'HRK'),
	(4, 'MIX SEZONSKIH SALATA', 15, 'HRK'),
	(4, 'CHERRY & RUKOLA SALATA', 20, 'HRK'),
	(5, 'ČOKOLADA & KARAMEL', 25, 'HRK'),
	(5, 'SIR & MALINA', 25, 'HRK'),
	(5, 'COOKIE', 25, 'HRK'),
	(5, 'SELEKCIJA SIREVA', 40, 'HRK'),
	(1, 'SVINJSKI FILE', 70, 'HRK'),
	(1, 'DOMAĆA DIMLJENA KOBASICA', 70, 'HRK'),
	(1, 'VATRENI BURGER', 70, 'HRK'),
	(1, 'GLAZIRANA SVINJSKA REBARCA', 70, 'HRK');
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

-- Dumping structure for table restoran.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `portions` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table restoran.orders: ~7 rows (approximately)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`order_id`, `name`, `portions`) VALUES
	('qqq0fyyc', 'KREMA OD SLANUTKA', '1'),
	('qqq0fyyc', 'BEEF CARPACCIO', '3'),
	('qqq0fyyc', 'BEEF TARTARE', '1'),
	('k56sagik', 'KREMA OD SLANUTKA', '1'),
	('k56sagik', 'BEEF CARPACCIO', '1'),
	('k56sagik', 'DIMLJENA PAŠTETA OD ČVARAKA', '3'),
	('k56sagik', 'BEEF TARTARE', '1');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Dumping structure for table restoran.reservation
CREATE TABLE IF NOT EXISTS `reservation` (
  `fullname` varchar(50) DEFAULT NULL,
  `num_people` varchar(50) DEFAULT NULL,
  `datetime` varchar(50) DEFAULT NULL,
  `tel_numb` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table restoran.reservation: ~1 rows (approximately)
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` (`fullname`, `num_people`, `datetime`, `tel_numb`) VALUES
	('Tonci Huljic', '15', '15.6.2021 19:00h', '093981283');
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

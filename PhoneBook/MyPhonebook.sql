-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 23, 2022 at 09:58 AM
-- Server version: 8.0.30-0ubuntu0.22.04.1
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `MyPhonebook`
--

-- --------------------------------------------------------

--
-- Table structure for table `Phonebook`
--

CREATE TABLE `Phonebook` (
  `PersonID` int NOT NULL,
  `Name` varchar(20) NOT NULL,
  `ContactNum` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Phonebook`
--

INSERT INTO `Phonebook` (`PersonID`, `Name`, `ContactNum`) VALUES
(111, 'John Smith', '206-789-5396'),
(222, 'Peter Parker', '545-332-4424'),
(333, 'Catherine Morgan', '433-233-4213'),
(444, 'Steve Dearborn', '532-243-2444'),
(555, 'Thomas Morrison', '987-629-9231'),
(666, 'Kevin Peterson', '876-223-4351'),
(777, 'Will Smith', '213-232-4352'),
(888, 'Indiana Jones', '532-642-7321');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Phonebook`
--
ALTER TABLE `Phonebook`
  ADD PRIMARY KEY (`PersonID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Phonebook`
--
ALTER TABLE `Phonebook`
  MODIFY `PersonID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=889;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

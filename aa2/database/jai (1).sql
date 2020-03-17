-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 17, 2020 at 09:54 PM
-- Server version: 5.6.41
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jai`
--

-- --------------------------------------------------------

--
-- Table structure for table `haty`
--

CREATE TABLE `haty` (
  `id` int(255) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `adress` varchar(255) NOT NULL,
  `pic1` varchar(255) NOT NULL,
  `pic2` varchar(255) NOT NULL,
  `pic3` varchar(255) NOT NULL,
  `kvadr` varchar(255) NOT NULL,
  `cena` varchar(255) NOT NULL,
  `komnat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `haty`
--

INSERT INTO `haty` (`id`, `lat`, `lng`, `adress`, `pic1`, `pic2`, `pic3`, `kvadr`, `cena`, `komnat`) VALUES
(1, 42.319031, 69.596466, 'Кунаева 29/78', 'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1107i215%2Fbrydn2r22jhp45yefdqtmc4ew1i215&option=N&idlisting=180-l-2972-3xgbpl&w=1600&permitphotoenlargement=false', 'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1107i215%2Fp535qmtcpbmvmrp2xdrrhj7w72i215&option=N&w=1024&permitphotoenlargement=false', 'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1107i215%2Fvkf8qg7g66kfmxjt46dnzw2b44i215&option=N&w=1024&permitphotoenlargement=false', '90', '190000', '3'),
(2, 42.318663, 69.596604, 'Кунаева 22', 'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1107i215%2Fvkf8qg7g66kfmxjt46dnzw2b44i215&option=N&w=1024&permitphotoenlargement=false', 'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1107i215%2F3pgf5r11cada4rjcq79rh0djd2i215&option=N&w=1024&permitphotoenlargement=false', 'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1107i215%2Fv4h3shyve9jj4xyb2zn60xm084i215&option=N&w=1024&permitphotoenlargement=false', '130', '250000', '4'),
(3, 42.324452, 69.585197, 'Жангельдина 33', 'https://newyse-res.cloudinary.com/image/upload/t_normal_image_fill,f_auto/v1578581367/308-2246085.jpg', 'https://newyse-res.cloudinary.com/image/upload/t_normal_image_fill,f_auto/v1578581366/308-2246079.jpg', 'https://newyse-res.cloudinary.com/image/upload/t_normal_image_fill,f_auto/v1578581367/308-2246082.jpg', '130', '400,000', '5');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `haty`
--
ALTER TABLE `haty`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `haty`
--
ALTER TABLE `haty`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

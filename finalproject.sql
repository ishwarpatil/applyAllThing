-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2018 at 11:12 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finalproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `cid` int(11) NOT NULL,
  `city` varchar(50) NOT NULL,
  `sid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`cid`, `city`, `sid`) VALUES
(1, 'Kim', 2),
(2, 'Bharuch', 2),
(3, 'Ankleshwar', 2),
(4, 'Vadodara', 2),
(5, 'Ahemdabad', 2),
(6, 'Mumbai', 1),
(7, 'Nandurbar', 1),
(8, 'Bharngav', 1),
(9, 'Pune', 1),
(10, 'Nashik', 1),
(11, 'Abbeville', 3),
(12, 'Aberdeen', 3),
(13, 'Abilene', 3),
(14, 'Abingdon', 3),
(15, 'Ballston', 4),
(16, 'Cabot', 4),
(17, 'Caldwell', 5),
(18, 'Byram', 5),
(19, 'Dentsville', 6),
(20, 'Eagle', 6);

-- --------------------------------------------------------

--
-- Table structure for table `emp`
--

CREATE TABLE `emp` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `hobby` varchar(50) NOT NULL,
  `sid` int(11) NOT NULL,
  `city` varchar(50) NOT NULL,
  `profilePhoto` text NOT NULL,
  `flag` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp`
--

INSERT INTO `emp` (`id`, `firstName`, `lastName`, `gender`, `hobby`, `sid`, `city`, `profilePhoto`, `flag`) VALUES
(13, 'ishwar', 'patil', 'Male', 'Cricket,Reading,Writing', 3, 'Abbeville', 'img4.jpg', 0),
(14, 'rakesh', 'patil', 'Female', 'Reading,Writing', 3, 'Abilene', 'house4.jpg', 0),
(15, 'mukesh', 'singh', 'Male', 'Reading,Writing,Cricket', 5, 'Caldwell', 'house5.jpg', 0),
(16, 'rahul', 'patil', 'Male', 'Cricket,Reading', 2, 'Bharuch', 'house3.jpg', 0),
(17, 'raj', 'patil', 'Male', 'Reading', 2, 'Kim', '056a0219-3956vendor-management.jpg', 0),
(18, 'kiran', 'patel', 'Female', 'Reading', 4, 'Ballston', 'carrier.jpg', 0),
(19, 'raku', 'patel', 'Female', 'Reading', 2, 'Vadodara', 'agnet.png', 0),
(20, 'rohit', 'patil', 'Male', 'Reading', 2, 'Kim', 'vendor-management-400.jpg', 0),
(21, 'kiran', 'patel', 'Female', 'Reading', 4, 'Cabot', 'fe9ceb92-cb8aimg1.jpg', 0),
(22, 'as', 'asdas', 'Female', 'Reading', 3, 'Abingdon', '0bf25439-33d6ava_0000-512.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `fileName` varchar(100) NOT NULL,
  `title` varchar(50) NOT NULL,
  `author` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `fileName`, `title`, `author`) VALUES
(37, '07-weird-cartoons.w710.h473.2x.jpg', 'Camera', 'Danson67'),
(38, '15THNEWCARTOON.jpg', 'Camera', 'Danson67'),
(39, '59aeb92a5e65b-funny-cartoon-logic-fails-fb9.png', 'Camera', 'Danson67'),
(40, '18057510-1549810-23-0-1513767199-1513767212-650-1-1513767212-650-ce9f862cd3-1513864405.jpg', 'Camera', 'Danson67'),
(41, 'maxresdefault (1).jpg', 'Tasty burger', 'Pashminu'),
(42, 'maxresdefault.jpg', 'Tasty burger', 'Pashminu'),
(55, 'our-cartoon-president.jpg', 'Morning', 'Ishwar Patil'),
(56, 'owl-cartoon-png-0.png', 'Morning', 'Ishwar Patil'),
(57, 'Top-7-Cartoon-Maker-Websites.jpg', 'Morning', 'Ishwar Patil'),
(58, 'WP_20150415_003.jpg', 'Morning', 'Ishwar Patil'),
(59, '59aeb92a5e65b-funny-cartoon-logic-fails-fb9.png', 'Hats', 'Mukesh'),
(60, 'Chhota-Bheem-Children-Favourite-Cartoon-HD-Wallpaper.jpg', 'Hats', 'Mukesh'),
(61, 'maxresdefault (1).jpg', 'sdasd', 'assad'),
(62, 'maxresdefault.jpg', 'sdasd', 'assad'),
(63, 'Chhota-Bheem-Children-Favourite-Cartoon-HD-Wallpaper.jpg', 'asas', 'sdas'),
(64, 'FOREIGN201801231508000349721557099.jpg', 'asas', 'sdas');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `userName`, `email`, `password`) VALUES
(1, 'ishwar', 'ishwar@gmail.com', 'laneteam1'),
(2, 'sagar', 'sagar@gmail.com', 'lanetteam1'),
(5, 'mukesh', 'mukesh@gmail.com', '123'),
(7, 'RAJESH', 'rajesh@gmail.com', '153'),
(10, 'yash', 'yash@gmail.com', 'yash'),
(13, '', '', ''),
(14, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `sid` int(11) NOT NULL,
  `state` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`sid`, `state`) VALUES
(1, 'Maharastra'),
(2, 'Gujarat'),
(3, 'Louisiana'),
(4, 'Mississippi'),
(5, 'Georgia'),
(6, 'Illinois');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'lanetteam.shubham10@gmail.com', 'lanetteam1'),
(2, 'lanetteam.ishwar@gmail.com', 'lanetteam1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`cid`),
  ADD KEY `sid` (`sid`);

--
-- Indexes for table `emp`
--
ALTER TABLE `emp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sid` (`sid`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `emp`
--
ALTER TABLE `emp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `city`
--
ALTER TABLE `city`
  ADD CONSTRAINT `city_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `state` (`sid`);

--
-- Constraints for table `emp`
--
ALTER TABLE `emp`
  ADD CONSTRAINT `emp_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `state` (`sid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

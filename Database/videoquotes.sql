-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2022 at 07:34 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `videoquotes`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_name` varchar(50) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_name`, `category_id`) VALUES
('video', 0),
('photo', 1);

-- --------------------------------------------------------

--
-- Table structure for table `quotes`
--

CREATE TABLE `quotes` (
  `quotes_id` int(11) NOT NULL,
  `quotes_text` varchar(500) DEFAULT NULL,
  `quotes_category_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quotes`
--

INSERT INTO `quotes` (`quotes_id`, `quotes_text`, `quotes_category_id`, `category_id`) VALUES
(1, 'it\'s nice photo', 1, 1),
(2, 'nice and worth video in life', 2, 0),
(3, ' worth-ful video in life', 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `quotes_category`
--

CREATE TABLE `quotes_category` (
  `quotes_category` varchar(50) NOT NULL,
  `quotes_category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quotes_category`
--

INSERT INTO `quotes_category` (`quotes_category`, `quotes_category_id`) VALUES
('Inspirational Quotes', 1),
('Motivational Quotes', 2),
('Life Quotes', 3),
('Funny Quotes', 4),
('Friendship Quotes', 5),
('Happiness Quotes', 6),
('Success Quotes', 7),
('Thoughtful Quotes', 8),
('Wisdom Quotes', 9);

-- --------------------------------------------------------

--
-- Table structure for table `sticker`
--

CREATE TABLE `sticker` (
  `sticker_image_link` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`sticker_image_link`)),
  `sticker_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sticker`
--

INSERT INTO `sticker` (`sticker_image_link`, `sticker_id`) VALUES
('{\"sticker\":[\"C://Users//umiya mataji//Pictures//house.jpg\"]}', 1),
('{\"sticker\":[\"C://Users//umiya mataji//Pictures//video.mp4\",\"C://Users//umiya mataji//Pictures//video.mp4\"]}', 2),
('{\"sticker\":[\"C://Users//umiya mataji//Pictures//video.mp4.jpg\",\"C://Users//umiya mataji//Pictures//video.mp4\",\"C://Users//umiya mataji//Pictures//video.mp4\"]}', 3),
('{\"sticker\":[\"C://Users//umiya mataji//Pictures//house.jpg\",\"C://Users//umiya mataji//Pictures//image.png\"]}', 4);

-- --------------------------------------------------------

--
-- Table structure for table `videophoto`
--

CREATE TABLE `videophoto` (
  `video_photo_id` int(11) NOT NULL,
  `video_photo_link` varchar(1000) NOT NULL,
  `photo_height` varchar(50) DEFAULT NULL,
  `photo_width` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `videophoto`
--

INSERT INTO `videophoto` (`video_photo_id`, `video_photo_link`, `photo_height`, `photo_width`) VALUES
(0, 'C:Usersumiya matajiPicturesvideo.jpg', '150px', '200px'),
(1, 'C:\\Users\\umiya mataji\\Pictures\\house.jpg', '150px', '300px'),
(0, 'C:\\Users\\umiya mataji\\Pictures\\video.jpg', '150px', '300px'),
(1, 'C:\\Users\\umiya mataji\\Pictures\\house2.jpg', '150px', '300px'),
(1, 'C:\\Users\\umiya mataji\\Pictures\\house.jpg', '320px', '150px');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`quotes_id`),
  ADD KEY `fk_category` (`category_id`),
  ADD KEY `quotes_category_id` (`quotes_category_id`);

--
-- Indexes for table `quotes_category`
--
ALTER TABLE `quotes_category`
  ADD PRIMARY KEY (`quotes_category_id`);

--
-- Indexes for table `sticker`
--
ALTER TABLE `sticker`
  ADD PRIMARY KEY (`sticker_id`);

--
-- Indexes for table `videophoto`
--
ALTER TABLE `videophoto`
  ADD KEY `video_photo_id` (`video_photo_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quotes`
--
ALTER TABLE `quotes`
  MODIFY `quotes_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `quotes_category`
--
ALTER TABLE `quotes_category`
  MODIFY `quotes_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `sticker`
--
ALTER TABLE `sticker`
  MODIFY `sticker_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `quotes`
--
ALTER TABLE `quotes`
  ADD CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `quotes_ibfk_1` FOREIGN KEY (`quotes_category_id`) REFERENCES `quotes_category` (`quotes_category_id`);

--
-- Constraints for table `videophoto`
--
ALTER TABLE `videophoto`
  ADD CONSTRAINT `videophoto_ibfk_1` FOREIGN KEY (`video_photo_id`) REFERENCES `category` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

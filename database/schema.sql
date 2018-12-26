-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'user'
-- 
-- ---

DROP TABLE IF EXISTS `user`;
		
CREATE TABLE `user` (
  `user_id` INTEGER NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(250) NOT NULL,
  `lastName` VARCHAR(250) NOT NULL,
  `email` VARCHAR(250) NULL DEFAULT NULL,
  `password` VARCHAR(250) NOT NULL,
  `organization` VARCHAR(250) NOT NULL,
  `phoneNumber` VARCHAR(250) NOT NULL,
  `primum` INTEGER(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`user_id`)
);

-- ---
-- Table 'queue'
-- 
-- ---

DROP TABLE IF EXISTS `queue`;
		
CREATE TABLE `queue` (
  `queue_id` INTEGER NOT NULL AUTO_INCREMENT,
  `nameOfQueeu` VARCHAR(25) NOT NULL,
  `start_time` TIME(6) NOT NULL,
  `end_time` TIME(6) NOT NULL,
  `date` DATE NOT NULL,
  `timeforone` VARCHAR(25) NOT NULL,
  `windows` VARCHAR(25) NOT NULL,
  `imgUrl` VARCHAR(200) NOT NULL,
  `take_premum` INTEGER(1) NOT NULL DEFAULT 0,
  `accept_join` INTEGER(1) NOT NULL DEFAULT 0,
  `requierment` VARCHAR(80) NOT NULL,
  `creator_id` INTEGER NOT NULL,
  PRIMARY KEY (`queue_id`)
);

-- ---
-- Table 'user_queue'
-- 
-- ---

DROP TABLE IF EXISTS `user_queue`;
		
CREATE TABLE `user_queue` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NOT NULL,
  `queue_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'waitingList'
-- 
-- ---

DROP TABLE IF EXISTS `waitingList`;
		
CREATE TABLE `waitingList` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NOT NULL,
  `queue_id` INTEGER NOT NULL,
  `notes_order` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'history'
-- 
-- ---

DROP TABLE IF EXISTS `history`;
		
CREATE TABLE `history` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `queu_name` VARCHAR(25) NOT NULL,
  `organization` VARCHAR(25) NOT NULL,
  `date` DATE NOT NULL,
  `numOfTicket` INTEGER NOT NULL,
  `creator_id` INTEGER NOT NULL,
  `start_time` TIME NOT NULL,
  `end_time` TIME NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `queue` ADD FOREIGN KEY (creator_id) REFERENCES `user` (`user_id`);
ALTER TABLE `user_queue` ADD FOREIGN KEY (user_id) REFERENCES `user` (`user_id`);
ALTER TABLE `user_queue` ADD FOREIGN KEY (queue_id) REFERENCES `queue` (`queue_id`);
ALTER TABLE `waitingList` ADD FOREIGN KEY (user_id) REFERENCES `user` (`user_id`);
ALTER TABLE `waitingList` ADD FOREIGN KEY (queue_id) REFERENCES `queue` (`queue_id`);
ALTER TABLE `history` ADD FOREIGN KEY (creator_id) REFERENCES `user` (`user_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `user` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `queue` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user_queue` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `waitingList` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `history` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `user` (`user_id`,`firstName`,`lastName`,`email`,`password`,`organization`,`phoneNumber`,`primum`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `queue` (`queue_id`,`nameOfQueeu`,`start_time`,`end_time`,`date`,`timeforone`,`windows`,`imgUrl`,`take_premum`,`accept_join`,`requierment`,`creator_id`) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO `user_queue` (`id`,`user_id`,`queue_id`) VALUES
-- ('','','');
-- INSERT INTO `waitingList` (`id`,`user_id`,`queue_id`,`notes_order`) VALUES
-- ('','','','');
-- INSERT INTO `history` (`id`,`queu_name`,`organization`,`date`,`numOfTicket`,`creator_id`,`start_time`,`end_time`) VALUES
-- ('','','','','','','','');
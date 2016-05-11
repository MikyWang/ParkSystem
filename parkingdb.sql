/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : parkingdb

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2016-05-12 04:48:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for parkingplace
-- ----------------------------
DROP TABLE IF EXISTS `parkingplace`;
CREATE TABLE `parkingplace` (
  `place_id` int(11) NOT NULL AUTO_INCREMENT,
  `position` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `orientation` varchar(255) DEFAULT NULL,
  `direction` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`place_id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of parkingplace
-- ----------------------------
INSERT INTO `parkingplace` VALUES ('1', '110,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('2', '110,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('3', '110,220', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('4', '110,300', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('5', '110,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('6', '110,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('7', '110,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('8', '150,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('9', '150,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('10', '150,220', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('11', '150,300', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('12', '150,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('13', '150,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('14', '150,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('15', '190,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('16', '190,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('17', '190,220', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('18', '190,300', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('19', '190,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('20', '190,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('21', '190,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('22', '240,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('23', '240,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('24', '240,220', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('25', '240,300', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('26', '240,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('27', '240,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('28', '240,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('29', '280,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('30', '280,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('31', '280,220', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('32', '280,300', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('33', '280,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('34', '280,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('35', '280,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('36', '320,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('37', '320,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('38', '320,220', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('39', '320,300', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('40', '320,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('41', '320,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('42', '320,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('43', '370,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('44', '370,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('45', '370,220', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('46', '370,300', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('47', '370,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('48', '370,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('49', '370,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('50', '410,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('51', '410,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('52', '410,220', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('53', '410,300', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('54', '410,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('55', '410,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('56', '410,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('57', '450,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('58', '450,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('59', '450,220', 'full', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('60', '450,300', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('61', '450,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('62', '450,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('63', '450,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('64', '500,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('65', '500,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('66', '500,220', 'full', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('67', '500,300', 'full', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('68', '500,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('69', '500,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('70', '500,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('71', '540,100', 'empty', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('72', '540,180', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('73', '540,220', 'full', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('74', '540,300', 'full', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('75', '540,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('76', '540,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('77', '540,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('78', '580,100', 'full', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('79', '580,180', 'full', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('80', '580,220', 'full', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('81', '580,300', 'full', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('82', '580,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('83', '580,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('84', '580,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('85', '630,100', 'full', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('86', '630,180', 'full', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('87', '630,220', 'full', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('88', '630,300', 'full', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('89', '630,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('90', '630,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('91', '630,60', 'empty', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('92', '670,100', 'full', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('93', '670,180', 'full', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('94', '670,220', 'full', 'down', 'left');
INSERT INTO `parkingplace` VALUES ('95', '670,300', 'full', 'up', 'left');
INSERT INTO `parkingplace` VALUES ('96', '670,340', 'empty', 'down', 'right');
INSERT INTO `parkingplace` VALUES ('97', '670,420', 'empty', 'up', 'right');
INSERT INTO `parkingplace` VALUES ('98', '670,60', 'empty', 'up', 'left');

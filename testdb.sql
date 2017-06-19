
SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for web_admin
-- ----------------------------
DROP TABLE IF EXISTS `web_admin`;
CREATE TABLE `web_admin` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pass` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(1) DEFAULT '0',
  `time` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `accessToken` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expires` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `clientId` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of web_admin
-- ----------------------------
INSERT INTO `web_admin` VALUES ('1', 'admin', '123', '0', null, null, null, null);

-- ----------------------------
-- Table structure for web_news
-- ----------------------------
DROP TABLE IF EXISTS `web_news`;
CREATE TABLE `web_news` (
  `nid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `con` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `module` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `ord` int(11) DEFAULT NULL,
  `seotitle` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seokeyword` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seodesc` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `langid` int(11) DEFAULT NULL,
  `time` int(50) DEFAULT NULL,
  `status` int(1) DEFAULT '1',
  `tags` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resource` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `num` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `creator` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `uploadfiles` text COLLATE utf8mb4_unicode_ci,
  `images` text COLLATE utf8mb4_unicode_ci,
  `hotclick` int(11) DEFAULT '0',
  `salaryrange` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publishTime` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of web_news
-- ----------------------------
INSERT INTO `web_news` VALUES ('61', 'sdf', '12ddd3', 'news1', '2', '1', '', '', '', '1', '1', '1495013232', '1', '测试标题一', '测试标题一', '0', 'admin', '[\"1495013182585Lighthouse.jpg\"]', null, '20', '', '', '1495013184');

-- ----------------------------
-- Table structure for web_newsType
-- ----------------------------
DROP TABLE IF EXISTS `web_newsType`;
CREATE TABLE `web_newsType` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ord` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of web_newsType
-- ----------------------------
INSERT INTO `web_newsType` VALUES ('1', '加入我们', 'joinus', '1', '1', '1325472736', '1');
INSERT INTO `web_newsType` VALUES ('2', '媒体资讯', 'news', '1', '1', '1325472736', '1');

-- ----------------------------
-- Table structure for web_node
-- ----------------------------
DROP TABLE IF EXISTS `web_node`;
CREATE TABLE `web_node` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `template` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `template_name` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `time` int(10) NOT NULL,
  `cont` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_tempalte` (`template`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=209 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of web_node
-- ----------------------------
INSERT INTO `web_node` VALUES ('1', 'web_admin', '用户', '1', '1497597955', '%5B%7B%22Field%22%3A%20%22uid%22%2C%20%22Type%22%3A%20%22int(10)%22%2C%20%22Null%22%3A%20%22NO%22%2C%20%22Key%22%3A%20%22PRI%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22auto_increment%22%7D%2C%20%7B%22Field%22%3A%20%22name%22%2C%20%22Type%22%3A%20%22varchar(20)%22%2C%20%22Null%22%3A%20%22NO%22%2C%20%22Key%22%3A%20%22UNI%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22pass%22%2C%20%22Type%22%3A%20%22varchar(50)%22%2C%20%22Null%22%3A%20%22NO%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22status%22%2C%20%22Type%22%3A%20%22int(1)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20%220%22%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22time%22%2C%20%22Type%22%3A%20%22varchar(20)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22accessToken%22%2C%20%22Type%22%3A%20%22varchar(200)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22expires%22%2C%20%22Type%22%3A%20%22varchar(100)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22clientId%22%2C%20%22Type%22%3A%20%22varchar(20)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%20%5D');
INSERT INTO `web_node` VALUES ('2', 'web_news', '资讯', '1', '1497597987', '%5B%7B%22Field%22%3A%20%22nid%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22NO%22%2C%20%22Key%22%3A%20%22PRI%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22auto_increment%22%7D%2C%20%7B%22Field%22%3A%20%22title%22%2C%20%22Type%22%3A%20%22varchar(200)%22%2C%20%22Null%22%3A%20%22NO%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22con%22%2C%20%22Type%22%3A%20%22longtext%22%2C%20%22Null%22%3A%20%22NO%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22module%22%2C%20%22Type%22%3A%20%22varchar(50)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22type%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22ord%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22seotitle%22%2C%20%22Type%22%3A%20%22varchar(200)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22seokeyword%22%2C%20%22Type%22%3A%20%22varchar(200)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22seodesc%22%2C%20%22Type%22%3A%20%22varchar(500)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22uid%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22langid%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22time%22%2C%20%22Type%22%3A%20%22int(50)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22status%22%2C%20%22Type%22%3A%20%22int(1)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20%221%22%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22tags%22%2C%20%22Type%22%3A%20%22varchar(500)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22resource%22%2C%20%22Type%22%3A%20%22varchar(200)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20%22%22%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22num%22%2C%20%22Type%22%3A%20%22varchar(20)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20%220%22%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22creator%22%2C%20%22Type%22%3A%20%22varchar(200)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20%22%22%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22uploadfiles%22%2C%20%22Type%22%3A%20%22text%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22images%22%2C%20%22Type%22%3A%20%22text%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22hotclick%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20%220%22%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22salaryrange%22%2C%20%22Type%22%3A%20%22varchar(200)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22location%22%2C%20%22Type%22%3A%20%22varchar(500)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22publishTime%22%2C%20%22Type%22%3A%20%22varchar(50)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%20%5D');
INSERT INTO `web_node` VALUES ('3', 'web_newsType', '资讯类别', '1', '1497598042', '%5B%7B%22Field%22%3A%20%22tid%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22NO%22%2C%20%22Key%22%3A%20%22PRI%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22auto_increment%22%7D%2C%20%7B%22Field%22%3A%20%22name%22%2C%20%22Type%22%3A%20%22varchar(100)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22link%22%2C%20%22Type%22%3A%20%22varchar(20)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22ord%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22status%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22time%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%2C%20%7B%22Field%22%3A%20%22uid%22%2C%20%22Type%22%3A%20%22int(11)%22%2C%20%22Null%22%3A%20%22YES%22%2C%20%22Key%22%3A%20%22%22%2C%20%22Default%22%3A%20null%2C%20%22Extra%22%3A%20%22%22%7D%20%5D%20');

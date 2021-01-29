-- sequelize-automate -t js -h localhost -d magexpresstest -u postgres -p sab@1009 -P 5432  -e postgres  -o "./models"
CREATE TYPE activitystatus AS ENUM ('online', 'offline');

CREATE TABLE  person (
	id BIGSERIAL PRIMARY KEY,
	firstname VARCHAR NOT NULL,
	lastname VARCHAR NOT NULL,
	username VARCHAR UNIQUE NOT NULL,
	companyname VARCHAR NOT NULL,
	email VARCHAR NOT NULL,
	password VARCHAR NOT NULL,
	status activitystatus default 'online',
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE directchat (
	id BIGSERIAL PRIMARY KEY,
	userId1 INT NOT NULL,
	userId2 INT NOT NULL,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE directmessage(
	id BIGSERIAL PRIMARY KEY,
	authorId INT NOT NULL,
	receiverId INT NOT NULL,
    directchatId INT NOT NULL,
	content TEXT NOT NULL,
	replyId INT,
	privatereplyId INT,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE room (
	id BIGSERIAL PRIMARY KEY,
    creatorId INT NOT NULL,
	name VARCHAR NOT NULL,
	description VARCHAR,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE channel (
	id BIGSERIAL PRIMARY KEY,
    creatorId INT NOT NULL,
    roomId INT NOT NULL,
	name VARCHAR NOT NULL,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roommessage (
	id BIGSERIAL PRIMARY KEY,
    creatorId INT NOT NULL,
	roomId INT NOT NULL,
	channelId INT NOT NULL,
	content TEXT NOT NULL,
	replyId INT,
	forwarded INT,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trackercontainer (
	id BIGSERIAL PRIMARY KEY,
    creatorId INT NOT NULL,
	name VARCHAR NOT NULL,
	description VARCHAR,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorycontainer (
    id BIGSERIAL PRIMARY KEY,
    creatorId INT NOT NULL,
    trackercontainerId INT NOT NULL,
	name VARCHAR NOT NULL,
    description VARCHAR,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tracker(
	id BIGSERIAL PRIMARY KEY,
    creatorId INT NOT NULL,
    trackercontainerId INT NOT NULL,
    categorycontainerId INT NOT NULL,
	content TEXT,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trackercomment (
	id BIGSERIAL PRIMARY KEY,
    creatorId INT NOT NULL,
	trackercontainerId INT NOT NULL,
	categorycontainerId INT NOT NULL,
	trackerId INT NOT NULL,
	content TEXT,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subtrackers (
	parenttrackerId INT NOT NULL,
	childtrackerId INT NOT NULL
);

CREATE TABLE linkedtrackers (
	trackerId1 INT NOT NULL,
	trackerId2 INT NOT NULL
);

CREATE TABLE assignees (
    assigneeId INT NOT NULL,
    trackerId INT NOT NULL
);
CREATE TABLE usersandrooms (
	userId INT NOT NULL,
	roomId INT NOT NULL
);

CREATE TABLE usersandtrackercontainers(
	userId INT NOT NULL,
	trackercontainerId INT NOT NULL
);

ALTER TABLE directchat ADD FOREIGN KEY (userId1) REFERENCES person (id);

ALTER TABLE directchat ADD FOREIGN KEY (userId2) REFERENCES person (id);

ALTER TABLE directmessage ADD FOREIGN KEY (authorId) REFERENCES person (id);

ALTER TABLE directmessage ADD FOREIGN KEY (receiverId) REFERENCES person (id);

ALTER TABLE directmessage ADD FOREIGN KEY (directchatId) REFERENCES directchat (id);

ALTER TABLE directmessage ADD FOREIGN KEY (replyId) REFERENCES directmessage (id);

ALTER TABLE directmessage ADD FOREIGN KEY (privatereplyId) REFERENCES roommessage (id);

ALTER TABLE room ADD FOREIGN KEY (creatorId) REFERENCES person (id);

ALTER TABLE channel ADD FOREIGN KEY (roomId) REFERENCES room (id);

ALTER TABLE channel ADD FOREIGN KEY (creatorId) REFERENCES person (id);

ALTER TABLE roommessage ADD FOREIGN KEY (roomId) REFERENCES room (id);

ALTER TABLE roommessage ADD FOREIGN KEY (channelId) REFERENCES channel (id);

ALTER TABLE roommessage ADD FOREIGN KEY (creatorId) REFERENCES person (id);

ALTER TABLE roommessage ADD FOREIGN KEY (replyId) REFERENCES roommessage (id);

ALTER TABLE trackercontainer ADD FOREIGN KEY (creatorId) REFERENCES person (id);

ALTER TABLE categorycontainer ADD FOREIGN KEY (trackercontainerId) REFERENCES trackercontainer (id);

ALTER TABLE categorycontainer ADD FOREIGN KEY (creatorId) REFERENCES person (id);

ALTER TABLE tracker ADD FOREIGN KEY (trackercontainerId) REFERENCES trackercontainer (id);

ALTER TABLE tracker ADD FOREIGN KEY (categorycontainerId) REFERENCES categorycontainer (id);

ALTER TABLE tracker ADD FOREIGN KEY (creatorId) REFERENCES person (id);

ALTER TABLE trackercomment ADD FOREIGN KEY (trackercontainerId) REFERENCES trackercontainer (id);

ALTER TABLE trackercomment ADD FOREIGN KEY (categorycontainerId) REFERENCES categorycontainer (id);

ALTER TABLE trackercomment ADD FOREIGN KEY (creatorId) REFERENCES person (id);

ALTER TABLE trackercomment ADD FOREIGN KEY (trackerId) REFERENCES tracker (id);

ALTER TABLE subtrackers ADD FOREIGN KEY (parenttrackerId ) REFERENCES tracker (id);

ALTER TABLE subtrackers ADD FOREIGN KEY (childtrackerId ) REFERENCES tracker (id);

ALTER TABLE linkedtrackers ADD FOREIGN KEY (trackerId1 ) REFERENCES tracker (id);

ALTER TABLE linkedtrackers ADD FOREIGN KEY (trackerId2 ) REFERENCES tracker (id);

ALTER TABLE assignees ADD FOREIGN KEY (assigneeId ) REFERENCES person (id);

ALTER TABLE assignees ADD FOREIGN KEY (trackerId ) REFERENCES tracker (id);

ALTER TABLE usersandrooms ADD FOREIGN KEY (userId ) REFERENCES person (id);

ALTER TABLE usersandrooms ADD FOREIGN KEY (roomId ) REFERENCES room (id);

ALTER TABLE usersandtrackercontainers ADD FOREIGN KEY (userId ) REFERENCES person (id);

ALTER TABLE usersandtrackercontainers ADD FOREIGN KEY (trackercontainerId ) REFERENCES trackercontainer (id);
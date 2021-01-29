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
	childtrackerId INT NOT NULL,
);

CREATE TABLE linkedtrackers (
	trackerId1 INT,
	trackerId2 INT,
);

CREATE TABLE assignees (
    assigneeId INT NOT NULL,
    trackerId INT NOT NULL,
);
CREATE TABLE usersandrooms (
	userId INT NOT NULL,
	roomId INT NOT NULL,
);

CREATE TABLE usersandtrackercontainers(
	userId INT NOT NULL,
	trackercontainerId INT NOT NULL
);
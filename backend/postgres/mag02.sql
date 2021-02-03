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
	createdat TIMESTAMP,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE directchat (
	id BIGSERIAL PRIMARY KEY,
	userid1 INT NOT NULL,
	userid2 INT NOT NULL,
	createdat TIMESTAMP,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE directmessage(
	id BIGSERIAL PRIMARY KEY,
	authorid INT NOT NULL,
	receiverid INT NOT NULL,
    directchatid INT NOT NULL,
	content TEXT NOT NULL,
	replyId INT,
	privatereplyid INT,
	createdat TIMESTAMP,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE room (
	id BIGSERIAL PRIMARY KEY,
    creatorid INT NOT NULL,
	name VARCHAR NOT NULL,
	description VARCHAR,
	createdat TIMESTAMP,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE channel (
	id BIGSERIAL PRIMARY KEY,
    creatorid INT NOT NULL,
    roomid INT NOT NULL,
	name VARCHAR NOT NULL,
	createdat TIMESTAMP,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roommessage (
	id BIGSERIAL PRIMARY KEY,
    creatorid INT NOT NULL,
	roomid INT NOT NULL,
	channelid INT NOT NULL,
	content TEXT NOT NULL,
	replyid INT,
	forwarded INT,
	createdat TIMESTAMP,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trackercontainer (
	id BIGSERIAL PRIMARY KEY,
    creatorid INT NOT NULL,
	name VARCHAR NOT NULL,
	description VARCHAR,
	createdat TIMESTAMP,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorycontainer (
    id BIGSERIAL PRIMARY KEY,
    creatorid INT NOT NULL,
    trackercontainerid INT NOT NULL,
	name VARCHAR NOT NULL,
    description VARCHAR,
	createdat TIMESTAMP,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tracker(
	id BIGSERIAL PRIMARY KEY,
    creatorid INT NOT NULL,
    trackercontainerid INT NOT NULL,
    categorycontainerid INT NOT NULL,
	name VARCHAR NOT NULL,
	content TEXT,
	createdat TIMESTAMP,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trackercomment (
	id BIGSERIAL PRIMARY KEY,
    creatorid INT NOT NULL,
	trackercontainerid INT NOT NULL,
	categorycontainerid INT NOT NULL,
	trackerid INT NOT NULL,
	content TEXT NOT NULL,
	createdat TIMESTAMP,
	updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subtrackers (
	parenttrackerid INT NOT NULL,
	childtrackerid INT NOT NULL
);

CREATE TABLE linkedtrackers (
	trackerid1 INT NOT NULL,
	trackerid2 INT NOT NULL
);

CREATE TABLE assignees (
    assigneeid INT NOT NULL,
    trackerid INT NOT NULL
);
CREATE TABLE usersandrooms (
	userid INT NOT NULL,
	roomid INT NOT NULL
);

CREATE TABLE usersandtrackercontainers(
	userid INT NOT NULL,
	trackercontainerid INT NOT NULL
);
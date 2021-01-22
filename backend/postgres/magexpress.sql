CREATE TABLE person (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR UNIQUE NOT NULL,
  last_name VARCHAR UNIQUE NOT NULL,
  user_name VARCHAR UNIQUE NOT NULL,
  company_name VARCHAR,
  email VARCHAR NOT NULL,
  password VARCHAR(60) NOT NULL,
  status ('offline', 'online'),
  chatrooms INT,
  trackercontainers INT,
  created_at TIMESTAMP
);

CREATE TABLE directmessage (
  id BIGSERIAL PRIMARY KEY,
  creator INT NOT NULL,
  content TEXT NOT NULL,
  receiver INT NOT NULL,
  created_at TIMESTAMP
);

CREATE TABLE trackercontainer (
  id BIGSERIAL PRIMARY KEY,
  description TEXT,
  allowedusers INT,
  categorycontainers INT,
  created_at TIMESTAMP
);
CREATE TABLE role (
  id BIGSERIAL PRIMARY KEY,
  label VARCHAR NOT NULL,
  chatroom INT,
  channel INT,
  relatesto INT,
  created_at TIMESTAMP
);
CREATE TABLE tracker (
  id BIGSERIAL PRIMARY KEY,
  reporter INT NOT NULL,
  content TEXT NOT NULL,
  assignees INT,
  linkedtrackers INT,
  childtrackers INT,
  comments INT,
  created_at TIMESTAMP
);

CREATE TABLE categorycontainer (
  id bigserial PRIMARY KEY,
  description TEXT,
  container INT NOT NULL,
  label VARCHAR NOT NULL,
  trackers INT,
  created_at TIMESTAMP
);

CREATE TABLE trackercomments (
  id bigserial PRIMARY KEY,
  creator INT NOT NULL,
  content TEXT NOT NULL,
  categorycontainers INT NOT NULL,
  created_at TIMESTAMP
);

CREATE TABLE chatroom (
  id bigserial PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT,
  members INT,
  room_channels INT,
  created_at TIMESTAMP
);

CREATE TABLE roomchannel (
  id bigserial PRIMARY KEY,
  name VARCHAR NOT NULL,
  creator INT NOT NULL,
  members INT,
  room INT NOT NULL,
  created_at TIMESTAMP
);

CREATE TABLE roommessage (
  id bigserial PRIMARY KEY,
  creator INT NOT NULL,
  channel INT NOT NULL,
  content TEXT NOT NULL,
  forwarded INT,
  replyto INT,
  privatereplyto INT,
  created_at TIMESTAMP
);
ALTER TABLE person ADD FOREIGN KEY (chatrooms) REFERENCES chatroom (id);

ALTER TABLE person ADD FOREIGN KEY (trackercontainers) REFERENCES trackercontainer (id);

ALTER TABLE directmessage ADD FOREIGN KEY (creator) REFERENCES person (id);

ALTER TABLE directmessage ADD FOREIGN KEY (receiver) REFERENCES person (id);

ALTER TABLE chatroom ADD FOREIGN KEY (members) REFERENCES person (id);

ALTER TABLE chatroom ADD FOREIGN KEY (room_channels) REFERENCES roomchannel (id);

ALTER TABLE roomchannel ADD FOREIGN KEY (room) REFERENCES chatroom (id);

ALTER TABLE roomchannel ADD FOREIGN KEY (members) REFERENCES person (id);

ALTER TABLE roommessage ADD FOREIGN KEY (channel) REFERENCES roomchannel (id);

ALTER TABLE roommessage ADD FOREIGN KEY (replyto) REFERENCES roommessage (id);

ALTER TABLE roommessage ADD FOREIGN KEY (privatereplyto) REFERENCES person (id);

ALTER TABLE categorycontainer ADD FOREIGN KEY (container) REFERENCES trackercontainer (id);

ALTER TABLE trackercontainer ADD FOREIGN KEY (categorycontainers) REFERENCES categorycontainer (id);

ALTER TABLE trackercontainer ADD FOREIGN KEY (allowedusers) REFERENCES person (id);

ALTER TABLE categorycontainer ADD FOREIGN KEY (trackers) REFERENCES tracker (id);

ALTER TABLE tracker ADD FOREIGN KEY (reporter) REFERENCES person (id);

ALTER TABLE tracker ADD FOREIGN KEY (assignees) REFERENCES person (id);

ALTER TABLE tracker ADD FOREIGN KEY (childtrackers) REFERENCES tracker (id);

ALTER TABLE tracker ADD FOREIGN KEY (linkedtrackers) REFERENCES tracker (id);

ALTER TABLE trackercomments ADD FOREIGN KEY (creator) REFERENCES person (id);

ALTER TABLE trackercomments ADD FOREIGN KEY (categorycontainers) REFERENCES categorycontainer (id);

ALTER TABLE tracker ADD FOREIGN KEY (comments) REFERENCES trackercomments (id);

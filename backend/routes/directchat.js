const express = require('express');
const directchatroute = express.Router();
const directchat = require('../controllers/directchat.controller');
const directmessage = require('../controllers/directmessage.controller');

directchatroute.post('/',directchat.createDirectChat);
directchatroute.get('/',directchat.findAllDirectchatOfUser);
directchatroute.delete('/:directchatid',directchat.deleteDirectChat);
directchatroute.delete('/',directchat.deleteDirectChat);
directchatroute.delete('/',directchat.deleteFewDirectChat);
directchatroute.delete('/',directchat.findOneDirectChat);
directchatroute.post('/:directchatid',directmessage.createDirectMessage);
directchatroute.get('/:directchatid',directmessage.findAllDirectMessages);
directchatroute.delete('/:directchatid',directmessage.deleteDirectMessage);
directchatroute.delete('/:directchatid',directmessage.deleteAllDirectMessages);
module.exports = directchatroute;
const express = require('express');
const channelroute = express.Router();
const channel = require('../controllers/roomchannel.controller');
const roommessage = require('../controllers/roommessage.controller');
channelroute.post('/',channel.createChannel);
channelroute.get('/',channel.findAllChannels);
channelroute.get('/',channel.findOneChannel);
channelroute.put('/:channelid/channelinfo',channel.updateChannel);
channelroute.delete('/:channelid/channelinfo',channel.deleteChannel);
channelroute.post('/:channelid',roommessage.createRoomMessage);
channelroute.get('/:channelid',roommessage.findAllRoomMessages);
channelroute.put('/:channelid',roommessage.updateRoomMessage);
channelroute.delete('/:channelid',roommessage.deleteAllMessages);

module.exports = channelroute;

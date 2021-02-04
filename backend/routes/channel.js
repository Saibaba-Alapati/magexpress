const express = require('express');
const channelroute = express.Router();
const channel = require('../controllers/roomchannel.controller');
const roommessage = require('../controllers/roommessage.controller');
channelroute.post('/',channel.createChannel)
    .get('/',channel.findAllChannels)
    .get('/',channel.findOneChannel)
    .put('/:channelid/channelinfo',channel.updateChannel)
    .delete('/:channelid/channelinfo',channel.deleteChannel)
    .post('/:channelid',roommessage.createRoomMessage)
    .get('/:channelid',roommessage.findAllRoomMessages)
    .put('/:channelid',roommessage.updateRoomMessage)
    .delete('/:channelid',roommessage.deleteAllMessages);

module.exports = channelroute;

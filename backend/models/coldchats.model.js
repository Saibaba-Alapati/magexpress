const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const {Chatroom} = require('./chatroom.model');
const RoomMessage = require('./messages.model');
const joiColdChatContainer= joi.object().keys({
    room : Chatroom.required(),
    coldchat : joi.array().items(RoomMessage),
});

var coldChatContainer = new mongoose.Schema(joigoose.convert(joiColdChatContainer));
module.exports = mongoose.model('RoomColdChat', coldChatContainer);
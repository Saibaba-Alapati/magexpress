const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const {Chatroom} = require('./chatroom.model');
const RoomMessage = require('./messages.model');
const joiHotChatContainer= joi.object().keys({
    room : Chatroom.required(),
    roommessages: joi.array().items(RoomMessage).min(1).max(100),
});

var hotChatContainer = new mongoose.Schema(joigoose.convert(joiHotChatContainer));
module.exports = mongoose.model('RoomHotChat', hotChatContainer);
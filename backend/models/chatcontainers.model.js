const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const {Chatroom} = require('./chatroom.model');
const {RoomHotChat} = require('./hotchats.model');
const {RoomColdChat} = require('./coldchats.model');

const joiChatContainer = joi.object().keys({
    room : Chatroom.required(),
    hotchat : RoomHotChat.required(),
    coldchat : RoomColdChat.required(),
});

var chatContainer = new mongoose.Schema(joigoose.convert(joiChatContainer)); //for room only
module.exports = mongoose.model('RoomChat', chatContainer);
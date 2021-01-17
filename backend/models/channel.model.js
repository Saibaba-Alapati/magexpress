const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const {Chatroom} = require('./chatroom.model');
const {RoomChat} = require('./chatcontainers.model');

const joiChannelSchema = joi.object().keys({
    room : Chatroom.required(),
    chatcontainer  : RoomChat.required(),
});


var channelSchema = new mongoose.Schema(joigoose.convert(joiChannelSchema));
module.exports = mongoose.model('RoomChannel',channelSchema);
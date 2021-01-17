const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const {Chatroom} = require('./chatroom.model');

const joiRoomMessage = joi.object().keys({
    belong: Chatroom.required(),
    created : joi.date().timestamp(),
    message : joi.object(),
    author : joi.string(),// use user reference here
})
var roomMessageSchema = new mongoose.Schema(joigoose.convert(joiRoomMessage));

module.exports = mongoose.model('RoomMessage', roomMessageSchema);
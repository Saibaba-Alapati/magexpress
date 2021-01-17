const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const {Chatroom} = require('./chatroom.model');
const User = require('./User.model');
const joiDirectMessage = joi.object().keys({
    created : joi.date().timestamp(),
    message : joi.object(),
    author : User.required(),
    receiver : User.required(),
});
const joiRoomMessage = joi.object().keys({
    room: Chatroom.required(),
    created : joi.date().timestamp(),
    message : joi.object(),
    author : User.required(),
});
var directMessageSchema = new mongoose.Schema(joigoose.convert(joiDirectMessage));
var roomMessageSchema = new mongoose.Schema(joigoose.convert(joiRoomMessage));
module.exports = mongoose.model('DirectMessage', directMessageSchema);
module.exports = mongoose.model('RoomMessage', roomMessageSchema);
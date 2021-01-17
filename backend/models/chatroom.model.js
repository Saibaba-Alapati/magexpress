const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const User = require('./User.model');
const RoomChannel= require('./channel.model');

const joiChatroomSchema = joi.object().keys({
    roomname: joi.string().required(),
    creator : User.required(), //use user reference here change it later.
    roomdescription : joi.string(), //chatroom description.
    roommembers : joi.array().items(User),// use user references here changelater.
    roompicture : joi.string(),// use media and figure out how.
    roomchannels : joi.array().items(RoomChannel),//use references for chat channels
    created : joi.date().timestamp(),
});


var chatroomSchema = new mongoose.Schema(joigoose.convert(joiChatroomSchema));
module.exports = mongoose.model('Chatroom', chatroomSchema);


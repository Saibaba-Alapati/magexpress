const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const User = require('./User.model');
const Chatroom = require('./chatroom.model');
const TrackerContainer = require('./tracker.model')
const joiRoleSchema = joi.object().keys({
    created : joi.date().timestamp(),
    creator : User.required(),
    connections  : joi.array().items(joi.alternatives().try(Chatroom,TrackerContainer)),
    onlyusers  : joi.array().items(User),
});


var roleSchema = new mongoose.Schema(joigoose.convert(joiRoleSchema));
module.exports = mongoose.model('Role',roleSchema );

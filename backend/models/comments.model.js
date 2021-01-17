const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const User = require('./User.model');
const {Tracker,TrackerContainer}= require('./tracker.model');
const joiTrackerCommentSchema = joi.object().keys({
    created : joi.date().timestamp(),
    tracker: Tracker.required(),
    container  :TrackerContainer.required(),
    comments : joi.object(),
    author  : User.required(),
})

var trackerCommentSchema = new mongoose.Schema(joigoose.convert(joiTrackerCommentSchema));
module.exports = mongoose.model('TrackerComment',trackerCommentSchema );
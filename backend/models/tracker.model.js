const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const User = require('./User.model');
const TrackerComment = require('./comments.model')
const joiTrackerSchema = joi.object().keys({
    name: User.required(),
    tracker : joi.object(),
    category: joigoose.string(), //choose from global or local variables
    comments : joi.array().items(TrackerComment),
    linktask : joi.array().items(joi.link('#joiTrackerSchema')),
    subtasks:joi.array().items(joi.link('#joiTrackerSchema')),
    status : joi.string(),
    nest  : joi.array().items(), // user  references of different trackers
    Assignees  : joi.array.items(User), // Store user references here
    created :joi.date().timestamp(),
});
const joiTrackerContainer = joi.object().keys({
    containername : joi.string(),
    connection  : joi.string(), //replace it with reference
    creator : User.required(),
    trackers : joi.array().items(joiTrackerSchema),
    locallabels  : joi.array().items(joi.string()),// store label references here
    localcategories  : joi.array().items(),
    onlyusers  : joi.array().items(User.required()),
    created : joi.date().timestamp(),
})
var trackerContainerSchema = new mongoose.Schema(joigoose.convert(joiTrackerContainer));
var trackerSchema = new mongoose.Schema(joigoose.convert(joiTrackerSchema))
module.exports = mongoose.model('TrackerContainer', trackerContainerSchema);
module.exports = mongoose.model('Tracker', trackerSchema);
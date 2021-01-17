const mongoose = require('mongoose');
const joi = require('joi');
const joigoose = require('joigoose')(mongoose);
const User = require('./User.model');
const joiTrackerSchema = joi.object().keys({
    name: User.required(),
    tracker : joi.object(),
    category: joigoose.string(), //choose from global or local variables
    comments : joi.array().items(joi.object().keys({
        created : joi.date().timestamp(),
        comments : joi.object(),
        author  : joi.string(), //use userreference here change later
    })),
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
    creator : User.required(), //replace with the userreference
    trackers : joi.array().items(joiTrackerSchema),
    locallabels  : joi.array().items(joi.string()),// store label references here
    localcategories  : joi.array().items(),
    onlyusers  : joi.array().items(), // use user references later here
    created : joi.date().timestamp(),
})
var trackerSchema = new mongoose.Schema(joigoose.convert(joiTrackerContainer));

module.exports = mongoose.model('TrackerContainer', trackerSchema);
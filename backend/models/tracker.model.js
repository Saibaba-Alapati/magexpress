const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const trackerSchema = new Schema({
    name: {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
    description : {type:Object},
    category: String, //choose from global or local variables
    comments : {type: mongoose.Schema.Types.ObjectId, ref: 'TrackerComment',required: true},
    linktask : [{type: mongoose.Schema.Types.ObjectId, ref: 'Tracker'}],
    subtasks:[{type: mongoose.Schema.Types.ObjectId, ref: 'Tracker'}],//should nest
    status : {type:String,required:true,enum:['active','backlog']},
    nest  : [], // user  references of different trackers
    Assignees  : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], // Store user references here
},{
    timestamps: { createdAt: true, updatedAt: true }
});
const trackerContainerSchema = new Schema({
    containername : {type:String, required: true},
    connection  : [{type: mongoose.Schema.Types.ObjectId}],
    creator : {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
    trackers : [{type: mongoose.Schema.Types.ObjectId, ref: 'Tracker',required: true}],
    categories  : [{type: String}],
    onlyrole  : [{type: mongoose.Schema.Types.ObjectId, ref: 'Role',required: true}],
},{
    timestamps: { createdAt: true, updatedAt: true }
})
module.exports = mongoose.model('TrackerContainer', trackerContainerSchema);
module.exports = mongoose.model('Tracker', trackerSchema);
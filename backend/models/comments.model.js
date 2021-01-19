const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const trackerCommentSchema = new Schema({
    author  : {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
    comments : {type:Object},
    tracker: {type: mongoose.Schema.Types.ObjectId, ref: 'Tracker',required: true},
    container  :{type: mongoose.Schema.Types.ObjectId, ref: 'TrackerContainer',required: true}
},{
    timestamps: { createdAt: true, updatedAt: true }
})
const roomThreadCommentSchema = new Schema({
    author  : {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
    comments : {type:Object},
    room : {type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom',required: true},
    channel  : {type: mongoose.Schema.Types.ObjectId, ref: 'RoomChannel',required: true},
    thread : {type: mongoose.Schema.Types.ObjectId, ref: 'RoomThread',required: true},
},{
    timestamps: { createdAt: true, updatedAt: true }
})
module.exports = mongoose.model('TrackerComment',trackerCommentSchema );
module.exports = mongoose.model('RoomThreadComment',roomThreadCommentSchema );
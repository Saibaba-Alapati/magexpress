const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    room : {type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom',required : true},
    chatcontainer :{type: mongoose.Schema.Types.ObjectId, ref: 'ChatContainer',required : true},
});

module.exports = mongoose.model('RoomChannel',channelSchema);
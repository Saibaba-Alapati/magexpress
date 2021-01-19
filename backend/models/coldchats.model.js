const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coldChatContainerSchema= new Schema({
    room : {type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom',required: true},
    chatconatiner : {type: mongoose.Schema.Types.ObjectId, ref: 'ChatContainner',required: true},
    coldchat : [{type: mongoose.Schema.Types.ObjectId, ref: 'RoomMessage'}]
});

module.exports = mongoose.model('RoomColdChat', coldChatContainerSchema);
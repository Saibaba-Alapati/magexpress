const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hotChatContainerSchema= new Schema({
    room : {type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom',required: true},
    chatconatiner: {type: mongoose.Schema.Types.ObjectId, ref: 'ChatContainer',required: true},
    hotchat: [{type: mongoose.Schema.Types.ObjectId, ref: 'RoomMessage'}],// need to set min and max limits
});

module.exports = mongoose.model('RoomHotChat', hotChatContainerSchema);
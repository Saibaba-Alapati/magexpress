const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatContainerSchema = new Schema({
    room : {type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom',required: true},
    hotchat : {type: mongoose.Schema.Types.ObjectId, ref: 'RoomHotChat',required: true},
    coldchat : {type: mongoose.Schema.Types.ObjectId, ref: 'RoomColdChat',required: true},
});
module.exports = mongoose.model('ChatContainer', chatContainerSchema);
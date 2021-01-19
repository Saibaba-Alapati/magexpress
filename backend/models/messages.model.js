const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const directMessageSchema = new Schema({
    message : {type:Object},
    author : {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
    receiver : {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
}, {
    timestamps: { createdAt: true, updatedAt: true }
});
const roomMessageSchema = new Schema({
        room: {type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom',required: true},
        channel  : {type: mongoose.Schema.Types.ObjectId, ref: 'RoomChannel',required: true},
        author : {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
        message : {type:Object},
}, {
    timestamps: { createdAt: true, updatedAt: true }
})
module.exports = mongoose.model('DirectMessage', directMessageSchema);
module.exports = mongoose.model('RoomMessage', roomMessageSchema);

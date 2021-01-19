const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roomThreadSchema =new Schema({
    room: {type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom',required: true},
    channel  : {type: mongoose.Schema.Types.ObjectId, ref: 'RoomChannel',required: true},
    author : {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
    message : {type:Object},
    comments : [{type: mongoose.Schema.Types.ObjectId, ref: 'RoomThreadComment'}],
},{
    timestamps: { createdAt: true, updatedAt: true }
});

module.exports =  new mongoose.Schema('roomThread',roomThreadSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roleSchema = new Schema({
    creator : {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
    connections  : {type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom'},
    onlyusers  : [{type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true}],
},{
    timestamps: { createdAt: true, updatedAt: true }
});


module.exports = mongoose.model('Role',roleSchema );

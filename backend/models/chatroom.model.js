const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chatroomSchema = new Schema({
    roomname: {type: String, required: true},
    creator : {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
    roomdescription : {type: String, required: true}, //chatroom description.
    // roommembers : [{type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true}],
    roompicture : {type:String, required: true},// use media and figure out how.
    roomchannels : [{type: mongoose.Schema.Types.ObjectId, ref: 'RoomChannel',required: true}],//need to set minim sizes
},{
    timestamps: { createdAt: true, updatedAt: true }
});


module.exports = mongoose.model('Chatroom', chatroomSchema);


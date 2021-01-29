const ChatRoom = require('../models/chatroom');
const RoomMessage = require('../models/roommessage')
const RoomChannel = require('../models/roomchannel')

// Create and Save a new roomchannel
exports.create = (req, res) => {


};

// Retrieve all channels of a room from the database.
exports.findAll = (req, res) => {
    RoomChannel.findAll({where: {room : req.body.room}})
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};

// Find a single channel with an id
exports.findOne = (req, res) => {
    RoomChannel.findOne({where: { id  : req.body.id}})
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};

// Update a roomchannel by the id in the request
exports.update = (req, res) => {
    RoomChannel.update({name : req.body.name},{where: {id  : req.body.id}})

};

exports.deleteChannel = (req, res) => {
    const channelId = req.params.channelId;
    RoomMessage.destroy({where: {channel: channelId}})
        .then(num => {
            if (num === 1) {
            res.send({
                message: "deleted all directmessages successfully."
            });
            } else {
            res.send({
                message: "can't find directmessages."
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete directmessages."
            });
        });
        RoomChannel.destroy({where: {id: channelId}})
        .then(num => {
            if (num === 1) {
            res.send({
                message: "deleted all directmessages successfully."
            });
            } else {
            res.send({
                message: "can't find directmessages."
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete directmessages."
            });
        });
};
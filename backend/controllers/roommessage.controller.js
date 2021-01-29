const RoomMessage = require('../models/roommessage')
const RoomChannel = require('../models/roomchannel');
// Create and Save a new Tutorial
exports.create = (req, res) => {
    const channelId = req.params.channelId;
    const chatroomId   = req.params.chatroomId;
    const userId = req.params.userId;
    RoomMessage.create({channel: channelId,room: chatroomId,creator: userId,content: req.body.content,forwarded:0})
};

// Retrieve all roommessages from the database.
exports.findAll = (req, res) => {
    RoomMessage.findAll({directchat : req.body.directchatId})
        .then(data =>  {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};

// Find a single roommessage with an id
exports.findOne = (req, res) => {
    RoomMessage.findOne()
        .then(data =>  {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};

// Update a Tutorial by the id in the request
exports.updateRoomMessage = (req, res) => {
    RoomMessage.update({where: {id  : req.body.roommessageId}})
        .then(data =>  {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};

// Delete a Tutorial with the specified id in the request
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

// Delete all directMessages from the database.
exports.deleteAllMessages = (req, res) => {
    RoomMessage.destroy({where: {directchat: req.channelId}})
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

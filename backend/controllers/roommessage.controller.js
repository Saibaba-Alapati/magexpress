const RoomMessage = require('../models/roommessage')
// CREATE AND SAVE ROOM MESSAGE
exports.createRoomMessage = (req, res) => {
    RoomMessage.create({
        creatorid: req.params.userid,
        channelid: req.params.channelid,
        roomid: req.params.roomid,
        content: req.body.content
    })
};

// FIND ALL ROOM MESSAGES
exports.findAllRoomMessages = (req, res) => {
    RoomMessage.findAll({
        where : {
            channelid : req.body.channelid
        }
    })
        .then(data =>  {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Could not find all room messages. ",
            })
        })
};

// FIND A ROOM MESSAGE
exports.findOne = (req, res) => {
    RoomMessage.findOne({
        where: {
            id : req.body.roommessageid,
        }
    })
        .then(data =>  {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Could not find roommessage. " ,
            })
        })
};

// UPDATE A ROOM MESSAGE
exports.updateRoomMessage = (req, res) => {
    RoomMessage.update({
        where: {
            id  : req.body.roommessageid,
        }
    })
        .then(data =>  {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Could not upadte roommessage. ",
            })
        })
};

// NOT REQUIRED
// DELETE ROOM MESSAGES
exports.deleteAllMessages = (req, res) => {
    RoomMessage.destroy({where: {directchat: req.roomId}})
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    " Deleted all directmessages successfully. "
            });
            } else {
            res.send({
                message:
                    " Could not find directmessages."
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Could not delete directmessages."
            });
        });
};

const RoomMessage = require('../models/roommessage')
const Channel = require('../models/channel');
// CREATE AND SAVE ROOM MESSAGE
exports.create = (req, res) => {
    RoomMessage.create({
        creatorid: req.params.userid,
        channelid: req.params.channelid,
        roomid: req.params.roomid,
        content: req.body.content
    })
};

// FIND ALL ROOM MESSAGES
exports.findAll = (req, res) => {
    RoomMessage.findAll({
        where : {
            directchatid : req.body.directchatid
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
            id : req.body.id
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
            id  : req.body.id
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

// DELETE A CHANNEL
exports.deleteChannel = (req, res) => {
    RoomMessage.destroy({where: {channelid : req.params.channelid}})
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    "deleted all directmessages successfully."
            });
            } else {
            res.send({
                message:
                    " Could not find directmessages. "
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Could not delete directmessages."
            });
        });
        Channel.destroy({where: {id: req.params.channelid}})
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
                err.message || " Could not delete directmessages. "
            });
        });
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

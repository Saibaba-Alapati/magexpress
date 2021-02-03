const DirectChat = require('../models/directchat');
const DirectMessage  = require('../models/directmessage');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// CREATE SAVE DIRECT CHAT
exports.create = (req, res) => {
    DirectChat.create({
        userid1: req.params.userid1,
        userid2: req.params.userid2,
    },)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Not able to create direct chat. ",
            })
        })
};

// FIND ALL DIRECT CHATS OF THE USER
exports.findAllDirectchatOfUser = (req, res) => {
    DirectChat.findAll(
        {
            where:{
                [Op.or]  : [{
                    userid1: req.params.userid
                },
                {userid2: req.params.userid
                }
            ]
            }
        }
    )
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Not able to get all user realted directchats. "
            })
        })
};

// FIND DIRECT CHAT
exports.findOneDirectChat = (req, res) => {
    DirectChat.findById(req.params.directchatid)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Not able to find direct chat. "
            })
        })
};

// DELETE A DIRECT CHAT
exports.deleteDirectChat = (req, res) => {
    DirectMessage.destroy({
        where: {
            directchatid: req.params.directchatid
        }
    })
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    " Deleted all directmessages successfully. "
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
            message: " Could not delete directmessages. "
            });
        });
        DirectChat.destroy({
            where: {
                id: req.params.directchatid
            }
        })
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    " Deleted all directmessages successfully. "
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
};

//revise and reviseandfix
// DELETE FEW DIRECT CHATS
exports.deleteFew = (req, res) => {
    DirectMessage.destroy({
        where: {
            directchatid: req.params.chatids
        }
    })
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    " Deleted all directmessages successfully. "
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
                err.message || " Could not delete directmessages. "
            });
        });
    DirectChat.destroy({
        where:{
            id : req.params.chatIds
        }
    })
        .then(num => {
            if (num === 1) {
            res.send({
                message:
                    " Deleted directchats successfully. "
            });
            } else {
            res.send({
                message:
                    " Could not find directchats. "
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not delete directchats. "
            });
        });
};

const DirectChat = require('../models/directchat');
const DirectMessage  = require('../models/directmessage');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// CREATE SAVE DIRECT CHAT
exports.createDirectChat = (req, res) => {
    DirectChat.create({
        userid1: req.params.userid,
        userid2: req.body.otheruserid,
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
                {
                    userid2: req.params.userid
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
    DirectChat.findById(req.body.directchatid)
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
//from body and params
// DELETE A DIRECT CHAT
exports.deleteDirectChat = (req, res) => {
    DirectMessage.destroy({
        where: {
            directchatid: (!req.params.directchatid) ? req.body.directchatid : req.params.directchatid ,
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
                id: (!req.params.directchatid) ? req.body.directchatid : req.params.directchatid ,
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
exports.deleteFewDirectChat = (req, res) => {
    DirectMessage.destroy({
        where: {
            directchatid: req.body.directchatids
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
            id : req.body.directchatids
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

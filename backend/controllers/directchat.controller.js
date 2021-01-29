const DirectChat = require('../models/directchat');
const DirectMessage  = require('../models/directmessage');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
// Create and Save a new DirectChat
exports.create = (req, res) => {
    const userId1 = req.params.userId1;
    const userId2 = req.params.userId2;
    DirectChat.create({
        user1_id: userId1,
        user2_id: userId2,
    },)
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};

// Retrieve all Directchats of user from the database.
exports.findAllDirectchatOfUser = (req, res) => {
    DirectChat.findAll(
        {
            where:{
                [Op.or]  : [{user1_iId: req.params.userId}, {user2_id: req.params.userId}]
            }
        }
    )
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};

// Find get and directchat with an id
exports.findOneDirectChat = (req, res) => {
    const directchatId = req.params.directchatId;
    DirectChat.findById(directchatId)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: "Operation not completed due to following error: " + err,
            })
        })
};

// Delete a directchat with the specified id in the request
exports.deleteDirectChat = (req, res) => {
    const directchatId = req.params.directchatId;
    DirectMessage.destroy({where: {directchat: directchatId}})
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
        DirectChat.destroy({where: {id: directchatId}})
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

//revise and reviseandfix
// Delete few directchats from the database.
exports.deleteFew = (req, res) => {
    DirectMessage.destroy({where: {directchat: req.params.chatIds}})
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
    DirectChat.destroy({where:{id : req.params.chatIds}})
        .then(num => {
            if (num === 1) {
            res.send({
                message: "deleted directchats successfully."
            });
            } else {
            res.send({
                message: "can't find directchats."
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete directchats."
            });
        });
};

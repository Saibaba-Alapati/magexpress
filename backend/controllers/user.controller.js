const User = require('../models/person');
const TrackerContainer = require('../models/trackercontainer');
const UserAndTCS = require('../models/usersandtrackercontainers');
const Tracker =  require('../models/tracker');
const TrackerComment = require('../models/trackercomment');
const CategoryContainer = require('../models/categorycontainer');
exports.create = (req,res) => {
    if(!req.body.first_name){
        res.status(400).send({
            message: "Firstname cannot be empty!"
        })
        return;
    }
    if(!req.body.last_name){
        res.status(400).send({
            message: "Lastname cannot be empty!"
        })
        return;
    }
    if(!req.body.user_name){
        res.status(400).send({
            message: " Username cannot be empty!"
        })
        return;
    }
    if(!req.body.email){
        res.status(400).send({
            message: "Email cannot be empty!"
        })
        return;
    }
    if(!req.body.password){
        res.status(400).send({
            message: " Password cannot be empty!"
        })
        return;
    }
    const user = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        user_name: req.body.username,
        email : req.body.email,
        password : req.body.password,
    };
    User.create(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
}
exports.findOne = (req, res) =>{
    const userId = req.params.userId;
    User.findByPk(userId)
        .then(data=>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "user not found."
            })
        })
}

exports.update = (req,res) => {
    const userId = req.params.userId;
    User.update(
        {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            user_name: req.body.username,
            email : req.body.email,
        },
        {
        where: { id: userId }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "User info updated successfully!"
                });
            } else {
            res.send({
                message: `User not found.`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: " Could not update User info."
        });
        });
}
exports.updatePassword = (req,res) => {
    const userId = req.params.userId;
    User.update(
        {
            password : req.body.password,
        },
        {
        where: { id: userId }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
            res.send({
                message:"Password has been updated successfully!"
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not update password."
        });
        });
}

exports.deleteUserandInfo = (req,res) => {
    const userId = req.params.userId;
    TrackerComment.destroy({creator : userId});
    Tracker.destroy({where: {reporter: userId}});
    CategoryContainer.destroy({where: {creator : userId}});
    UserAndTCS.destroy({where: {creator : userId}});
    TrackerContainer.destroy({where: {creator : userId}});
    User.destroy({
        where: { id: userId }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "User account and info deleted successfully."
                });
            } else {
            res.send({
                message: `User account and info deletes successfully.`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete User account and info."
        });
        });
}


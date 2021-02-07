const User = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/person');
const TrackerContainer = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/trackercontainer');
const UserAndTCS = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/usersandtrackercontainers');
const Tracker =  require('/Users/saibabaalapati/Desktop/magexpress/backend/models/tracker');
const TrackerComment = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/trackercomment');
const CategoryContainer = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/categorycontainer');
exports.create = (req,res) => {
    if(!req.body.firstname){
        res.status(400).send({
            message:
                "Firstname cannot be empty!"
        })
        return;
    }
    if(!req.body.lastname){
        res.status(400).send({
            message:
                "Lastname cannot be empty!"
        })
        return;
    }
    if(!req.body.username){
        res.status(400).send({
            message:
                " Username cannot be empty!"
        })
        return;
    }
    if(!req.body.email){
        res.status(400).send({
            message:
                "Email cannot be empty!"
        })
        return;
    }
    if(!req.body.password){
        res.status(400).send({
            message:
                " Password cannot be empty!"
        })
        return;
    }
    User.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        username: req.body.username,
        email : req.body.email,
        password : req.body.password,
    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Some error occurred while creating the Tutorial. "
            });
        });
}
exports.findOne = (req, res) =>{
    User.findByPk(req.params.userid)
        .then(data=>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " User not found. "
            })
        })
}

exports.update = (req,res) => {
    User.update(
        {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            username: req.body.username,
            email : req.body.email,
        },
        {
        where: {
            id: req.params.userid
        }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message:
                        " User info updated successfully! "
                });
            } else {
            res.send({
                message:
                    ' User not found. '
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not update User info. "
        });
        });
}
exports.updatePassword = (req,res) => {
    User.update(
        {
            password : req.body.password,
        },
        {
        where: {
            id: req.params.userid
        }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message:
                        " Tutorial was deleted successfully! "
                });
            } else {
            res.send({
                message:
                    " Password has been updated successfully! "
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not update password. "
        });
        });
}

exports.deleteUserandInfo = (req,res) => {
    TrackerComment.destroy({creatorid : req.params.userid});
    Tracker.destroy({where: {creatorid: req.params.userid}});
    CategoryContainer.destroy({where: {creatorid : req.params.userid}});
    UserAndTCS.destroy({where: {creatorid : req.params.userid}});
    TrackerContainer.destroy({where: {creatorid : req.params.userid}});
    User.destroy({
        where: {
                id: req.params.userid
        }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message:
                        " User account and info deleted successfully. "
                });
            } else {
            res.send({
                message:
                    ' User account and info deletes successfully.'
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not delete User account and info. "
        });
        });
}


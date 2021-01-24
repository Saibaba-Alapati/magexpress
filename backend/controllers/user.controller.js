const initModels = require('../models/init-models');
const sequelize = require("sequelize");
const models = initModels(sequelize);
const User = models.person;
const bcrypt = require('bcrypt');
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
        password : bcrypt.hashSync(req.body.password, 10),
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

exports.update = (req,res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
            res.send({
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
        });
        });
}

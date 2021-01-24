const initModels = require('../models/init-models');
const sequelize = require("sequelize");
const models = initModels(sequelize);
const TrackerContainer = models.trackercontainer;
const UserAndTCS = models.userandtcs;
// Create and Save a new TrackerContainer and creates an none category
exports.create = (req, res) => {
    if(!req.body.name){
        res.status(400).send({
            message : "name cannot be empty."
        });
        return;
    }
    const userId = req.params.userId
    const Trackercontainer = {
        name : req.body.name,
        description : req.body.description,
        creator : userId,
    }
    TrackerContainer.create(Trackercontainer)
        .then(data =>
        {
            UserAndTCS.create({user_id : data.creator,trackercontainer_id : data.id});
            res.send(data);
        })
        .catch(err =>
            res.status(500).send({
                message:
                    err.message || "Some error ocurred TrackerContainer could not be created."
            })
        )
};

// Retrieve all Trackercontainers realted to the user from the database.
exports.findAll = (req, res) => {
    const userId = req.params.userId;
    const tcId = req.params.tcId;
    UserAndTCS.findAll({where:{user_id: userId,trackercontainer_id:tcId}})
        .then(data=>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:"Cannot perform the operations due to following error" + err
            })
        })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.tcId;

    TrackerContainer.findByPk(id)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:"Error retrieving the TrackerContainer"
            });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    TrackerContainer.update({name:req.body.name,description: req.body.description},{where: {id: req.params.id},returning : true,plain:true})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:"Cannot perform the operations due to following error" + err
            })
        })
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const tcId = req.params.tcId;
    const userId = req.params.userId;

    TrackerContainer.findByPk(tcId)
        .then(data =>{
            if(data.creator === userId){
                TrackerContainer.destroy({where:{id : tcId}})
                    .then(num =>{
                        if(num === 1){
                            res.send({message: "Deletion was successful."
                            });
                        }else{
                            res.send({message: "Failed to Delete."
                        });
                    }})
                    .catch(err =>{
                        res.status(500).send({
                            message: "Couldn't find the container."
                        });
                    })
            }else{
                res.send({message: "Only creator can delete the TrackerContainers."})
            }
        })
        .catch(err => {
            res.status(500).send({
                message:"Error retrieving the TrackerContainer"
            });
        });
};

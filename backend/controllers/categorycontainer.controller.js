const initModels = require('../models/init-models');
const sequelize = require("sequelize");
const models = initModels(sequelize);
const Tracker = models.tracker;
const CategoryContainer = models.categorycontainer;

// Create and Save a new TrackerContainer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.label) {
        res.status(400).send({
            message: "Label cannot be empty."
        });
        return;
    }
    // Create a CategoryContainer
    const tcId = req.params.tcId;
    const categorycontainer = {
        label: req.body.label,
        description: req.body.description,
        trackercontainer: tcId
    };
    // Save CategoryContainer in the database
    CategoryContainer.create(categorycontainer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the CategoryContainer."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const tcId = req.params.tcId;
    CategoryContainer.findAll({where:{trackercontainer : tcId}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving category containers."
            });
        });
    };

// Find all trackers realted to categorycontainer
exports.LoadTrackers = (req, res) => {
    const ccId = req.params.ccId;
    Tracker.findAll({where:{categorycontainer : ccId}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving trackers."
            });
        });
};

// Update a CategoryContainer by the id in the request
exports.update = (req, res) => {
    CategoryContainer.update({label:req.body.label,description: req.body.description},{where: {id: req.params.ccId},returning : true,plain:true})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:"Cannot perform the operations due to following error" + err
            })
        })
};

exports.deleteallCategoryContainerswithtrackers = (req, res) => {
    const tcId = req.params.tcId;
    Tracker.destroy({where:{id : tcId}})
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
};
// Delete all trackers all category containers
exports.deleteCategoryContainerWithTrackers = (req, res) => {
    const tcId = req.params.tcId;
    Tracker.destroy({where:{trackercontainer : tcId}})
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
    CategoryContainer.destroy({where:{trackercontainer : tcId}})
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
};
exports.deleteshifttrackers = (req, res) => {
    const ccId = req.params.ccId;
    const ccId2 = req.params.ccId2;
    Tracker.update({categorycontainer: ccId2},{where:{categorycontainer : ccId2}})
        .then(num => {
            if (num === 1) {
            res.send({
                message: "Trackers of the deleted container are shifted successfully."
            });
            } else {
            res.send({
                message: `Not able to shift the trackers of deleted container`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Cannot perform the operations due to following error" + err
            });
        });
    CategoryContainer.destroy({where:{id : ccId}})
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
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    const tcId = req.params.tcId;
    CategoryContainer.destroy({where:{trackercontainer : tcId}})
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
};

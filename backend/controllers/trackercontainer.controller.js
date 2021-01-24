const initModels = require('../models/init-models');
const sequelize = require("sequelize");
const models = initModels(sequelize);
const TrackerContainer = models.trackercontainer;
const UserAndTCS = models.userandtcs;
const Tracker =  models.tracker;
// Create and Save a new TrackerContainer
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

// Find a single TrackerContainer with an id in the request
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
exports.joinTrackerContainer = (req, res) => {
    const userId = req.params.userId;
    const tcId = req.params.tcId;
    TrackerContainer.findByPk(tcId)
        .then(data =>{
            UserAndTCS.create({user_id : userId,trackercontainer_id: tcId,trackercontainercreator : data.creator})
                .then(data =>{
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:"Error retrieving the TrackerContainer"
                    });
                })
        })
        .catch(err => {
            res.status(500).send({
                message:"Error retrieving the TrackerContainer"
            });
        });

}
//check if user has access to tracker container
exports.userAccessCheck = (req,res) => {
    const userId = req.params.userId;
    const tcId = req.params.tcId;
    TrackerContainer.find({where:{user_id: userId,trackercontainer_id: tcId}})
        .then(function(data){
            if(!data){
                return 'user notfound'
            }
            return 'user found'
        })
        .catch(err => {
            res.status(500).send({
                message:"Error check for access."
            });
        });
}
// Update a TrackerContainer by the id in the request
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

// Delete all Trackers from the TrackerContainer.
exports.deleteTCandCCandTR = (req, res) => {
    const tcId = req.params.tcId;
    Tracker.destroy({where:{trackercontainer: tcId}})
        .then(num => {
            if(num === 1){
                res.send({
                    message: "Deleted all trackers of trackercontainer successfully."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while deleting all Trackers of tracker conatiners."
            });
        });
};
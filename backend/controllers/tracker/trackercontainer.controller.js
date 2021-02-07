const TrackerContainer = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/trackercontainer.js');
const UserAndTCS = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/usersandtrackercontainers');
const Tracker =  require('/Users/saibabaalapati/Desktop/magexpress/backend/models/tracker');
const TrackerComments = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/trackercomment');
const CategoryContainer = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/categorycontainer');
// CREATE AND SAVE TRACKER CONTAINER
exports.createTrackerContainer = (req, res) => {
    if(!req.body.name){
        res.status(400).send({
            message : "name cannot be empty."
        });
        return;
    }
    TrackerContainer.create({
        name : req.body.name,
        description : req.body.description,
        creatorid : req.params.userid,
    })
        .then(data =>
        {
            UserAndTCS.create({
                userid : data.creator,
                trackercontainerid : data.id
            });
            res.send(data);
        })
        .catch(err =>
            res.status(500).send({
                message:
                    err.message || " Some error ocurred TrackerContainer could not be created. "
            })
        )
};

// FIND ALL TRACKER CONTAINERS USER HAD ACCESS TO
exports.findAllContainersRelatedToUser = (req, res) => {
    UserAndTCS.findAll({
        where:{
            userid: req.params.userid
        }
    })
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Could not find all the trackercotainers user have access to. "
            })
        })
};

// FIND TRACKER CONTAINER
exports.findOneTrackerContainer = (req, res) => {
    TrackerContainer.findByPk(req.body.trackercontainerid)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Error retrieving the TrackerContainer. "
            });
        });
};

// JOIN ACCESS TO TRACKER CONTAINER
exports.joinTrackerContainer = (req, res) => {
    TrackerContainer.findByPk(req.params.trackercontainerid)
        .then(data =>{
            UserAndTCS.create({
                userid : req.params.userid,
                trackercontainerid: req.body.trackercontainerid
            })
                .then(data =>{
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || " Error retrieving the TrackerContainer"
                    });
                })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || " Error retrieving the TrackerContainer. "
            });
        });

}
// CHECK USER ACCESS
exports.userAccessCheck = (req,res) => {
    TrackerContainer.find({
        where:{
            userid: req.params.userid,
            trackercontainerid: req.params.trackercontainerid
        }
    })
        .then(function(data){
            if(!data){
                return 'user notfound'
            }else{
                const id = req.params.trackercontainerid;
                    TrackerContainer.findByPk(id)
                        .then(data =>{
                            res.send(data);
                        })
                        .catch(err => {
                            res.status(500).send({
                                message:
                                err.message || "Error retrieving the TrackerContainer"
                            });
                        });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error check for access."
            });
        });
}
// UPDATE TRACKER CONTAINER NAME
exports.updateTrackerContainer = (req, res) => {
    // VAlIDATE REQUEST
    if (!req.body.name) {
        res.status(400).send({
            message:
                " Name cannot be empty. "
        });
        return;
    }
    TrackerContainer.update({
        name:req.body.name,
        description: req.body.description
    },
    {
        where: {
            id: req.params.trackercontainerid
        },
        returning : true,
        plain:true
    })
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || " Could not update. "
            })
        })
};

// DELETE ALL TRACKERS FROM TRACKER CONTAINER
exports.deleteTCWithCCandTRandTCR = (req, res) => {
    TrackerComments.destroy({ trackercontainerid: req.body.trackercontainerid});
    Tracker.destroy({where: {trackercontainerid: req.body.trackercontainerid}});
    CategoryContainer.destroy({where: {trackercontainerid: req.body.trackercontainerid}});
    UserAndTCS.destroy({where: {trackercontainerid : req.body.trackercontainerid}});
    TrackerContainer.destroy({where:{id: req.body.trackercontainerid}})
        .then(num => {
            if(num === 1){
                res.send({
                    message:
                        " Deleted all trackers of trackercontainer successfully. "
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
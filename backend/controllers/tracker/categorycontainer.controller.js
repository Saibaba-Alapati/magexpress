const Tracker = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/tracker');
const CategoryContainer = require('/Users/saibabaalapati/Desktop/magexpress/backend/models/categorycontainer');

// CREATE AND SAVE A CATEGORY CONTAINER TO DATABASE
exports.createCategoryContainer = (req, res) => {
    // VALIDATE REQUEST
    if (!req.body.name) {
        res.status(400).send({
            message:
                " Name cannot be empty. "
        });
        return;
    }
    CategoryContainer.create({
        creatorid : req.params.userid,
        trackercontainerid: req.params.trackercontainerid,
        name: req.body.name,
        description: req.body.description,
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not create a CategoryContainer. "
            });
        });
};

// FIND ALL CATEGORY CONTAINERS OF TRACKER CONTAINER
exports.FACCOTC = (req, res) => {
    CategoryContainer.findAll({
        where:{
            trackercontainerid : req.params.trackercontainerid
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Some error occurred while retrieving category containers. "
            });
        });
    };

// FIND ALL TRACKERS OF CATEGORY CONTAINER
exports.FATOCC = (req, res) => {
    Tracker.findAll({
        where:{
            categorycontainerid : req.body.categorycontainerid
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not find trackers of category container. "
            });
        });
};

// MOVE TRACKER TO OTHER CATEGORY CONTAINER
exports.MTOCC = (req, res) => {
    Tracker.update({
        categorycontainerid : req.body.tocategorycontainerid
    },
    {
        where:{
            id: req.body.trackerid
        }
    })
        .then(num => {
            if(num === 1){
                res.send({
                    message:
                        " Shifted successfully to other category. "
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || " Could not shift the tracker. "
            });
        });
};

// UPADTE A CATEGORYCONTAINER NAME AND DESCRIPTION
exports.updateCategoryContainer = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message:
                " Name cannot be empty. "
        });
        return;
    }
    CategoryContainer.update({
        name:req.body.name,
        description: req.body.description
    },
    {
        where: {
            id: req.params.categorycontainerid
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
                    err.message || " Not able to update the category container. "
            })
        })
};


// DELETE CATEGORY CONTAINER WITH TRACKERS
exports.DCCWT = (req, res) => {
    Tracker.destroy({
        where:{
            categorycontainerid: req.body.categorycontainerid
        }
    })
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
                err.message || " Could not delete all trackers of tracker conatiners. "
            });
        });
    CategoryContainer.destroy({
        where:{
            id : req.body.categorycontainerid
        }
    })
        .then(num =>{
            if(num === 1){
                res.send({
                    message:
                        " Deletion was successful. "
                });
            }else{
                res.send({
                    message:
                        " Failed to Delete. "
                });
            }})
            .catch(err =>{
                res.status(500).send({
                    message:
                        err.message ||" Couldn't find the categorycontainer. "
                });
            })
};


// DELETE ALL TRACKERS FROM CATEGORY CONTAINER
exports.DATFCC = (req, res) => {
    Tracker.destroy({
        where:{
            categorycontainerid : req.body.categorycontainerid
        }
    })
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
                err.message || " Some error occurred while deleting all trackers of tracker conatiners. "
            });
        });
};
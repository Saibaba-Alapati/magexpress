const TrackerComments = require('../models/trackercomment');

exports.create = (req, res) =>{
    const userId = req.params.userId;
    const tcId = req.params.tcId;
    const ccId = req.params.ccId;
    const trackerId = req.params.trackerId;
    const trackercomment = {
        creator : userId,
        trackercontainer :tcId,
        categorycontainer : ccId,
        content : req.body.content,
        tracker: trackerId
    }
    TrackerComments.create(trackercomment)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Trackercomment."
            });
        });
}
exports.update = (req, res) =>{
    const trackercommentId = req.params.trackercommentId
    TrackerComments.update({content:req.body.content},{where:{id : trackercommentId},returning:true,plain:true})
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while updating the Trackercomment."
            });
        });
}
exports.delete = (req, res) => {
    const trackercommentId = req.params.trackercommentId
    TrackerComments.destroy({where : { id : trackercommentId}})
        .then(num => {
            if(num === 1){
                res.send({
                    message: "Deleted trackercomment successfully."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while deleting all Trackercomment."
            });
        });
}
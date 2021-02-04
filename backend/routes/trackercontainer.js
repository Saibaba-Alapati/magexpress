const trackercontainer = require('../controllers/trackercontainer.controller');
const  express = require('express');
const trackercontainerroute = express.Router();
trackercontainerroute.post('/',trackercontainer.createTrackerContainer)
    .get('/',trackercontainer.findAllContainersRelatedToUser)
    .get('/',trackercontainer.findOneTrackerContainer)
    .post('/',trackercontainer.joinTrackerContainer)
    .post('/:trackercontainerid/trackercontainerinfo',trackercontainer.updateTrackerContainer)
    .delete('/trackercontainerinfo',trackercontainer.deleteTCWithCCandTRandTCR);
module.exports =  trackercontainerroute;
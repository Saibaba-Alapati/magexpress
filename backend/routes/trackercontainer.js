const trackercontainer = require('../controllers/trackercontainer.controller');
const  express = require('express');
const trackercontainerroute = express.Router();
trackercontainerroute.post("/:userId/createcontainer",trackercontainer.create);
trackercontainerroute.get("/:userId/getcontainers",trackercontainer.findAllContainersRelatedToUser);
trackercontainerroute.get("/:userId/:tcId",trackercontainer.findOne);
trackercontainerroute.post("/:userId/:tcId/addusers",trackercontainer.joinTrackerContainer);
trackercontainerroute.post("/:userId/updatecontainer",trackercontainer.update);
trackercontainerroute.delete("/:userId/deletetrackercontainer",trackercontainer.deleteTCandCCandTRandTCR);
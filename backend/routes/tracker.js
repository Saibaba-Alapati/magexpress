const tracker = require('../controllers/tracker.controller');
const express = require('express');
const trackerroute = express.Router();

trackerroute.post("/:userId/:tcId/:ccId/createtracker",tracker.create);
trackerroute.get("/:userId/:tcId/:ccId/:trackerId/findAllCommentsOnTracker",tracker.findAllCommentsOnTracker);
trackerroute.get("/:userId/:tcId/:ccId/:trackerId/gettracker",tracker.findOne);
trackerroute.put("/:userId/:tcId/:ccId/:trackerId/updatetracker",tracker.update);
trackerroute.delete("/:userId/:tcId/:ccId/:trackerId/deletetracker",tracker.delete);
module.exports =  trackerroute;
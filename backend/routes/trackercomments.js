const trackercomment = require('../controllers/trackercomments.controller')
const  express = require('express');
const trackercommentroute = express.Router();

trackercommentroute.post("/:userId/:tcId/:ccId/:trackerId/createcomment",trackercomment.create);
trackercommentroute.put("/:userId/:tcId/:ccId/:trackerId/:trackercommentId/updatecomment",trackercomment.update);
trackercommentroute.delete("/:userId/:tcId/:ccId/:trackerId/:trackercommentId/deletecomment",trackercomment.delete);
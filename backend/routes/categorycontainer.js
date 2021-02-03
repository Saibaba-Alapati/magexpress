const categorycontainer = require('../controllers/categorycontainer.controller');
const  express = require('express');
const categorycontainerroute = express.Router();
categorycontainerroute.post("/:userid/:trackercontainerid/createcategorycontainer",categorycontainer.createCategoryContainer);
categorycontainerroute.get("/:userid/:trackercontainerid/FACCOTC",categorycontainer.FACCOTC);//findallcategorycontainersoftrackercontainer
categorycontainerroute.put("/:userid/:trackercontainerid/:categorycontainerid/updatecategorycontainer",categorycontainer.updateCategoryContainer); //update category container
categorycontainerroute.get("/:userid/:trackercontainerid/FACCOTC",categorycontainer.FACCOTC) //FIND ALL CATEGORY CONTAINER OF TRACKER CONTAINER
categorycontainerroute.get("/:userid/:trackercontainerid/FATOCC",categorycontainer.FATOCC); //findAllTrackersOfCategoryContainers
categorycontainerroute.put("/:userid/:trackercontainerid/:categorycontainerid/MTOCC",categorycontainer.MTOCC) // moveToOtherCategoryContainer
categorycontainerroute.put("/:userid/:trackercontainerid/:categorycontainerid/:trackerid/MTOCC",categorycontainer.MTOCC) // moveToOtherCategoryContainer
categorycontainerroute.delete("/:userid/:trackercontainerid/DCCWT",categorycontainer.DCCWT); //deleteCategoryContainersWithTrackers
categorycontainerroute.delete("/:userid/:trackercontainerid/DATFCC",categorycontainer.DATFCC);//deleteAllTrackersFromCC)
module.exports =  categorycontainerroute;
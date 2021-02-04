const categorycontainer = require('../controllers/categorycontainer.controller');
const  express = require('express');
const categorycontainerroute = express.Router();
categorycontainerroute.post('/',categorycontainer.createCategoryContainer);
categorycontainerroute.get('/',categorycontainer.FACCOTC);//findallcategorycontainersoftrackercontainer
categorycontainerroute.put('/:categorycontainerid/categorycontainerinfo',categorycontainer.updateCategoryContainer); //update category container
categorycontainerroute.get('/',categorycontainer.FATOCC); //findAllTrackersOfCategoryContainers
categorycontainerroute.put('/',categorycontainer.MTOCC) // moveToOtherCategoryContainer
categorycontainerroute.put('/:categorycontainerid',categorycontainer.MTOCC) // moveToOtherCategoryContainer
categorycontainerroute.put('/:categorycontainerid/:trackerid',categorycontainer.MTOCC) // moveToOtherCategoryContainer
categorycontainerroute.put('/:categorycontainerid/:trackerid',categorycontainer.MTOCC) // moveToOtherCategoryContainer
categorycontainerroute.delete('/',categorycontainer.DCCWT); //deleteCategoryContainersWithTrackers
categorycontainerroute.delete('/',categorycontainer.DATFCC);//deleteAllTrackersFromCC)
categorycontainerroute.delete('/:categorycontainerid',categorycontainer.DCCWT); //deleteCategoryContainersWithTrackers
categorycontainerroute.delete('/:categorycontainerid',categorycontainer.DATFCC);//deleteAllTrackersFromCC)
module.exports =  categorycontainerroute;
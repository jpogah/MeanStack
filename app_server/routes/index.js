var express = require('express');
var router = express.Router();
var ctrlChurches = require('../controllers/churches');
var ctrlOthers =require('../controllers/others')



/* Church listing pages */
router.get('/', ctrlChurches.homelist);
router.get('/church', ctrlChurches.churchInfo);
router.get('/new', ctrlChurches.addChurch);
router.get('/church/review/new', ctrlChurches.addReview);

/* other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;

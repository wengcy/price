let express = require('express')
let meter = require('../controller/meter')
let router = express.Router();

router.get('/findMeterUser', function (req,res){
	meter.findMeterUser(req,res);
});
router.get('/findCatchMeterByPage', function (req,res){
	meter.findCatchMeterByPage(req,res);
});
router.get('/findMeterDetailInfo', function (req,res){
	meter.findMeterDetailInfo(req,res);
});


module.exports = router 


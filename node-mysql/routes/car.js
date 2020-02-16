let express = require('express')
let car = require('../controller/car')
let router = express.Router()
router.get('/queryCar', function (req,res){
	car.queryAllCar(req,res);
});

router.get('/queryCarListByDistrictAndCarType', function (req,res){
	car.queryCarListByDistrictAndCarType(req,res);
});
router.get('/queryAllDistrict', function (req,res){
	car.queryAllDistrict(req,res);
});
router.get('/queryCarTypeListByDistrict', function (req,res){
	car.queryCarTypeListByDistrict(req,res);
});
router.post('/addCar', function (req,res){
	car.addCar(req,res);
});
router.post('/deleteCar', function (req,res){
	car.deleteCarById(req,res);
});
router.post('/updateCar',function (req,res){
	car.updateCarById(req,res);
});

module.exports = router 


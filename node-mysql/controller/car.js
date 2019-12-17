let query = require('../config/db')
const util = require('../public/util')
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';

let car = {
	queryAllCar: function(req,res) {
		let sqlQuery="select * from car order by district,carType,loadWeight";
		let data = {};
		query(sqlQuery,function(err,result){
		    if(err){
			   logger.error(`SQL error: ${err}!`);
			   data.code = "-200";
			   data.message = "数据查询失败"
			   res.send(data);
		    }else{
				data.data = result;
				 data.code = "200";
				 data.message = "数据查询成功"
				res.send(data);
				logger.info("数据查询成功");
		    }
		}) 
	},
	queryAllDistrict:function(req,res){
		let sqlQuery=`select distinct district from car`;
		let data = {};
		query(sqlQuery,function(err,result){
		    if(err){
			   logger.error(`SQL error: ${err}!`);
			   data.code = "-200";
			   data.message = "数据查询失败"
			   res.send(data);
		    }else{
				data.data = result;
				 data.code = "200";
				 data.message = "数据查询成功"
				res.send(data);
				logger.info("数据查询成功");
		    }
		}) 
	},
	queryCarTypeListByDistrict: function(req,res){
		let district = req.query.district; 
		let sqlQuery=`select distinct carType from car where district = '${district}'`;
		let data = {};
		query(sqlQuery,function(err,result){
		    if(err){
			   logger.error(`SQL error: ${err}!`);
			   data.code = "-200";
			   data.message = "数据查询失败"
			   res.send(data);
		    }else{
				data.data = result;
				 data.code = "200";
				 data.message = "数据查询成功"
				res.send(data);
				logger.info("数据查询成功");
		    }
		}) 
	},
	queryCarListByDistrictAndCarType: function(req,res) {
		let district = req.query.district;  
		let carType = req.query.carType; 
		let sqlQuery=`select * from car  where district = '${district}' and carType = '${carType}' order by loadWeight`;
		console.log(sqlQuery)
		let data = {};
		query(sqlQuery,function(err,result){
		    if(err){
			   logger.error(`SQL error: ${err}!`);
			   data.code = "-200";
			   data.message = "数据查询失败"
			   res.send(data);
		    }else{
				data.data = result;
				 data.code = "200";
				 data.message = "数据查询成功"
				res.send(data);
				logger.info("数据查询成功");
		    }
		}) 
	},
	addCar: function(req,res) {
		let data = {};
		let district = req.body.district;  
		let carType= req.body.carType; 
		let picture = req.body.picture; 
		let tel = req.body.tel; 
		let loadWeight = req.body.loadWeight; 
		let carNo = req.body.carNo; 
		let media = req.body.media; 
		let time = util.getNowFormatDate();
		let sqlQuery=`insert into car (district,carType,picture,tel,loadWeight,carNo,media,createTime,updateTime) values ('${district}','${carType}','${picture}','${tel}','${loadWeight}','${carNo}','${media}','${time}','${time}')`;
		query(sqlQuery,function(err,result){
		    if(err){
				logger.error(`SQL error: ${err}!`);
		       data.code = "-200";
			   data.message = "数据添加失败"
			   res.send(data);
		    }else{
				logger.info(`添加数据：省份：${district}、车型:${carType}、图片:${picture}、电话:${tel}、载重:${loadWeight}、车号:${carNo}、介质:${media}`);
				data.code = "200";
				data.message = "数据添加成功"
				res.send(data);
		    }
		}) 
	},
	updateCarById: function(req,res) {
		let data = {};
		let id = req.body.id; 
		let district = req.body.district;  
		let carType = req.body.carType; 
		let picture = req.body.picture; 
		let tel = req.body.tel; 
		let loadWeight = req.body.loadWeight; 
		let carNo = req.body.carNo; 
		let media = req.body.media;   
		let time = util.getNowFormatDate();
		let sqlQuery=`update car set district = '${district}',carType = '${carType}',picture = '${picture}',tel = '${tel}',loadWeight = '${loadWeight}',carNo = '${carNo}',media = '${media}', updateTime = '${time}' where id = '${id}'`;
		query(sqlQuery,function(err,result){
			if(err){
				logger.error(`SQL error: ${err}!`);
				data.code = "-200";
				data.message = "数据修改失败"
				res.send(data);
			 }else{
				logger.info(`修改数据：id：${id}、省份：${district}、车型:${carType}、图片:${picture}、电话:${tel}、载重:${loadWeight}、车号:${loadWeight}、介质:${media}`);
				 data.code = "200";
				 data.message = "数据修改成功"
				 res.send(data);
			 }
		}) 
	},
	deleteCarById: function(req,res) {
		let data = {};
		let id = req.body.id; 
		let sqlQuery=`delete from car where id = ${id}`
		query(sqlQuery,function(err,result){
		    if(err){
				data.code = "-200";
				data.message = "数据删除失败"
				res.send(data);
				logger.error(`SQL error: ${err}!`);
			 }else{
				logger.info(`删除数据：id：${id}`);
				 data.code = "200";
				 data.message = "数据删除成功"
				 res.send(data);
			 }
		})  
	}
}

module.exports = car




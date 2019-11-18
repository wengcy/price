let query = require('../config/db')
const util = require('../public/util')
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';

let price = {
	queryAllPrice: function(req,res) {
		let sqlQuery="select id,supplier,name,trend,price,freight,endPrice,density from price where flag = 1 order by supplier,name";
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
	queryMessage: function(req,res) {
		let sqlQuery="select message from header_info";
		let data = {};
		query(sqlQuery,function(err,result){
		    if(err){
			   logger.error(`SQL error: ${err}!`);
			   data.code = "-200";
			   data.message = "头部数据查询失败"
			   res.send(data);
		    }else{
				 data.data = result;
				 data.code = "200";
				 data.message = "头部数据查询成功"
				res.send(data);
				logger.info("头部数据查询成功");
		    }
		}) 
	},
	queryAllPriceOrderByEndPrice: function(req,res) {
		let sqlQuery=`select id,supplier,name,trend,price,freight,endPrice,density from price where flag = 1 order by endPrice `;
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
	addPrice: function(req,res) {
		let data = {};
		let supplier = req.query.supplier;  
		let name = req.query.name;
		let trend = req.query.trend;  
		let price = req.query.price;
		let density = req.query.density;
		let endPrice = Number(price/1000*density).toFixed(2);
		let time = util.getNowFormatDate();
		let sqlQuery=`insert into price (supplier,name,trend,price,density,endPrice,createTime,updateTime) values ('${supplier}','${name}','${trend}',${price},${density},'${endPrice}','${time}','${time}')`;
		query(sqlQuery,function(err,result){
		    if(err){
				logger.error(`SQL error: ${err}!`);
		       data.code = "-200";
			   data.message = "数据添加失败"
			   res.send(data);
		    }else{
				logger.info(`添加数据：供应商：${supplier}、品名：${name}、涨幅：${trend}、单价：${price}、密度：${density}`);
				data.code = "200";
				data.message = "数据添加成功"
				res.send(data);
		    }
		}) 
	},
	updatePriceById: function(req,res) {
		let data = {};
		let id = req.query.id; 
		let supplier = req.query.supplier;  
		let name = req.query.name;
		let trend = req.query.trend;  
		let price = req.query.price;
		let density = req.query.density; 
		let endPrice = Number(price/1000*density).toFixed(2);
		let time = util.getNowFormatDate();
		let sqlQuery=`update price set supplier = '${supplier}', name = '${name}', trend = '${trend}', price = ${price}, density = ${density}, endPrice = ${endPrice}, updateTime = '${time}' where id = '${id}'`;
		query(sqlQuery,function(err,result){
			if(err){
				logger.error(`SQL error: ${err}!`);
				data.code = "-200";
				data.message = "数据修改失败"
				res.send(data);
			 }else{
				logger.info(`修改数据：id：${id}、供应商：${supplier}、品名：${name}、涨幅：${trend}、单价：${price}、密度：${density}`);
				 data.code = "200";
				 data.message = "数据修改成功"
				 res.send(data);
			 }
		}) 
	},
	deletePriceById: function(req,res) {
		let data = {};
		let id = req.query.id; 
		let time = util.getNowFormatDate();
		let sqlQuery=`update price set flag = 0,updateTime = '${time}' where id = ${id}`
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

module.exports = price




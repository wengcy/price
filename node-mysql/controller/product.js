let query = require('../config/db')
const util = require('../public/util')
let logger =  require('../public/logs')

var moment = require('moment');
moment().format();

let product = {
	queryAllProduct: function(req,res) {
		let sqlQuery="select * from product order by name";
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
	queryProductById: function(req,res) {
		let id = req.query.id;  
		let sqlQuery=`select * from product  where id = '${id}'`;
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
	addProduct: function(req,res) {
		console.log('我执行添加方法');
		let data = {};
		let name = req.body.name;  
		let picture= req.body.picture; 
		let price = req.body.price; 
		let detail = req.body.detail; 
		let tel = req.body.tel; 
		let time = util.getNowFormatDate();
		let sqlQuery=`insert into product (name,picture,price,detail,createTime,updateTime,tel) values ('${name}','${picture}','${price}','${detail}','${time}','${time}','${tel}')`;
		query(sqlQuery,function(err,result){
		    if(err){
				console.log(err);
				logger.error(`SQL error: ${err}!`);
		       data.code = "-200";
			   data.message = "数据添加失败"
			   res.send(data);
		    }else{
				logger.info(`添加数据：产品名称：${name}、图片地址:${picture}、价格:${price}、详情:${detail}`);
				data.code = "200";
				data.message = "数据添加成功"
				res.send(data);
		    }
		}) 
	},
	updateProductById: function(req,res) {
		let data = {};
		let id = req.body.id; 
		let name = req.body.name;  
		let picture= req.body.picture; 
		let price = req.body.price; 
		let detail = req.body.detail; 
		let tel = req.body.tel; 
		let time = util.getNowFormatDate();
		let sqlQuery=`update product set name = '${name}',tel = '${tel}',picture = '${picture}',price = '${price}',detail = '${detail}', updateTime = '${time}' where id = '${id}'`;
		query(sqlQuery,function(err,result){
			if(err){
				logger.error(`SQL error: ${err}!`);
				data.code = "-200";
				data.message = "数据修改失败"
				res.send(data);
			 }else{
				logger.info(`修改数据：id：${id}、产品名称：${name}、图片:${picture}、价格:${price}、详情:${detail}`);
				 data.code = "200";
				 data.message = "数据修改成功"
				 res.send(data);
			 }
		}) 
	},
	deleteProductById: function(req,res) {
		let data = {};
		let id = req.body.id; 
		let sqlQuery=`delete from product where id = ${id}`
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

module.exports = product




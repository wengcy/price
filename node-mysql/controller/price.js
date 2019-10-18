var express = require('express')
let connection = require('../config/db')
const request = require('request')
const util = require('../public/util')
let price = {
	queryAllPrice: function(req,res) {
		console.log()
		let sqlQuery="select id,supplier,name,trend,price,freight,endPrice,density from price where flag = 1 order by supplier,name";
		let data = {};
		connection.query(sqlQuery,function(err,result){
		    if(err){
			   console.log(`SQL error: ${err}!`);
			   data.code = "-200";
			   data.message = "数据查询失败"
			   res.send(data);
		    }else{
				data.data = result;
				 data.code = "200";
				 data.message = "数据查询成功"
				res.send(data);
		    }
		}) 
	},
	addPrice: function(req,res) {
		let data = {};
		console.log(req)
		let supplier = req.query.supplier;  
		let name = req.query.name;
		let trend = req.query.trend;  
		let price = req.query.price;
		let density = req.query.density;
		let time = util.getNowFormatDate();
		
		let sqlQuery=`insert into price (supplier,name,trend,price,density,createTime,updateTime) values ('${supplier}','${name}','${trend}',${price},${density},'${time}','${time}')`;
		//let sqlQuery=`insert into price (supplier,name,trend,price,density,createTime,updateTime) values ('中石油','#98','涨',777.000,0.988,'${time}','${time}')`;
		connection.query(sqlQuery,function(err,result){
		    if(err){
		    console.log(err)
		       data.code = "-200";
			   data.message = "数据添加失败"
			   res.send(data);
		    }else{
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
		let time = util.getNowFormatDate();
		let sqlQuery=`update price set supplier = '${supplier}', name = '${name}', trend = '${trend}', price = ${price}, density = ${density},updateTime = '${time}' where id = '${id}'`;
		//let sqlQuery=`update price set supplier = '中国石油', name = '90#', trend = '涨', price = 123456, density = 0.0987 ,updateTime = '${time}' where id = 2`;
		connection.query(sqlQuery,function(err,result){
			if(err){
				 console.log(err)
				data.code = "-200";
				data.message = "数据修改失败"
				res.send(data);
			 }else{
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
		//let sqlQuery=`update price set flag = 0,updateTime = '${time}' where id = 2`;
		connection.query(sqlQuery,function(err,result){
		    if(err){
				data.code = "-200";
				data.message = "数据删除失败"
				res.send(data);
			 }else{
				 data.code = "200";
				 data.message = "数据删除成功"
				 res.send(data);
			 }
		})  
	} 
	
}

module.exports = price




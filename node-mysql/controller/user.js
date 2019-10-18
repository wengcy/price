var express = require('express')
var app = express()
let connection = require('../config/db')
var Mock = require('mockjs')
const request = require('request')
let user = {
	 login: function(req,res) {
		var name=req.query.name;  
		var password = req.query.password; 
		 let sqlQuery="select * from sys_user where name='"+name+"'and password='"+password+"'";
		connection.query(sqlQuery,function(err,result){
		    if(err){
		       console.log(`SQL error: ${err}!`);
		    }else{
				console.log({data:result,token:"123456"});
				res.send({data:result,token:"123456"});
		    }
		}) 
	} 
	
}

module.exports = user




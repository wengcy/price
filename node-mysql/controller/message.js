let query = require('../config/db')
const util = require('../public/util')
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';

let message = {
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
	updateMessage: function(req,res) {
		let data = {};
		let message = req.query.message; 
		let time = util.getNowFormatDate();
		let sqlQuery=`update header_info set message = '${message}',updateTime = '${time}'`;
		query(sqlQuery,function(err,result){
			if(err){
				logger.error(`SQL error: ${err}!`);
				data.code = "-200";
				data.message = "数据修改失败"
				res.send(data);
			 }else{
				logger.info(`修改数据：message：${message}`);
				 data.code = "200";
				 data.message = "数据修改成功"
				 res.send(data);
			 }
		}) 
	}
}

module.exports = message




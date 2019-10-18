let mysql = require('mysql')
let express = require('express')
const sqlConfig = {
        host: "localhost",
        user: "root", 
        password: "root", 
        database: "mysql" 
} 

  //连接数据库
  let connection = mysql.createConnection(sqlConfig);
	//开始链接数据库
   connection.connect(function(err){
		if(err){
			console.log(`mysql连接失败: ${err}!`);
		}else{
			console.log("mysql连接成功!");
		}
	});
	
	
	module.exports = connection
let mysql = require('mysql')

const sqlConfig = {
        host: "localhost",
        user: "root", 
        password: "root", 
        database: "mysql" 
}
let pool = mysql.createPool(sqlConfig);
let query = function(sql,callback){
    pool.getConnection(function(err,conn){
        if(err){
			console.log("数据库连接失败")
            callback(err,null);
        }else{
			console.log("数据库连接成功")
            conn.query(sql,function(err,results){
                callback(err,results);
            });
            conn.release();
        }
    });
};
 
module.exports = query;
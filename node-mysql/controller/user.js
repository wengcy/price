let query = require('../config/db')
const util = require('../public/util')
let logger =  require('../public/logs')

let user = {
	login: function(req,res) {
		let username = req.query.username; 
		let password = req.query.password;
		console.log(`username=${username} password=${password}`)
		let data = {};
		if(username === "dingyou" && password === "dingyou123456") {
			data.code = "200";
			res.send(data);
		}else{
			data.code = "-200";
		 	res.send(data);
		}
	}
}

module.exports = user




let express = require('express')
let user = require('../controller/user')
let router = express.Router()

router.get('/login', function (req,res){
	user.login(req,res);
});


module.exports = router 


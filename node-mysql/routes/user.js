let express = require('express')
let user = require('../controller/user')
let router = express.Router()
router.get('/login', function (req,res){
	user.login(req,res);
});
router.get('/roleAuth', function (req,res){
	user.getRoleAuth(req,res);
});
module.exports = router 


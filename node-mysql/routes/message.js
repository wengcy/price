let express = require('express')
let message = require('../controller/message')
let router = express.Router()

router.get('/queryMessage', function (req,res){
	message.queryMessage(req,res);
});

router.post('/updateMessage', function (req,res){
	message.updateMessage(req,res);
});

module.exports = router 


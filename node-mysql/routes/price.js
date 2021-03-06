let express = require('express')
let price = require('../controller/price')
const crypto = require('crypto');
let router = express.Router()
router.get('/queryPrice', function (req,res){
	price.queryAllPrice(req,res);
});
router.get('/queryMessage', function (req,res){
	price.queryMessage(req,res);
});
router.get('/queryPriceByPage', function (req,res){
	price.queryPriceByPage(req,res);
});
router.get('/queryAllPriceOrderByEndPrice', function(req,res){
    price.queryAllPriceOrderByEndPrice(req,res)
})
router.post('/addPrice', function (req,res){
	price.addPrice(req,res);
});
router.post('/deletePrice', function (req,res){
	price.deletePriceById(req,res);
});
router.post('/updatePrice',function (req,res){
	price.updatePriceById(req,res);
});
router.get('/',function (req,res){
    console.log("/")
	const TOKEN = "target";
    const signature = req.query.signature;
    const echostr = req.query.echostr;
    const timestamp = req.query.timestamp;
	const nonce = req.query.nonce;
	// 拼成数组，字典排序，再拼接
    const tmpStr = [TOKEN, timestamp, nonce].sort().reduce((prev, cur) => prev + cur);

    // sha1加密
    const sha1 = crypto.createHash('sha1');
    const sha1_result = sha1.update(tmpStr).digest('hex');

    // 如果是来自微信的请求就返回echostr
    if (sha1_result === signature) {
      res.end(echostr);
    }
});
module.exports = router 


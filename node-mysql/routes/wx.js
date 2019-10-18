let express = require('express')
const crypto = require('crypto');
let router = express.Router()
router.get('/',function (req,res){
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


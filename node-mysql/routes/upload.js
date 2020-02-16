const path = require('path')
let express = require('express')
let fs = require('fs')
let router = express.Router()

router.post('/', (req,res) => {
  let base64 = req.body.file;
  let filename = req.body.fileName;
  let base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
  //let dataBuffer = new Buffer(base64Data, 'base64');
  let dataBuffer = Buffer.from(base64Data, 'base64');
 
  try {
    fs.writeFile(`public/upload/photos/${filename}`, dataBuffer, function(err) {
      console.log(`上传图片${err}`)
      let data = {};
      data.code = "200";
      data.url = `upload/photos/${filename}`
      res.send(data);
    });
  } catch (error) {
    throw error
  }
})

router.get('/uploadShow', function (req, res) {
  let url = path.join(__dirname,'../');
  res.sendFile(url+"upload/photos/1576240616676-my_launcher.png");
})
module.exports = router 


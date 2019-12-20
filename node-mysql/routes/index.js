let price = require('./price')
let message = require('./message')
let car = require('./car')
let upload = require('./upload')
let express = require('express')
let user = require('./user')
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json({limit:"2100000kb"})); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(function(req, res, next) {
 
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
app.use("/price",price);
app.use("/message",message);
app.use("/car",car);
app.use("/upload",upload);
app.use("/user",user);
module.exports = app

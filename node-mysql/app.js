
let app= require('./routes/index');
const compression = require('compression')
app.use(compression())
let express=require("express");
const fs = require('fs');
const path = require('path');
let cors = require('cors');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./2_www.wengcy.cn.key', 'utf8');
var certificate = fs.readFileSync('./1_www.wengcy.cn_bundle.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(80,"172.16.100.87",function(){
    console.log("服务开启成功")
});
// httpsServer.listen(80,"172.16.100.87",function(){
//     console.log("服务开启成功")
// });

app.use(cors());
app.use(express.static(path.resolve(__dirname, './dist')))

app.get('/', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
    res.send(html)
})



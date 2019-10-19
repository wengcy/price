let express=require("express");
let db = require('./config/db');
let app= require('./routes/index');
const fs = require('fs');
const path = require('path');
let cors = require('cors');
app.use(cors());
app.use(express.static(path.resolve(__dirname, './dist')))
app.get('/', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
    res.send(html)
})
app.listen(80,"172.16.100.87",function(){
    console.log("服务开启成功")
});

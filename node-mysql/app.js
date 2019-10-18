let express=require("express");
let db = require('./config/db');
let app= require('./routes/index');
let cors = require('cors');
app.use(cors());
app.listen(8000,"172.16.100.87",function(){
    console.log("服务开启成功")
});

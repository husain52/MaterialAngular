var express = require('express');
var app = express();

app.get('/dowork',function(res,req){
    console.log("--------- serverjs ----------",req.params.msg);
     res.send("======= Hello Data Return from Server ======");
});




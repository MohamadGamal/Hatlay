var express = require('express');
var bodyParser = require('body-parser')
var postMiddleware = bodyParser.urlencoded({extended:true});

var config = require ("./config");

var userRouter=require("./controller/User");
//var orderRouter=require("./controller/Order");
var jwt = require ("jsonwebtoken")

var mongoose=require("mongoose");
mongoose.connect(config.db);

var app = express();
app.use(bodyParser.json())


app.use(function(request,response,next){          
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,x-access-token');
    response.setHeader('Access-Control-Allow-Credentials', true);

    //// get token from header , body or query ,
  var token = request.body.token || request.query.token || request.headers['x-access-token'];

    //// verify token and extract user data from it 
  jwt.verify(token,config.secret,function(err,decode){
            if(!err){
                request.user=decode;
                console.log(decode);            
                }
            next();
        });
});

app.use("/user",userRouter);
//app.use("/order",orderRouter);
app.use("*",(request,response)=>{
    response.json(request.user);
});


app.listen(8000);
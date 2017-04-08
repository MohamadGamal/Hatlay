var express = require('express');
var bodyParser = require('body-parser')
var validator = require('validator')
var postMiddleware = bodyParser.urlencoded({extended:true});
var xssvalidator = require('./util/xssvalidator');
var config = require ("./config");

var userRouter=require("./controller/User");
var orderRouter=require("./controller/Order");
var resturantRouter=require("./controller/Resturant");
var groupRouter=require("./controller/Group");
var jwt = require ("jsonwebtoken")

var mongoose=require("mongoose");
mongoose.connect(config.db);

var app = express();
app.use(bodyParser.json())
//app.use(xssvalidator);
var fs=require("fs");
fs.readdirSync(__dirname+"/model").forEach(function(file){
  require("./model/"+file);
})


console.log("lol");
app.use(function(request,response,next){          
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,x-access-token');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('X-XSS-Protection',true);

    //// get token from header , body or query ,
  var token = request.body.token || request.query.token || request.headers['x-access-token'];

  console.log("token ::" +token);            

    //// verify token and extract user data from it 
  jwt.verify(token,config.secret,function(err,decode){
            if(!err){
                request.user=decode;
                console.log("user data from token :");            
                console.log(decode);            
                }
            next();
        });
});

app.use("/user",userRouter);
app.use("/order",orderRouter);
app.use("/group",groupRouter);
app.use("/resturant",resturantRouter);
app.use("*",(request,response)=>{
    response.json(request.user);
});

app.listen(process.env.PORT || 8000);
// app.listen(8000);
var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");
                 require("../model/User");
var bodyParser = require("body-parser");

var config = require ("../config");

var jwt = require ("jsonwebtoken")


var bodyParserMiddelWare = bodyParser.urlencoded({extended:false});
router.use(bodyParser.json())

router.post("/register",(request , response )=>{
    var UserModel = mongoose.model("user");
    user = new UserModel(request.body);
    user.save ((err,data)=>{

        if(!err){
            response.status(200);
            console.log(data);
            var token = jwt.sign({name:data.name,id:data.id},config.secret,{expiresIn:1440*60})
                response.json({user:{name:user.name,id:user.id},token:token});
        }else{
            response.json("error");
        }

    });
});

router.post("/login",(request,response)=>{
    console.log(request.body.email);
    mongoose.model("user")
        .findOne({email:request.body.email},(err,user)=>{
            console.log(user);
            if(user && user.password == request.body.password){
                response.status(200);
                var token = jwt.sign({name:user.name,id:user.id},config.secret,{expiresIn:1440*60})
                response.json({user:{name:user.name,id:user.id},token:token});
            }
        });
});

module.exports= router;
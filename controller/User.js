var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");
                 require("../model/User");
var bodyParser = require("body-parser");

var config = require ("../config");
var error = require("../error");
var jwt = require ("jsonwebtoken")

var validator = require('validator');

var bodyParserMiddelWare = bodyParser.urlencoded({extended:false});
router.use(bodyParser.json());

var friendRouter = require("./Friend"); 

router.use("/friend",friendRouter);


// router.use((request,response,next)=>{
//      response.send(error.email);
//     if(validator.isEmpty(request.body.email) && validator.isEmail(request.body.email)){
//         response.json(err.err.email);
//     }
//     if(validator.isLength(request.body.password,{min:3,max:undefined})){

//     }
//    next();
// });

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
            response.status(550);
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


router.get("/",(request , response)=>{
    mongoose.set('debug',true);
        mongoose.model("user")
        ///// return just 10 friends 
        .find({},{friends:{$slice:10}})
        .populate('friends')
        .exec((err,data)=>{
            if(!err){
                response.json(data);                
            }
        })
});

router.get("/:id",(request , response)=>{
    if(validator.isMongoId(request.params.id)){
        mongoose.model("user")
        .findOne({_id:request.params.id},(err,data)=>{
            if(!err){
                response.json(data);                
                }
            })
    }
    else{
        mongoose.model("user")
        .find({$text:{$search:request.params.id}},(err,data)=>{
            if(!err){
                response.json(data);                
                }
            })        
        }
});

router.delete("/:id",(request,response)=>{
    mongoose.set('debug',true);
    mongoose.model("user")
        .remove({_id:request.params.id},(err ,data)=>{
            if(!err){
                response.status(200);
                response.json("ok");
            }else{
                response.status(550);
                response.json("error");
            }
        })
});

router.put("/:id",(request,response)=>{
    mongoose.set('debug',true);    

    mongoose.model("user").update({_id:request.params.id},{$set:request.body},(err,data)=>{
        if(!err){
            response.status(200);
            response.send("ok");
        }else{
            response.status(550);
            response.send("err");
        }        
    })
});

module.exports= router;
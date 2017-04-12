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
<<<<<<< HEAD

var successCallback = function (param) {
    console.log(param);
//    console.log((socketMap.get(param.reciver)).size);
    if(socketMap.get(param.reciver)){
        for (var key of  socketMap.get(param.reciver).keys()) {
                key.emit('message', {type:'new-message', 
                                    text:param.sender+" follow you !"});
                console.log("con st :"+key.connected);
            }
    }
    mongoose.set('debug',true);
    mongoose.model("user").update({_id:param.reciver},
            {
                $push:{
                    notification:{
                                    body:param.sender +" follow you." ,statues:1
                                 }
            } },(err,d)=>console.log(err , d));


}

var failureCallback = function(err){
    console.log(""+err);
}
=======
 var modelRouter=require("./Router_Document")("User");
var friendRouter = require("./UserEmbded")({collection:"user",field:"friends"}); 
>>>>>>> afed4dca1ce939f7faaac0133918581bed1dd678

var friendRouter = require("./UserEmbded")({
    collection:"user",
    field:"friends",
    successCallback:successCallback,
    failureCallback:failureCallback
}); 
// friendRouter.on('save',(data)=>{
//     for (var key of socketMap.get(request.params.id).keys()) {
//                   key.emit('message', {type:'new-message', text:request.user.name+" follow you !"});
//                   console.log("key ");
//             }

// })
router.use("/friend",friendRouter);
var groupRouter=modelRouter({
             propname:"groups"
          
          });

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
            var u= {name:user.name,id:user.id};
            response.json({user:u,token:token});
        }else{
            response.status(550);
            console.log(err.code);
            response.json(err.code);
        }
    });
});

router.post("/login",(request,response)=>{
    console.log(request.body.email);
    mongoose.model("user")
        .findOne({email:request.body.email})
        .populate('groups')
        .populate('friends','name')
       
        .exec((err,user)=>{

            if(user && user.password == request.body.password){
                response.status(200);
                user.password = "";
                user.friends = user.friends?user.friends:[];
                user.groups = user.groups?user.groups:[];
                console.log(user);
                var token = jwt.sign({name:user.name,id:user.id},config.secret,{expiresIn:1440*60})
                response.json({user:user,token:token});
            }
        }
        );
});


router.get("/",(request , response)=>{

    console.log(x);

    mongoose.set('debug',true);
        mongoose.model("user")
        ///// return just 10 friends 
        .find({},{friends:{$slice:10}})
        .populate('friends')
        .populate('groups')
        .exec((err,data)=>{
            if(!err){
                response.json(data);                
            }
        })
});

router.get("/:id",(request , response)=>{
    if(validator.isMongoId(request.params.id)){
        mongoose.model("user")
        .findOne({_id:request.params.id})
        .populate('friends')
        .populate('groups')
        .exec(
        (err,data)=>{
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

router.get("/mail",(request,response)=>{
    response.json({"email":"khaledsabbah000@yahoo.com"});
});

router.post("/mail",bodyParserMiddelWare,(request,response)=>{
    console.log(request.body.email);
    var result={"status":false,"message":'If this Email was found , An Email would be sent , Hurry and check!'};
    var token = jwt.sign({name:data.name,id:data.id},config.secret,{expiresIn:1440*60});
    mongoose.model("user")
        .findOne({email:request.body.email},function(err,user){
            if(user){
                user._token=token;
                result.status=true;
                user.save(function (err) {
                    if(err){
                        result.status=false;
                    }
                })
            }
            });
    if(result.status){
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: 'khaledsabbah000@yahoo.com',
                pass: 'Kh040534280997'
            }
        });    
        
        var from='"YallaNutlob " <khaledsabbah000@yahoo.com>';
        var subject ='YallaNutlob password reset Notification';
        var url="https://hatlay.herokuapp.com/user/?_token="+token;
        var mailOptions = {
            from: from, // sender address (who sends)
            to: request.body.email , // list of receivers (who receives)
            subject: subject , // Subject line
            text: 'Hi  this is the mail as requried to be sent', // plaintext body
            html: '<b>Please click this link to reset your password </b>'+url+
                        ' How to register using facebook and google in Node.js</a><img scr="/home/khaledgamal/Pictures/Killua1.jpg">' // html body
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log("some thing happened and cause errors in mailing sevice")
                result.status=false;
            }

        });
    }

    response.json(result);
<<<<<<< HEAD
});
=======
}
)
>>>>>>> afed4dca1ce939f7faaac0133918581bed1dd678

middlebody=require("../util/paramsaver");
router.use("/:ordid",middlebody);
router.use("/:ordid/group/",groupRouter);
module.exports= router;
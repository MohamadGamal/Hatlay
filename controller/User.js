var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
require("../model/User");
var bodyParser = require("body-parser");

var handelError = require ("./ErrorHandler");
var config = require ("../config");
var error = require("../error");
var jwt = require ("jsonwebtoken")
var fs=require("fs");


var validator = require('validator');

var bodyParserMiddelWare = bodyParser.urlencoded({ extended: false });
router.use(bodyParser.json());


var successCallback = function (param) {
    console.log(param);

    var statues = 1;
//    console.log((socketMap.get(param.reciver)).size);
    if(socketMap.get(param.reciver)){
        statues = 0; 
        for (var key of  socketMap.get(param.reciver).keys()) {
                key.emit('message', {type:'new-message', 
                                    text:param.sender+" follow you !"});
                console.log("con st :"+key.connected);
            }
        
// =======
//     var statues = 0;
//     //    console.log((socketMap.get(param.reciver)).size);
//     if (socketMap.get(param.reciver)) {
//         statues = 1;
//         for (var key of socketMap.get(param.reciver).keys()) {
//             key.emit('message', {
//                 type: 'new-message',
//                 text: param.sender + " follow you !"
//             });
//             console.log("con st :" + key.connected);
//         }

// >>>>>>> 6f03be9e81c3aa638b5ded1864340874aa1f3a95
    }
    mongoose.set('debug', true);
    mongoose.model("user").update({ _id: param.reciver },
        {
            $push: {
                notification: {
                    body: param.sender + " follow you.", statues: statues
                }
            }
        }, (err, d) => console.log(err, d));


}

var failureCallback = function (err) {
    console.log("" + err);
}

var modelRouter = require("./Router_Document")("User");
//var friendRouter = require("./UserEmbded")({collection:"user",field:"friends"}); 

var friendRouter = require("./UserEmbded")({
    collection: "user",
    field: "friends",
    successCallback: successCallback,
    failureCallback: failureCallback
});
// friendRouter.on('save',(data)=>{
//     for (var key of socketMap.get(request.params.id).keys()) {
//                   key.emit('message', {type:'new-message', text:request.user.name+" follow you !"});
//                   console.log("key ");
//             }

// })
router.use("/friend", friendRouter);
var groupRouter = modelRouter({
    propname: "groups"

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

router.post("/register", (request, response) => {
    var UserModel = mongoose.model("user");
    user = new UserModel(request.body);
    user.save((err, user) => {
        if (!err) {
                        response.status(200);
                        user.password = "";
                        user.friends = [];
                        user.groups = [];
                        var token = jwt.sign({name:user.name,id:user.id},config.secret,{expiresIn:1440*60})
                        response.json({user:user,token:token});
        }else{
            handelError(response,{err:{message:"registeration faield please try again "}});

        }
    });
});

router.get("/notification", (request, response) => {
    console.log("notification");
    mongoose.set("debug", true);
    mongoose.model("user")
        .update({ _id: request.user.id },
        { notification: [{ $set: { statues: 0 } }] },
        (err, data) => {
            response.send("ok");
        });
});

router.post("/login", (request, response) => {
    console.log(request.body.email);
    mongoose.model("user")
        .findOne({ email: request.body.email })
        .populate('groups')

        .populate('friends','name')
       
        .exec((err,user)=>{
            if (!user){
                 handelError(response,{err:{message:"Email or password not vaild"}},404);
                 return;
            }
            user.comparePassword(request.body.password, function(err, isMatch) {
                    if (isMatch){
                        response.status(200);
                        user.password = "";
                        user.friends = user.friends?user.friends:[];
                        user.groups = user.groups?user.groups:[];
                        var token = jwt.sign({name:user.name,id:user.id},config.secret,{expiresIn:1440*60})
                        response.json({user:user,token:token});
                        }
                });
// =======
//         .populate('friends', 'name')

//         .exec((err, user) => {

//             user.comparePassword(request.body.password, function (err, isMatch) {
//                 if (isMatch) {
//                     response.status(200);
//                     user.password = "";
//                     user.friends = user.friends ? user.friends : [];
//                     user.groups = user.groups ? user.groups : [];
//                     console.log(user);
//                     var token = jwt.sign({ name: user.name, id: user.id }, config.secret, { expiresIn: 1440 * 60 })
//                     response.json({ user: user, token: token });



//                 }
//             });


        }
        );
});


router.get("/", (request, response) => {

    console.log(x);

    mongoose.set('debug', true);
    mongoose.model("user")
        ///// return just 10 friends 
        .find({}, { friends: { $slice: 10 } })
        .populate('friends')
        .populate('groups')
        .exec((err, data) => {
            if (!err) {
                response.json(data);
            }
        })
});

router.get("/:id", (request, response) => {
    if (validator.isMongoId(request.params.id)) {
        mongoose.model("user")
            .findOne({ _id: request.params.id })
            .populate('friends')
            .populate('groups')
            .exec(
            (err, data) => {
                if (!err) {
                    response.json(data);
                }else {
                    response.json(err);
                }
            })
    }
    else {
        mongoose.model("user")
            .find({ $text: { $search: request.params.id } }, (err, data) => {
                if (!err) {
                    response.json(data);
                }else {
                    response.json(err);
                }
            })
    }
});

router.delete("/:id", (request, response) => {
    mongoose.set('debug', true);
    mongoose.model("user")
        .remove({ _id: request.params.id }, (err, data) => {
            if (!err) {
                response.status(200);
                response.json("ok");

            }else{
                handelError(response,{err:{message:"err"}},404);

            }
        })
});

router.put("/",bodyParserMiddelWare,(request,response)=>{
    mongoose.set('debug',true);  
    console.log(request.body);  
    rewriteimage(request.body,"image");

    mongoose.model("user").update({_id:request.user.id},
    {$set:{img:request.body.image,name:request.body.name}}       
    ,(err,data)=>{
        if(!err){
            response.status(200);
            response.send("ok");
        }else{
            handelError(response,{err:{message:"err"}},404);
        }        

    })
});

router.get("/mail", (request, response) => {
    response.json({ "email": "khaledsabbah000@yahoo.com" });
});

router.post("/mail", bodyParserMiddelWare, (request, response) => {
    console.log(request.body.email);
    var result = { "status": false, "message": 'If this Email was found , An Email would be sent , Hurry and check!' };
    var token = jwt.sign({ name: data.name, id: data.id }, config.secret, { expiresIn: 1440 * 60 });
    mongoose.model("user")
        .findOne({ email: request.body.email }, function (err, user) {
            if (user) {
                user._token = token;
                result.status = true;
                user.save(function (err) {
                    if (err) {
                        result.status = false;
                    }
                })
            }
        });
    if (result.status) {
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

        var from = '"YallaNutlob " <khaledsabbah000@yahoo.com>';
        var subject = 'YallaNutlob password reset Notification';
        var url = "https://hatlay.herokuapp.com/user/?_token=" + token;
        var mailOptions = {
            from: from, // sender address (who sends)
            to: request.body.email, // list of receivers (who receives)
            subject: subject, // Subject line
            text: 'Hi  this is the mail as requried to be sent', // plaintext body
            html: '<b>Please click this link to reset your password </b>' + url +
            ' How to register using facebook and google in Node.js</a><img scr="/home/khaledgamal/Pictures/Killua1.jpg">' // html body
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("some thing happened and cause errors in mailing sevice")
                result.status = false;
            }

        });
    }

    response.json(result);
});



function rewriteimage(body,propname,dest="."){
var Randname= Math.round(Math.random()*10000000) +""+ +new Date();
var Fullname=dest+"/"+Randname;
 var matches = body[propname].match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
var imbuffer = new Buffer(matches[2], 'base64')
fs.writeFileSync(Fullname, imbuffer);
body[propname]=Fullname;
console.log("WRITTEN");


}


middlebody=require("../util/paramsaver");
router.use("/:ordid",middlebody);
router.use("/:ordid/group/",groupRouter);
module.exports= router;


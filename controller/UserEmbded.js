


module.exports= function(option){

var express    = require("express");
var router     = express.Router();
var mongoose   = require("mongoose");
                 require("../model/User");
var bodyParser = require("body-parser");

var config = require ("../config");
var error = require("../error");
var jwt = require ("jsonwebtoken")

var validator = require('validator');



router.get("/:id",function(request,response){

  mongoose.model("user")
            /// get user id from request
            /// request.user._id;
        .findOne({_id:"58dffc81fdb4201da07a4a13"},(err,user)=>{
              if(!err){
                    var UserModel = mongoose.model(option.collection);    
                    /// get user id from  request body
                    /// request.body._id;
                  //   console.log(user[option.field]);
                  //   console.log(request.params.id);
                  //   friend = new UserModel({_id:request.params.id});
                    user[option.field].push(request.params.id);
                  var i=0;   
                  while(i<user[option.field].length && user[option.field][i++].toString()!=request.params.id);                 
                  console.log(i,i<user[option.field].length);
                    if (! (i<user[option.field].length)){

                                user[option.field].push(request.params.id);

                              // user[option.field].push(friend);
                              user.save(()=>{
                                    if(!err){
                                          response.status("200");
                                          response.send("ok");
                                          }else{
                                          response.status("500");
                                          response.send("err");
                                          }
                              });                      
                              
                          }else{
                              response.status("200");
                              response.send("already ok");                          
                          }
            }
              else{
                    response.status("500");
                    response.send("err");
              }
        });    
});

router.delete("/:id",function(request,response){

    mongoose.model("user")
            /// get user id from request
            /// request.user._id;
        .findOne({_id:"58dffc81fdb4201da07a4a13"},(err,user)=>{
              if(!err){
                    var UserModel = mongoose.model(option.collection);    
                    /// get user id from  request body
                    /// request.body._id;
                    
                    for(var i=0;i<user.friends.length;i++){
                      if (user[option.field][i] == request.params.id){
                        user[option.field].splice(i,1);
                        break;
                      }
                    }
                    user.save(()=>{
                          if(!err){
                              response.status("200");
                              response.send("ok");
                              }else{
                              response.status("500");
                              response.send("err");
                              }
                       });                                          
              }else{
                    response.status("500");
                    response.send("err");
              }
        });    
});
return router;
}
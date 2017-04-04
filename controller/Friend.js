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
        .findOne({_id:"58ddfdc961c4f04385a483ec"},(err,user)=>{
              if(!err){
                    var UserModel = mongoose.model("user");    
                    /// get user id from  request body
                    /// request.body._id;
                    friend = new UserModel({_id:request.params.id});
                    user.friends.push(friend);
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

router.delete("/:id",function(request,response){

    mongoose.model("user")
            /// get user id from request
            /// request.user._id;
        .findOne({_id:"58dffc81fdb4201da07a4a13"},(err,user)=>{
              if(!err){
                    var UserModel = mongoose.model("user");    
                    /// get user id from  request body
                    /// request.body._id;
                    
                    for(var i=0;i<user.friends.length;i++){
                      if (user.friends[i] == request.params.id){
                        user.friends.splice(i,1);
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

module.exports=router;

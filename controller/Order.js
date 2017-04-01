var express=require('express');
var router=express.Router();
var Order = require(__dirname+"/../model/Order")
var mongoose=require("mongoose");

var bodyParser = require('body-parser')
var postMiddleware = bodyParser.urlencoded({extended:true});


router.get("/",function(request,response){
  mongoose.model("orders").find({},{},
      function (err , data){
        if(!err){
          response.json(data);
        }
      }
   );});

router.post("/",postMiddleware,function(request,response){

    mongoose.set('debug', true);  
    var OrderModel=mongoose.model("orders");
    console.log(request.body.meals) ;
    var order = new OrderModel(request.body);
    order.save(function(err){
            if(!err){                
                response.json("ok");
            }else{
                response.json("Error");
            }        
    });

});

router.put("/:id",function(request,response){
  response.send("k");
});

router.delete("/:id",function(request,response){
  response.send("k"+request.param.id);
});

module.exports=router;

var express=require('express');
var router=express.Router();
var Order = require(__dirname+"/../model/Order")
var mongoose=require("mongoose");

var bodyParser = require('body-parser')
var postMiddleware = bodyParser.urlencoded({extended:true});
var Order=mongoose.model("order");
var validator=require("validator");
router.get("/",function(request,response){
  Order.find({$text:{$search:request.params.query}},
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
});

router.post("/",postMiddleware,function(request,response){

    mongoose.set('debug', true);  
    Order= new OrderModel(request.body);
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

var express=require('express');
var router=express.Router();
var Order = require(__dirname+"/../model/Order")
var mongoose=require("mongoose");
 var modelRouter=require("./Router_Document")("Order");
 var propRouter=require("./Router_Property")("Order");
var usersRouter=modelRouter({
             propname:"users",
            docpart:"userId",
          
          });
usersRouter.onhook('getsave',(param,body)=>{
  console.log('IN HOOOOL',param,body)
})

var mealsRouter=modelRouter({
             propname:"meals",
             docpart:"_id",
           
          });
var statusRouter=propRouter({
             propname:"status"
  
          });
//var mealsRouter=require("./Order_Meals");
var bodyParser = require('body-parser')

var postMiddleware = bodyParser.urlencoded({extended:true});

var validator=require("validator");

//router.use("/:uid/users/",usersRouter);


router.get("/",function(request,response){
//$text:{$search:request.params.query}

Order.find({},
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
});
router.get("/:query",function(request,response){
//$text:{$search:request.params.query}
//var srchobj=validator.isMongoId(request.params.query)?{_id:request.params.query}:{$text:{$search:request.params.query}};

Order.findOne({'_id':request.params.query},
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
});



router.get("/user/:query",function(request,response){
//$text:{$search:request.params.query}
//var srchobj=validator.isMongoId(request.params.query)?{_id:request.params.query}:{$text:{$search:request.params.query}};


Order.find({'users.userId':request.params.query},
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
});






router.post("/",postMiddleware,function(request,response){

   // mongoose.set('debug', true);  
 

    order= new Order(request.body);
    console.log(order);
    console.log(typeof request.body.meals);
    order.save(function(err,info){
           response.json(err?err:info);

    });

});

router.put("/:id",postMiddleware,function(request,response){
      mongoose.set('debug', true); 

  Order.findByIdAndUpdate(request.params.id, request.body, function (err, data) {
  response.json(err?err:data);
});
  
   
});

router.delete("/:id",function(request,response){
 Order.remove({_id:request.params.id},function (err, info) {
  response.json(err?err:info);
})
});
 middlebody=require("../util/paramsaver");
router.use("/:ordid",middlebody);
router.use("/:ordid/user/",usersRouter);
router.use("/:ordid/meal/",mealsRouter);
router.use("/:ordid/status/",statusRouter);
module.exports=router;

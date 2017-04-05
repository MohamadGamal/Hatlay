var express=require('express');
var router=express.Router();
var Order = require(__dirname+"/../model/Order")
var mongoose=require("mongoose");
var mealsRouter=require("./Order_Document")({document:"HEY"});
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
var srchobj=validator.isMongoId(request.params.query)?{_id:request.params.query}:{$text:{$search:request.params.query}};
console.log(srchobj);
Order.find(srchobj,
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
function middlebody(request,response,next){
request.ord=request.params;
    next();
}
router.use("/:ordid",middlebody);
router.use("/:ordid/meal/",mealsRouter);
module.exports=router;

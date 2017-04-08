var express=require('express');
var router=express.Router();
var Resturants = require(__dirname+"/../model/Resturant")

var mongoose=require("mongoose");

var bodyParser = require('body-parser')
var postMiddleware = bodyParser.urlencoded({extended:true});

var validator=require("validator");
router.get("/",function(request,response){
//$text:{$search:request.params.query}

Resturants.find({},
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
Resturants.find(srchobj,
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
});

router.post("/",postMiddleware,function(request,response){

   // mongoose.set('debug', true);  
    
    resturants= new Resturants(request.body);
    console.log(resturants);
    console.log(typeof request.body.meals);
    resturants.save(function(err,info){
           response.json(err?err:info);
    });

});

router.put("/:id",postMiddleware,function(request,response){
      mongoose.set('debug', true); 

  Resturants.findByIdAndUpdate(request.params.id, request.body, function (err, data) {
  response.json(err?err:data);
});
  
   
});

router.delete("/:id",function(request,response){
 Resturants.remove({_id:request.params.id},function (err, info) {
  response.json(err?err:info);
})
});

module.exports=router;
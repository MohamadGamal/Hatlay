
module.exports=function(parameterObject){
var express=require('express');
var router=express.Router();
var Order = require("./Order")
var mongoose=require("mongoose");
var bodyParser = require('body-parser')
var postMiddleware = bodyParser.urlencoded({extended:true});
router.get("/",function(request,response){
    console.log("IN");
    response.json(request.ord);
Order.find({_id:request.ord},
{parameterObject:true},
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
});
router.get("/:docid",function(request,response){
    console.log("IN");
    response.json(request.ord);
    var srchobj=projobj={};
    projobj[parameterObject.propname]=true;
srchobj["'"+parameterObject.propname+"."+parameterObject.docpart+"'"] =request.param.docid;
srchobj[_id]=request.ord;
Order.find(srchobj,
projobj,
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
});
router.post("/",postMiddleware,function(request,response){


   var ordertarg= Order.find({_id:request.params.query},
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
    ordertarg
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

return router;
}
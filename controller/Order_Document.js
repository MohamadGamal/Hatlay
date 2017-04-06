
module.exports=function(parameterObject){
var express=require('express');
var router=express.Router();
var Order = require("../model/Order")
var mongoose=require("mongoose");
var bodyParser = require('body-parser')
var postMiddleware = bodyParser.urlencoded({extended:true});
var attrtobe=parameterObject.propname;
var attrtobe=parameterObject.docpart?attrtobe+'.'+parameterObject.docpart:attrtobe;
router.get("/",function(request,response){
    console.log("IN");
    projobj={};
    projobj[parameterObject.propname]=true;
   // response.json(request.oldobj.id);
   console.log("REG",request.oldobj);
Order.find({_id:request.oldobj.id},
projobj,
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
});
router.get("/:docid",function(request,response){
    console.log("IN");
   // response.json(request.oldobj.id);
    var srchobj={_id:request.oldobj.id};
    var projobj={};
    projobj[parameterObject.propname+'.$']=true;
srchobj[attrtobe] =request.params.docid;
Order.find(srchobj,
projobj,
      function (err , data){
        if(!err){
          response.json(err?err:data);
        }
      });
});
router.post("/",postMiddleware,function(request,response){
    var addedobj={};
    addedobj[parameterObject.propname]=request.body;
 Order.findByIdAndUpdate(request.oldobj.id, {$addToSet: addedobj }, function (err, data) {
  response.json(err?err:data);
});
});

router.put("/:id",postMiddleware,function(request,response){
      mongoose.set('debug', true); 
    var addedobj={};
    var findobj= {_id:request.oldobj.id};
    findobj[attrtobe]=request.params.id;
//   console.log("OBJECT",findobj,addedobj)
    addedobj[parameterObject.propname+".$"]=request.body;
 Order.update(findobj, {$set: addedobj }, function (err, data) {
  response.json(err?err:data);
});
  
   
});

router.delete("/:id",function(request,response){
   mongoose.set('debug', true); 
   var subobj={};
   subobj[parameterObject.docpart?parameterObject.docpart:0]=request.params.id
    var addedobj={};
    addedobj[parameterObject.propname]=parameterObject.docpart?subobj:request.params.id;
 Order.findByIdAndUpdate(request.oldobj.id, {$pull: addedobj }, function (err, data) {
  response.json(err?err:data);
});
  
});

return router;
}
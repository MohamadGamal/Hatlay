var express=require('express');
var router=express.Router();
var Group = require(__dirname+"/../model/Group")

var mongoose=require("mongoose");
// var modelRouter=require("./Router_Document")("Group");
// var usersRouter=modelRouter({
//             propname:"users",
        
//          });
var bodyParser = require('body-parser')
var postMiddleware = bodyParser.urlencoded({extended:true});

var validator=require("validator");
router.get("/",function(request,response){
//$text:{$search:request.params.query}

Group.find({}).populate('users').exec(
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
Group.find(srchobj,
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
});

router.post("/",postMiddleware,function(request,response){

   // mongoose.set('debug', true);  
    
    group= new Group(request.body);
    console.log(group);
    console.log(typeof request.body.meals);
    group.save(function(err,info){
           response.json(err?err:info);

    });

});

router.put("/:id",postMiddleware,function(request,response){
      mongoose.set('debug', true); 

  Group.findByIdAndUpdate(request.params.id, request.body, function (err, data) {
  response.json(err?err:data);
});
  
   
});

router.delete("/:id",function(request,response){
 Group.remove({_id:request.params.id},function (err, info) {
  response.json(err?err:info);
})
});

module.exports=router;
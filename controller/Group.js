var express=require('express');
var router=express.Router();
var Group = require(__dirname+"/../model/Group")
var fs=require("fs")
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
Group.find(srchobj).populate('users').exec(
      function (err , data){
        if(!err){
          response.json(data);
        }
      });
});
function rewriteimage(body,propname,dest="."){
var Randname= Math.round(Math.random()*10000000) +""+ +new Date();
var Fullname=dest+"/"+Randname;
 var matches = body[propname].match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
var imbuffer = new Buffer(matches[2], 'base64')
fs.writeFileSync(Fullname, imbuffer);
body[propname]=Fullname;
console.log("WRITTEN");


}
router.post("/",postMiddleware,function(request,response){

   // mongoose.set('debug', true);  
 rewriteimage(request.body,"image");
  
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
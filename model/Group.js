var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var group =new  Schema({
    name     : {type:String,required:true},
    adminId    : {type:Schema.Types.ObjectId,required:true},
    image : String,
    users:{type:[{type:Schema.Types.ObjectId,ref:"user"}],required:true},
    Joinedusers:{type:[{type:Schema.Types.ObjectId,ref:"user"}],default:[]}
    
});

module.exports=mongoose.model("groups",group);
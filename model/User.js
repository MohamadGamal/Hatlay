var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var user =new  Schema({
    name     : {type:String,required:true},
    email    : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    friends  : [{type:Schema.Types.ObjectId,ref:'user'}],
    groups   : [{type:Schema.Types.ObjectId,ref: "groups"}],
    notification :[{}],
    _token	 : {type:String,required:false},
});
mongoose.model("user",user);
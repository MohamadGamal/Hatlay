var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var user =new  Schema({
    name     : String,
    email    : String,
    password : String,
    friends  : [{type:Sckema.Types.ObjectId,ref:'user'}],
    groups   : [{type:Sckema.Types.ObjectId,ref: "groups"}]
});
mongoose.model("user",user);
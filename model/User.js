var mongoose = require("mongoose");

var Sckema = mongoose.Schema;

var user =new  Sckema({
    name     : String,
    email    : String,
    password : String,
    friends  : [{type:Sckema.Types.ObjectId,ref:'user'}]
});

mongoose.model("user",user);
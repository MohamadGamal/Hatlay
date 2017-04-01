var mongoose = require("mongoose");

var Sckema = mongoose.Schema;

var user =new  Sckema({
    name     : String,
    email    : String,
    password : String
});

mongoose.model("user",user);
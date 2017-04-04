var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var user =new  Schema({
    name     : String,
    email    : String,
    password : String
});

mongoose.model("user",user);
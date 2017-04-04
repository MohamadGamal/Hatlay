var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var user =new  Schema({
    name     : String,
    adminId    : mongoose.Types.ObjectId,
    image : String,
    
});

mongoose.model("user",user);
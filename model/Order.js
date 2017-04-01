var mongoose=require("mongoose")
var Schema=mongoose.Schema;

var orders=new Schema({
  number:Number,
  meals:[{name:String,price:Number}]
});

mongoose.model("orders",orders);

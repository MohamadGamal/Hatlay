
var mongoose=require("mongoose")
var Schema=mongoose.Schema;

var resturants=new Schema({
  name:String,
  menu:String,
  location:{name:String,coords:{x:Number,y:Number}},
})



module.exports=mongoose.model("resturants",resturants);
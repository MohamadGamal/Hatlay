var mongoose=require("mongoose")
var Schema=mongoose.Schema;

var resturants=new Schema({
  name:String,
  menu: {type:String,required:true},
  location:{name:String,coords:{x:Number,y:Number}},
})



module.exports=mongoose.model("resturants",resturants);
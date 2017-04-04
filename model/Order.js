var mongoose=require("mongoose")
var Schema=mongoose.Schema;

var orders=new Schema({
  number:Number,
  status:String,
  time:String,
  createdate:Date,//could use timestamps

  users:[{userId:Schema.Types.ObjectId,groupId:Schema.Types.ObjectId,name:String,groupname:String}],
  meals:[{name:String,price:Number,amount:Number,itemId:Schema.Types.ObjectId,userIsd:Schema.Types.ObjectId}]
});

mongoose.model("order",orders);

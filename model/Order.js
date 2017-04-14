var mongoose=require("mongoose")
var Schema=mongoose.Schema;

var orders=new Schema({
 
  icon:{type:String,default:"sa"},
   name:{type:String,required:true},
  status:{type:String,required:true, enum: ['Active', 'Finished','Cancelled'],default:'Active'},
  time:{type:String,match:/^[0-9]{1,2}:[0-9]{1,2}$/},
  createdate:{type:Date,default:Date.now()},//could use timestamps
 adminId    : {type:Schema.Types.ObjectId,ref: "user",required:true},
  users:
 { type:[{
    userId:{type:Schema.Types.ObjectId,required:true},
    groupId:Schema.Types.ObjectId,
    name:{type:String,required:true},
    groupname:String
  }]
  ,required:true 
},
resturant:{type:Schema.Types.ObjectId,ref: "resturants"}
,
  meals:
  [{
    name:String,
    price:Number,
    amount:Number,
      username:String,
      comment:String,
    itemId:Schema.Types.ObjectId,
    userId:Schema.Types.ObjectId,
  
  }]
});

module.exports=mongoose.model("orders",orders);


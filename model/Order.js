var mongoose=require("mongoose")
var Schema=mongoose.Schema;

var orders=new Schema({
  number:{type:Number,required:true},
  icon:{type:String,default:"sa"},
   name:{type:String,required:true},
  status:{type:String,required:true, enum: ['Active', 'Finished','Cancelled'],default:'Active'},
  time:{type:String,match:/^[0-9]{1,2}:[0-9]{1,2}$/},
  createdate:{type:Date,default:Date.now()},//could use timestamps

  users:
 { type:[{
    userId:{type:Schema.Types.ObjectId,required:true},
    groupId:Schema.Types.ObjectId,
    name:{type:String,required:true},
    groupname:String
  }],required:true },
  meals:
  [{
    name:String,
    price:Number,
    amount:Number,
    itemId:Schema.Types.ObjectId,
    userIsd:Schema.Types.ObjectId
  }]
});

module.exports=mongoose.model("orders",orders);


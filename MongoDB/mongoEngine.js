
var TableModel = require("../model/"+tableName);

function save(tableName , element , callback){
   var object = new  TableModel(element);
   object.save((err,data)=>{       
        callback(err,data);
   });
}

function find(tableName , condition , callback){
    

}
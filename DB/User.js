//may be  user save ->>>>  mongo save ()
//or  be  user save ->>>>  mysql save ()
///  whithout any change in bussines logic 

var db = require('../MongoDB/mongoEngine');

function save(tableName , element , callback){
    db.save(tableName , element , callback);
}

function find(tableName , condition , callback){
    db.find(tableName , condition , callback);
}

function update(tableName , condition ,element , callback){
    db.update(tableName , condition ,element , callback);
}
function remove(tableName , condition , callback){
    db.save(tableName , condition , callback);
}

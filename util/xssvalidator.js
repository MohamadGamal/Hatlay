var validator=require("validator")

function validateobj(myobj){
 console.log("IN");
        Object.keys(myobj).forEach((value,i)=>{
          console.log("IN",typeof myobj[i]);
           if(typeof myobj[value] =="object" )
            validateobj(myobj[value])
           else if(typeof myobj[value] =="string")
            {myobj[value]=validator.escape(myobj[value]) 
                console.log("VALUE",value)
            }          
        })
}
module.exports=  (request,response,next)=>{
    console.log("VAlidation",validator.escape("<sd>'dsdds}]"))
var types=["params","body","query"];
types.forEach((value,index)=>{
    if(request[value]){
        validateobj(request[value]);
console.log("VA",request[value])
    }
})




    next();
}
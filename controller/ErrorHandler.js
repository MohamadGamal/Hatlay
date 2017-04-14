module.exports = function(response,message , status){
    response.status(status);
    response.json(message);
}
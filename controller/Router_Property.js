
module.exports = (Modelname) => {
  return function (parameterObject) {
    var express = require('express');
    var router = express.Router();
    var mainModel = require("../model/" + Modelname)
    var mongoose = require("mongoose");
    var bodyParser = require('body-parser')
    var postMiddleware = bodyParser.urlencoded({ extended: true });
    function postandput(request, response) {
      var addedobj = {};
      addedobj[parameterObject.propname] = request.body[parameterObject.propname];
      mainModel.findByIdAndUpdate(request.oldobj.id, { $set: addedobj }, function (err, data) {
        response.json(err ? err : data);
      });

    }
    router.get("/", function (request, response) {
      console.log("IN");
      projobj = {};
      projobj[parameterObject.propname] = true;
      // response.json(request.oldobj.id);
      mainModel.find({ _id: request.oldobj.id },
        projobj,
        function (err, data) {
          if (!err) {
            response.json(data);
          }
        });
    });
    router.post("/", postMiddleware, postandput);

    router.put("/", postMiddleware, postandput);

    router.delete("/", function (request, response) {
      mongoose.set('debug', true);
      var subobj = {};
      subobj[parameterObject.propname] = ""
      var addedobj = {};
      addedobj[parameterObject.propname] = parameterObject.docpart ? subobj : request.params.id;
      mainModel.findByIdAndUpdate(request.oldobj.id, { $unset: addedobj }, function (err, data) {
        response.json(err ? err : data);
      });

    });

    return router;
  }
}
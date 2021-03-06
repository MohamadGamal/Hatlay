
module.exports = (Modelname) => {
  return function (parameterObject) {
    var express = require('express');
    var router = express.Router();
    var mainModel = require("../model/" + Modelname)
    var mongoose = require("mongoose");
    var bodyParser = require('body-parser')
    var postMiddleware = bodyParser.urlencoded({ extended: true });
    var attrtobe = parameterObject.propname;
    var attrtobe = parameterObject.docpart ? attrtobe + '.' + parameterObject.docpart : attrtobe;
    router.hooks = {
      getsave: []
    }
    router.middlewares = {
      get: {
        "0": [],
        "1": []
      },
      post: {
        "0": [],
        "1": []
      },
      put: {
        "0": [],
        "1": []
      },
      delete: {
        "0": [],
        "1": []
      }
    }

    router.onhook = function (hook, func) {
      this.hooks[hook].push(func);
    }
    router.middleware = function (funtype, paramlen, func) {
      this.middlewares[funtype][paramlen].push(func);
    }

    router.get("/", router.middlewares.get[0], function (request, response) {
      console.log("IN");
      projobj = {};
      projobj[parameterObject.propname] = true;
      // response.json(request.oldobj.id);
      console.log("REG", request.oldobj);
      mainModel.find({ _id: request.oldobj.id },
        projobj,
        function (err, data) {
          if (!err) {
            router.hooks.getsave.forEach((elem, indx) => { elem(request.params, request.body) })
            response.json(data);
          }
        });
    });

    router.get("/:docid", router.middlewares.get[1], function (request, response) {
      console.log("IN");
      // response.json(request.oldobj.id);
      var srchobj = { _id: request.oldobj.id };
      var projobj = {};
      projobj[parameterObject.propname + '.$'] = true;
      srchobj[attrtobe] = request.params.docid;
      mainModel.find(srchobj,
        projobj,
        function (err, data) {
          if (!err) {
            response.json(err ? err : data);
          }
        });
    });
    router.post("/", router.middlewares.post[0], postMiddleware, function (request, response) {
      var addedobj = {};
      addedobj[parameterObject.propname] = parameterObject.docpart ? request.body : request.body[Object.keys(request.body)[0]];
      mainModel.findByIdAndUpdate(request.oldobj.id, { $addToSet: addedobj }, function (err, data) {
        response.json(err ? err : data);
      });
    });

    router.put("/:id", router.middlewares.put[1], postMiddleware, function (request, response) {
      mongoose.set('debug', true);
      var addedobj = {};
      var findobj = { _id: request.oldobj.id };
      findobj[attrtobe] = request.params.id;
      console.log(findobj);
      //   console.log("OBJECT",findobj,addedobj)
      addedobj[parameterObject.propname + ".$"] = parameterObject.docpart ? request.body : request.body[Object.keys(request.body)[0]];
      console.log('AO', addedobj);
      mainModel.update(findobj, { $set: addedobj }, function (err, data) {
        response.json(err ? err : data);
      });


    });

    router.delete("/:id", router.middlewares.delete[1], function (request, response) {
      mongoose.set('debug', true);
      var subobj = {};
      subobj[parameterObject.docpart ? parameterObject.docpart : 0] = request.params.id
      var addedobj = {};
      addedobj[parameterObject.propname] = parameterObject.docpart ? subobj : request.params.id;
      mainModel.findByIdAndUpdate(request.oldobj.id, { $pull: addedobj }, function (err, data) {
        response.json(err ? err : data);
      });

    });

    return router;
  }
}
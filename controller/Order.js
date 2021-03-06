var express = require('express');
var router = express.Router();
var Order = require(__dirname + "/../model/Order")
var mongoose = require("mongoose");
var modelRouter = require("./Router_Document")("Order");
var propRouter = require("./Router_Property")("Order");
var usersRouter = modelRouter({
  propname: "users",
  docpart: "userId",

});
usersRouter.onhook('getsave', (param, body) => {
  console.log('IN HOOOOL', param, body)
})

var mealsRouter = modelRouter({
  propname: "meals",
  docpart: "_id",

});
var statusRouter = propRouter({
  propname: "status"

});
//var mealsRouter=require("./Order_Meals");
var bodyParser = require('body-parser')

var postMiddleware = bodyParser.urlencoded({ extended: true });

var validator = require("validator");

//router.use("/:uid/users/",usersRouter);


router.get("/", function (request, response) {
  //$text:{$search:request.params.query}

  Order.find({},
    function (err, data) {
      if (!err) {
        response.json(data);
      }
    });
});

var notify = function (param) {
  console.log(param);
  var statues = 0;
  //    console.log((socketMap.get(param.reciver)).size);
  // param.reciver=param.reciver.toString();
  // console.log("STARTED NOTIFY :" ,socketMap);
  //  console.log("STARTED NOTIFY :" , param.reciver);
  // console.log("STARTED NOTIFY :" , socketMap.get(param.reciver));
  // console.log("Testtostring :" , socketMap.get(param.reciver.toString()));
  console.log("STARTED NOTIFY :", typeof param.reciver);
  if (socketMap.get(param.reciver)) {
    console.log("STARTEDPARAM ON", param.reciver);
    statues = 1;
    for (var key of socketMap.get(param.reciver).keys()) {
      key.emit('message', {
        type: 'new-message',
        text: param.sender + " Finalized Your Order , You should pay :" + param.hastopay + "!"
      });

      console.log("con st :" + key.connected);
    }

  }
  mongoose.set('debug', true);
  mongoose.model("user").update({ _id: param.reciver },
    {
      $push: {
        notification: {
          body: param.sender + " follow you.", statues: statues
        }
      }
    }, (err, d) => console.log(err, d));


}
router.get("/notifs/:query", function (request, response) {
  //$text:{$search:request.params.query}
  mongoose.set('debug', true);
  console.log('ZOOOOOOOOOOOZOOO', request.params.query);
  Order.find({ adminId: { $in: JSON.parse(request.params.query) } })
    .sort({ createdate: -1 })
    .limit(50)
    .populate('resturant')
    .exec(
    function (err, data) {
      if (!err) {
        response.json(data);
      }
    });
});
router.get("/:query", function (request, response) {
  //$text:{$search:request.params.query}
  //var srchobj=validator.isMongoId(request.params.query)?{_id:request.params.query}:{$text:{$search:request.params.query}};

  Order.findOne({ '_id': request.params.query },
    function (err, data) {
      if (!err) {
        response.json(data);
      }
    });
});
router.get("/:query/finalize/", function (request, response) {
  //$text:{$search:request.params.query}
  //var srchobj=validator.isMongoId(request.params.query)?{_id:request.params.query}:{$text:{$search:request.params.query}};
  //db.orders.mapReduce(,,{query:,out:{inline:1}}).results

  Order.mapReduce({
    map: function () { for (i of this.meals) { emit({ id: i.userId, name: i.username }, i.price) } },
    reduce: function (keys, vals) { return Array.sum(vals) },
    query: { _id: request.params.query }




  },
    function (err, data) {
      if (!err) {
        Order.findOne({ '_id': request.params.query }).populate('adminId').exec(
          function (orerr, order) {
            if (!err) {
              data.forEach((val) => {
                notify({ sender: order.adminId.name, reciver: val._id.id.toString(), hastopay: val.value });
                response.json(data);
              })

            }
          })

      }
    });
});


router.get("/user/:query", function (request, response) {
  //$text:{$search:request.params.query}
  //var srchobj=validator.isMongoId(request.params.query)?{_id:request.params.query}:{$text:{$search:request.params.query}};


  Order.find({ 'users.userId': request.params.query },
    function (err, data) {
      if (!err) {
        response.json(data);
      }
    });
});






router.post("/", postMiddleware, function (request, response) {

  // mongoose.set('debug', true);  


  order = new Order(request.body);
  console.log(order);
  console.log(typeof request.body.meals);
  order.save(function (err, info) {
    response.json(err ? err : info);

  });

});

router.put("/:id", postMiddleware, function (request, response) {
  mongoose.set('debug', true);

  Order.findByIdAndUpdate(request.params.id, request.body, function (err, data) {
    response.json(err ? err : data);
  });


});

router.delete("/:id", function (request, response) {
  Order.remove({ _id: request.params.id }, function (err, info) {
    response.json(err ? err : info);
  })
});
middlebody = require("../util/paramsaver");
router.use("/:ordid", middlebody);
router.use("/:ordid/user/", usersRouter);
router.use("/:ordid/meal/", mealsRouter);
router.use("/:ordid/status/", statusRouter);
module.exports = router;

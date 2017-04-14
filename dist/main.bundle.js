webpackJsonp([1,5],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClientService = (function () {
    function HttpClientService(http) {
        this.http = http;
    }
    HttpClientService.prototype.appendToken = function (header) {
        this.headers = header || new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("x-access-token", localStorage.getItem('token'));
    };
    HttpClientService.prototype.get = function (url, header) {
        if (header === void 0) { header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](); }
        this.appendToken(header);
        return this.http.get(url, { headers: this.headers });
    };
    HttpClientService.prototype.post = function (url, data, header) {
        if (header === void 0) { header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](); }
        this.appendToken(header);
        return this.http.post(url, data, { headers: this.headers });
    };
    HttpClientService.prototype.put = function (url, data, header) {
        if (header === void 0) { header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](); }
        this.appendToken(header);
        return this.http.put(url, data, { headers: this.headers });
    };
    HttpClientService.prototype.delete = function (url, header) {
        if (header === void 0) { header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](); }
        this.appendToken(header);
        return this.http.delete(url, { headers: this.headers });
    };
    HttpClientService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], HttpClientService);
    return HttpClientService;
    var _a;
}());
//# sourceMappingURL=http-client.service.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shareable_http_client_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersService = (function () {
    function OrdersService(http) {
        this.http = http;
        this.Url = 'http://localhost:8000/order/';
    }
    OrdersService.prototype.getorders = function (id) {
        return this.http.get(this.Url + "/user/" + id)
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    OrdersService.prototype.getorder = function (id) {
        return this.http.get(this.Url + "/" + id)
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    OrdersService.prototype.removeorder = function (id) {
        return this.http.delete(this.Url + "/" + id)
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    OrdersService.prototype.finishorder = function (id) {
        return this.http.put(this.Url + "/" + id + "/status/", { status: "Finished" })
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    OrdersService.prototype.addorder = function (order) {
        return this.http.post(this.Url + "/", order)
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    OrdersService.prototype.addmeal = function (id, meal) {
        console.log(this.Url + id + "/meal/");
        console.log(meal);
        return this.http.post(this.Url + id + "/meal/", meal)
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    OrdersService.prototype.deletemeal = function (id, mid) {
        console.log(this.Url + id + "/meal/");
        return this.http.delete(this.Url + id + "/meal/" + mid)
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    OrdersService.prototype.adduser = function (id, user) {
        console.log(this.Url + id + "/user/");
        console.log(user);
        return this.http.post(this.Url + id + "/meal/", user)
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    OrdersService.prototype.addRestaurant = function (restaurant) {
        return this.http.post('http://localhost:8000/resturant/', restaurant)
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    OrdersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shareable_http_client_service__["a" /* HttpClientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shareable_http_client_service__["a" /* HttpClientService */]) === 'function' && _a) || Object])
    ], OrdersService);
    return OrdersService;
    var _a;
}());
//# sourceMappingURL=orders.service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shareable_auth_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shareable_user_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendsComponent = (function () {
    function FriendsComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.user = null;
        this.friend = null;
        this.isFriend = false;
        //// search url 
        this.URL = "http://localhost:8000/user/";
        console.log("constructor");
        this.user = userService.getUser();
        console.log(userService.getUser());
    }
    FriendsComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    FriendsComponent.prototype.addSearchResult = function (friend) {
        this.isFriend = false;
        this.friend = friend;
        console.log(this.user);
        for (var i = 0; i < this.user.friends.length; i++) {
            if (this.friend._id == this.user.friends[i]._id) {
                this.isFriend = true;
                break;
            }
        }
    };
    FriendsComponent.prototype.unfollow = function (id) {
        if (this.userService.unfollow(id)) {
            for (var i = 0; i < this.user.friends.length; i++) {
                if (id == this.user.friends[i]._id) {
                    this.user.friends.splice(i, 1);
                    this.friend = null;
                    break;
                }
            }
            console.log(this.user);
        }
        else {
            console.log("error");
        }
    };
    FriendsComponent.prototype.follow = function (friend) {
        if (this.userService.follow(friend._id)) {
            this.friend = null;
            this.user.friends.push(friend);
        }
        else {
            console.log("error");
        }
    };
    FriendsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(655),
            styles: [__webpack_require__(633)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shareable_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shareable_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shareable_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shareable_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], FriendsComponent);
    return FriendsComponent;
    var _a, _b;
}());
//# sourceMappingURL=friends.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shareable_user_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shareable_group_service__ = __webpack_require__(360);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupsComponent = (function () {
    function GroupsComponent(userservice, groupservice) {
        // console.log(userservice.refreshUserFull());
        //console.log(userservice.getUserFull());
        this.userservice = userservice;
        this.groupservice = groupservice;
        this.choosenList = [];
        this.img = null;
    }
    GroupsComponent.prototype.removefromlist = function (index) {
        this.userfriends.push(this.choosenList[index]);
        this.choosenList.splice(index, 1);
    };
    GroupsComponent.prototype.addtolist = function (email) {
        var i = 0;
        while (this.user.friends.length != i && this.user.friends[i].email != email && ++i)
            ;
        console.log(i, email);
        if (this.user.friends.length != i) {
            this.choosenList.push(this.user.friends[i]);
            this.userfriends.splice(i, 1);
        }
    };
    GroupsComponent.prototype.addgroup = function (name) {
        var _this = this;
        var group = { name: name, users: this.choosenList.map(function (n) { return n._id; }), adminId: this.user._id };
        this.img ? group["image"] = this.img : "";
        //console.log(group);
        this.groupservice.addgroup(group).subscribe(function (res) {
            if (res._id) {
                for (var _i = 0, _a = _this.choosenList; _i < _a.length; _i++) {
                    var elem = _a[_i];
                    _this.userservice.addgrouptouser(elem._id, res._id).subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
                    console.log("PAIR GROUP:", elem._id, res._id);
                }
                console.log("PAIR USER:", _this.user._id, res._id);
                console.log("RESID:", res._id);
                _this.userservice.addgrouptouser(_this.user._id, res._id).subscribe(function (res) { _this.initaall(); }, function (err) { return console.log(err); });
            }
            else
                console.log(res);
        }, function (err) { return console.log(err); });
    };
    GroupsComponent.prototype.uploaded = function (file) {
        this.img = file;
        console.log(file);
    };
    GroupsComponent.prototype.initaall = function () {
        var _this = this;
        this.choosenList = [];
        console.log(this.choosenList);
        this.userservice.refreshUserFull().subscribe(function (resp) { _this.userfriends = resp.friends; _this.user = resp; console.log(resp); }, function (err) { return console.log(err); });
    };
    GroupsComponent.prototype.ngOnInit = function () {
        this.initaall();
    };
    GroupsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(656),
            styles: [__webpack_require__(634)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shareable_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shareable_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shareable_group_service__["a" /* GroupService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shareable_group_service__["a" /* GroupService */]) === 'function' && _b) || Object])
    ], GroupsComponent);
    return GroupsComponent;
    var _a, _b;
}());
//# sourceMappingURL=groups.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(657),
            styles: [__webpack_require__(635)],
            providers: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shareable_auth_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_model__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__model_user_model__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("res");
        this.authService.doLogin(this.user).then(function (res) {
            console.log(res);
            if (res) {
                _this.router.navigate(["/home"]);
            }
            else {
                console.log(res);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(658),
            styles: [__webpack_require__(636)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shareable_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shareable_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(659),
            styles: [__webpack_require__(637)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a;
}());
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shareable_user_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shareable_orders_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddOrderComponent = (function () {
    function AddOrderComponent(userService, orderService) {
        this.userService = userService;
        this.orderService = orderService;
        this.inviated = [];
        this.newRestaurant = {};
        this.order = { name: "", time: "" };
        this.allFriendsAndGroups = [];
        this.URL = "http://localhost:8000/resturant/";
        this.toggleRestaur = false;
        this.toggleSelectedRest = true;
        this.user = {};
    }
    AddOrderComponent.prototype.ngOnInit = function () {
        //a=[1,2,
        this.user = this.userService.getUser();
        this.allFriendsAndGroups = this.allFriendsAndGroups.concat(this.user.groups.map(function (val) { val.difftype = "Groups"; return val; }));
        this.allFriendsAndGroups = this.allFriendsAndGroups.concat(this.user.friends.map(function (val) { val.difftype = "Friends"; return val; }));
        console.log('allfs and grs', this.allFriendsAndGroups);
    };
    AddOrderComponent.prototype.addSearchResult = function (restaurant) {
        this.restaurant = restaurant;
        this.toggleSelectedRest = !this.toggleSelectedRest;
    };
    AddOrderComponent.prototype.addRestuernt = function () {
        var _this = this;
        console.log("tbd", this.newRestaurant);
        this.orderService.addRestaurant(this.newRestaurant)
            .subscribe(function (res) {
            _this.restaurant = res;
            console.log(res);
            _this.toggleSelectedRest = !_this.toggleSelectedRest;
            _this.toggleRestaur = !_this.toggleRestaur;
            _this.newRestaurant = {};
        }, function (err) { return console.log(err); });
    };
    AddOrderComponent.prototype.invaite = function (item) {
        this.inviated.push(item);
        this.allFriendsAndGroups.splice(this.allFriendsAndGroups.indexOf(item), 1);
        if (item.difftype == "Groups")
            for (var _i = 0, _a = this.allFriendsAndGroups.filter(function (val) { return val.difftype == "Friends"; }); _i < _a.length; _i++) {
                var i = _a[_i];
                if (item.users.filter(function (val) { return val == i._id; }).length)
                    this.allFriendsAndGroups.splice(this.allFriendsAndGroups.indexOf(i), 1);
            }
        this.searchTerm = "";
    };
    AddOrderComponent.prototype.remove = function (item) {
        if (item.difftype == "Groups")
            for (var _i = 0, _a = item.users; _i < _a.length; _i++) {
                var i = _a[_i];
                if (this.user.friends.filter(function (val) { return val._id == i; }).length && !(this.allFriendsAndGroups.filter(function (val) { return val._id == i; }).length)) {
                    var user = this.user.friends.filter(function (val) { return val._id == i; })[0];
                    user.difftype = "Friends";
                    this.allFriendsAndGroups.push(user);
                }
            }
        this.allFriendsAndGroups.push(item);
        this.inviated.splice(this.inviated.indexOf(item), 1);
    };
    AddOrderComponent.prototype.uploaded = function (menu) {
        this.newRestaurant['menu'] = menu;
    };
    AddOrderComponent.prototype.addOrder = function () {
        var endjob = {};
        endjob[this.user._id] = { userId: this.user._id, name: this.user.name };
        for (var _i = 0, _a = this.inviated.filter(function (val) { return val.difftype == "Friends"; }); _i < _a.length; _i++) {
            var myuser = _a[_i];
            console.log("Friend", myuser);
        }
        for (var _b = 0, _c = this.inviated.filter(function (val) { return val.difftype == "Groups"; }); _b < _c.length; _b++) {
            var i = _c[_b];
            var myuser_1 = {};
            for (var _d = 0, _e = i.users; _d < _e.length; _d++) {
                var us = _e[_d];
                console.log(i);
                var myuser_2 = this.user.friends.filter(function (val) { return val._id == us; })[0];
                console.log(myuser_2);
                endjob[myuser_2._id] = { userId: myuser_2._id, name: myuser_2.name, groupId: i._id, groupname: i.name };
            }
        }
        var users = [];
        for (var user in endjob)
            users.push(endjob[user]);
        var myorder = {
            name: this.order.name,
            time: this.order.time,
            users: users,
            resturant: this.restaurant._id,
            adminId: this.user._id
        };
        console.log(myorder);
        this.orderService.addorder(myorder).subscribe(function (resp) { return console.log(resp); }, function (err) { return console.log(err); });
        console.log(this.order);
        console.log("Ejob", endjob);
    };
    AddOrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-order',
            template: __webpack_require__(660),
            styles: [__webpack_require__(638)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shareable_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shareable_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shareable_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shareable_orders_service__["a" /* OrdersService */]) === 'function' && _b) || Object])
    ], AddOrderComponent);
    return AddOrderComponent;
    var _a, _b;
}());
//# sourceMappingURL=add-order.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shareable_orders_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shareable_user_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditOrderComponent = (function () {
    function EditOrderComponent(route, ordersservice, userservice) {
        this.route = route;
        this.ordersservice = ordersservice;
        this.userservice = userservice;
        this.order = { _id: 0 };
    }
    EditOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (resp) {
            var id;
            id = resp["id"];
            _this.ordersservice.getorder(id).subscribe(function (resp) { _this.order = resp; console.log(resp); }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    EditOrderComponent.prototype.deleteentry = function (mealid) {
        var _this = this;
        this.ordersservice.deletemeal(this.order._id, mealid).subscribe(function (value) {
            value ? _this.ordersservice.getorder(_this.order._id).subscribe(function (resp) { _this.order = resp; console.log(resp); }, function (err) { return console.log(err); }) : console.log(value);
        }, function (err) { console.log(err); });
    };
    EditOrderComponent.prototype.addentry = function (mealname, amount, price, comment) {
        var _this = this;
        this.ordersservice.addmeal(this.order._id, {
            username: this.userservice.getUser().name,
            userId: this.userservice.getUser()._id,
            amount: amount,
            name: mealname,
            price: price,
            comment: comment
        }).subscribe(function (value) {
            value ? _this.ordersservice.getorder(_this.order._id).subscribe(function (resp) { _this.order = resp; console.log(resp); }, function (err) { return console.log(err); }) : console.log(value);
        }, function (err) { console.log(err); });
    };
    EditOrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-order',
            template: __webpack_require__(661),
            styles: [__webpack_require__(639)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shareable_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shareable_orders_service__["a" /* OrdersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shareable_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shareable_user_service__["a" /* UserService */]) === 'function' && _c) || Object])
    ], EditOrderComponent);
    return EditOrderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=edit-order.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shareable_orders_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shareable_user_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListordersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListordersComponent = (function () {
    function ListordersComponent(ordersservice, userservice) {
        this.ordersservice = ordersservice;
        this.userservice = userservice;
        this.orderslist = [];
    }
    ListordersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ordersservice.getorders(this.userservice.getUser()._id).subscribe(function (resp) { _this.orderslist = resp; console.log(resp); }, function (err) { return console.log(err); });
    };
    ListordersComponent.prototype.finishorder = function (orderid) {
        var _this = this;
        this.ordersservice.finishorder(orderid).subscribe(function (resp) {
            _this.ordersservice.getorders(_this.userservice.getUser()._id).subscribe(function (resp) { _this.orderslist = resp; console.log(resp); }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    ListordersComponent.prototype.removeorder = function (orderid) {
        var _this = this;
        this.ordersservice.removeorder(orderid).subscribe(function (resp) {
            _this.ordersservice.getorders(_this.userservice.getUser()._id).subscribe(function (resp) { _this.orderslist = resp; console.log(resp); }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
    };
    ListordersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listorders',
            template: __webpack_require__(662),
            styles: [__webpack_require__(640)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shareable_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shareable_orders_service__["a" /* OrdersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shareable_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shareable_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], ListordersComponent);
    return ListordersComponent;
    var _a, _b;
}());
//# sourceMappingURL=listorders.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shareable_orders_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = (function () {
    function OrdersComponent(route) {
        this.route = route;
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(663),
            styles: [__webpack_require__(641)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shareable_orders_service__["a" /* OrdersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], OrdersComponent);
    return OrdersComponent;
    var _a;
}());
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(664),
            styles: [__webpack_require__(642)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shareable_auth_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user_model__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__model_user_model__["a" /* User */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_3__model_user_model__["a" /* User */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.doRegister(this.user).then(function (res) {
            if (res) {
                _this.router.navigate(["/home"]);
            }
            else {
                console.log(res);
            }
        });
        console.log(this.user);
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(665),
            styles: [__webpack_require__(643)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shareable_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shareable_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shareable_http_client_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupService = (function () {
    function GroupService(http) {
        this.http = http;
        this.Url = 'http://localhost:8000/group/';
    }
    GroupService.prototype.addgroup = function (group) {
        console.log(this.Url + "/");
        return this.http.post(this.Url + "/", group)
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    GroupService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shareable_http_client_service__["a" /* HttpClientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shareable_http_client_service__["a" /* HttpClientService */]) === 'function' && _a) || Object])
    ], GroupService);
    return GroupService;
    var _a;
}());
//# sourceMappingURL=group.service.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 425;


/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(560);




// import "materialize-css";
// import "angular2-materialize";
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shareable_http_client_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userFull = {};
        this.Url = 'http://localhost:8000/user';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.getUser = function () {
        return this.user;
    };
    UserService.prototype.setUser = function (user) {
        this.user = user;
    };
    UserService.prototype.clearNotification = function () {
        return this.http
            .get(this.Url + "/notification")
            .toPromise()
            .then(function (res) { return true; })
            .catch(function (res) { return false; });
    };
    UserService.prototype.getUserFull = function () {
        return this.userFull;
    };
    UserService.prototype.refreshUserFull = function () {
        var _this = this;
        console.log(this.Url + "/" + this.user._id);
        return this.http.get(this.Url + "/" + this.user._id)
            .map(function (response) { return response.json() ? _this.userFull = response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    UserService.prototype.addgrouptouser = function (userid, groupid) {
        console.log("URL :", this.Url + "/" + userid + "/group" + groupid);
        return this.http.post(this.Url + "/" + userid + "/group", { id: groupid })
            .map(function (response) { return response.json() ? response.json() : false; })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw('errrror'); });
    };
    UserService.prototype.reloadUser = function () {
        var user = JSON.parse(localStorage.getItem("user"));
        return user;
    };
    UserService.prototype.follow = function (id) {
        return this.http
            .get(this.Url + "/friend/" + id)
            .toPromise()
            .then(function (res) { return true; })
            .catch(function (res) { return false; });
    };
    UserService.prototype.unfollow = function (id) {
        return this.http
            .delete(this.Url + "/friend/" + id)
            .toPromise()
            .then(function (res) { return true; })
            .catch(function (res) { return false; });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shareable_http_client_service__["a" /* HttpClientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shareable_http_client_service__["a" /* HttpClientService */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_ioservice_service__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shareable_auth_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shareable_user_service__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, authService, userService, socketIOServiceService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.socketIOServiceService = socketIOServiceService;
        this.user = null;
        this.logined = false;
        this.messages = [];
        this.notificationNmber = 0;
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalMenuActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.authService.isLoggedIn().subscribe(function (loggedIn) {
            _this.logined = loggedIn;
            _this.user = _this.userService.getUser();
            console.log(_this.userService.getUser());
            if (_this.user) {
                console.log("start ");
                _this.connection = _this.socketIOServiceService
                    .getMessages()
                    .subscribe(function (message) {
                    _this.messages.push(message);
                    _this.notificationNmber++;
                });
            }
            else {
                if (_this.connection)
                    _this.connection.unsubscribe();
            }
        });
    }
    AppComponent.prototype.ngOnChanges = function (changes) { };
    AppComponent.prototype.logout = function () {
        this.authService.logOut();
        this.connection.unsubscribe();
        this.router.navigate(["/home"]);
    };
    AppComponent.prototype.showSideNav = function () {
    };
    AppComponent.prototype.sendMessage = function () {
        this.socketIOServiceService.sendMessage(this.message);
        this.message = '';
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () { this.connection.unsubscribe(); };
    AppComponent.prototype.openModal = function () {
        this.notificationNmber = 0;
        console.log(this.userService.clearNotification());
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    AppComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    AppComponent.prototype.openMenuModal = function () {
        this.modalMenuActions.emit({ action: "modal", params: ['open'] });
    };
    AppComponent.prototype.closeMenuModal = function () {
        this.modalMenuActions.emit({ action: "modal", params: ['close'] });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(653),
            styles: [__webpack_require__(631)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__socket_ioservice_service__["a" /* SocketIOServiceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shareable_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shareable_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shareable_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shareable_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__socket_ioservice_service__["a" /* SocketIOServiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__socket_ioservice_service__["a" /* SocketIOServiceService */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shareable_http_client_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shareable_auth_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shareable_user_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shareable_group_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__friends_friends_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__groups_groups_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__groups_singlegroup_singlegroup_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shareable_iflogged_directive__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shareable_objectmapper_pipe__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_search_user_search_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__orders_orders_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__orders_add_order_add_order_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shareable_user_user_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__orders_listorders_listorders_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shareable_orders_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shareable_unique_pipe__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__filter_pipe__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_materialize__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__orders_edit_order_edit_order_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__fileuploader_fileuploader_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__menu_menu_component__ = __webpack_require__(352);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__friends_friends_component__["a" /* FriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__groups_groups_component__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__groups_singlegroup_singlegroup_component__["a" /* SinglegroupComponent */],
                __WEBPACK_IMPORTED_MODULE_17__shareable_iflogged_directive__["a" /* IfloggedDirective */],
                __WEBPACK_IMPORTED_MODULE_18__shareable_objectmapper_pipe__["a" /* ObjectmapperPipe */],
                __WEBPACK_IMPORTED_MODULE_19__user_search_user_search_component__["a" /* UserSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_20__orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_21__orders_add_order_add_order_component__["a" /* AddOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shareable_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_23__orders_listorders_listorders_component__["a" /* ListordersComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shareable_unique_pipe__["a" /* UniquePipe */],
                __WEBPACK_IMPORTED_MODULE_26__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_28__orders_edit_order_edit_order_component__["a" /* EditOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_29__fileuploader_fileuploader_component__["a" /* FileuploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__menu_menu_component__["a" /* MenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_27_angular2_materialize__["MaterializeModule"],
                __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* AppRoutingModule */] /// routes from another file
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__shareable_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__shareable_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__shareable_http_client_service__["a" /* HttpClientService */], __WEBPACK_IMPORTED_MODULE_10__shareable_group_service__["a" /* GroupService */], __WEBPACK_IMPORTED_MODULE_24__shareable_orders_service__["a" /* OrdersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friends_friends_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__groups_groups_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__orders_orders_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orders_add_order_add_order_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__orders_edit_order_edit_order_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__orders_listorders_listorders_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__ = __webpack_require__(352);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'friends',
        component: __WEBPACK_IMPORTED_MODULE_5__friends_friends_component__["a" /* FriendsComponent */]
    },
    {
        path: 'groups',
        component: __WEBPACK_IMPORTED_MODULE_6__groups_groups_component__["a" /* GroupsComponent */]
    }, {
        path: 'menu',
        component: __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__["a" /* MenuComponent */]
    },
    {
        path: 'orders',
        component: __WEBPACK_IMPORTED_MODULE_8__orders_orders_component__["a" /* OrdersComponent */],
        children: [
            // {path: '', redirectTo: 'medium', pathMatch: 'full'},
            {
                path: 'list',
                component: __WEBPACK_IMPORTED_MODULE_11__orders_listorders_listorders_component__["a" /* ListordersComponent */]
            },
            {
                path: 'add',
                component: __WEBPACK_IMPORTED_MODULE_9__orders_add_order_add_order_component__["a" /* AddOrderComponent */]
            },
            {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_10__orders_edit_order_edit_order_component__["a" /* EditOrderComponent */]
            }
        ]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
    },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileuploaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileuploaderComponent = (function () {
    function FileuploaderComponent() {
        this.currfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputname = "";
    }
    FileuploaderComponent.prototype.ngOnInit = function () {
        console.log(this.accept);
    };
    FileuploaderComponent.prototype.onupload = function (event) {
        var _this = this;
        console.log(event.target.files[0]);
        var reader = new FileReader();
        reader.onloadend = function (e) {
            _this.currfile.emit(reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('upload'), 
        __metadata('design:type', Object)
    ], FileuploaderComponent.prototype, "currfile", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FileuploaderComponent.prototype, "tag", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], FileuploaderComponent.prototype, "accept", void 0);
    FileuploaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fileuploader',
            template: __webpack_require__(654),
            styles: [__webpack_require__(632)]
        }), 
        __metadata('design:paramtypes', [])
    ], FileuploaderComponent);
    return FileuploaderComponent;
}());
//# sourceMappingURL=fileuploader.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (args && value) {
            var keys_1 = Object.keys(args);
            return value.filter(function (elem, index, arr) {
                return (elem[keys_1[0]] && args[keys_1[0]]) ? elem[keys_1[0]].toString().toUpperCase().includes(args[keys_1[0]].toUpperCase()) : false;
            });
        }
        else
            return value;
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglegroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SinglegroupComponent = (function () {
    function SinglegroupComponent() {
        this.mgroup = "kek";
        this.sv = "FDDFD";
    }
    SinglegroupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', Object)
    ], SinglegroupComponent.prototype, "mgroup", void 0);
    SinglegroupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-singlegroup',
            template: "\n    <p>\n      singlegroup Works!\n      {{mgroup}}\n      {{sv}}\n      HEY\n    </p>\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], SinglegroupComponent);
    return SinglegroupComponent;
}());
//# sourceMappingURL=singlegroup.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfloggedDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IfloggedDirective = (function () {
    function IfloggedDirective(tref, vcref, auth) {
        this.tref = tref;
        this.vcref = vcref;
        this.auth = auth;
    }
    Object.defineProperty(IfloggedDirective.prototype, "val", {
        set: function (state) {
            var _this = this;
            // console.log("STATE Before: "+state);
            state !== false ? state == true ? "" : state = true : "";
            this.auth.isLoggedIn().subscribe(function (e) {
                //              console.log(" LIVE, STATE : "+state);
                (state ? e : !e) ? _this.vcref.createEmbeddedView(_this.tref) : _this.vcref.clear();
            }, function (err) { return console.log(err); });
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('Iflogged'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], IfloggedDirective.prototype, "val", null);
    IfloggedDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[Iflogged]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], IfloggedDirective);
    return IfloggedDirective;
    var _a, _b, _c;
}());
/*

e/state  T F
T         T F
F         F T




*/ 
//# sourceMappingURL=iflogged.directive.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectmapperPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ObjectmapperPipe = (function () {
    function ObjectmapperPipe() {
    }
    ObjectmapperPipe.prototype.transform = function (value, state) {
        switch (state) {
            default:
                return null;
        }
    };
    ObjectmapperPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'objectmapper',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], ObjectmapperPipe);
    return ObjectmapperPipe;
}());
//# sourceMappingURL=objectmapper.pipe.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniquePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UniquePipe = (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (value, filterobj) {
        var countob = {};
        return value.filter(function (e, i) { return countob[e[filterobj]] ? false : countob[e[filterobj]] = 1; }).length;
    };
    UniquePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'unique',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], UniquePipe);
    return UniquePipe;
}());
//# sourceMappingURL=unique.pipe.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(666),
            styles: [__webpack_require__(644)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketIOServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketIOServiceService = (function () {
    function SocketIOServiceService() {
        this.url = 'http://localhost:8000';
    }
    SocketIOServiceService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    SocketIOServiceService.prototype.getMessages = function () {
        var _this = this;
        console.log("get Message");
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            console.log("token ::" + localStorage.getItem('token'));
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url, { query: 'token=' + localStorage.getItem('token') });
            console.log(_this.socket);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketIOServiceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], SocketIOServiceService);
    return SocketIOServiceService;
}());
//# sourceMappingURL=socket-ioservice.service.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_search_service__ = __webpack_require__(559);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserSearchComponent = (function () {
    function UserSearchComponent(router, userSearchService) {
        this.router = router;
        this.userSearchService = userSearchService;
        this.selectedObject = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    UserSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    UserSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.url);
        this.userSearchService.setUrl(this.url);
        this.objects = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.userSearchService.search(term)
            : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        });
    };
    // gotoDetail(user: User): void {
    //   let link = ['/detail', user.name];
    //   this.router.navigate(link);
    // }    
    UserSearchComponent.prototype.selectObject = function (user) {
        this.selectedObject.emit(user);
        this.searchTerms.next("");
    };
    UserSearchComponent.prototype.follow = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], UserSearchComponent.prototype, "selectedObject", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], UserSearchComponent.prototype, "url", void 0);
    UserSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-search',
            template: __webpack_require__(667),
            styles: [__webpack_require__(645)],
            providers: [__WEBPACK_IMPORTED_MODULE_8__user_search_service__["a" /* UserSearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__user_search_service__["a" /* UserSearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__user_search_service__["a" /* UserSearchService */]) === 'function' && _b) || Object])
    ], UserSearchComponent);
    return UserSearchComponent;
    var _a, _b;
}());
//# sourceMappingURL=user-search.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserSearchService = (function () {
    function UserSearchService(http) {
        this.http = http;
    }
    UserSearchService.prototype.setUrl = function (url) {
        this.url = url;
    };
    UserSearchService.prototype.search = function (term) {
        return this.http
            .get(this.url + term)
            .map(function (response) { return response.json(); });
    };
    UserSearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UserSearchService);
    return UserSearchService;
    var _a;
}());
//# sourceMappingURL=user-search.service.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".search-result{\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 40px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n}\n.search-result:hover {\n  color: #eee;\n  background-color: #607D8B;\n}\n#search-box{\n  width: 200px;\n  height: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n    <nav>\n        <div class=\"nav-wrapper\">\n\n            <div class=\"left hide-on-med-and-down\">\n            <ul  >\n                <li routerLink=\"/home\" routerLinkActive=\"active\"><a >Hatlay</a></li>\n<!--<<<<<<< HEAD-->\n                <li *ngIf=\"logined\" routerLink=\"/orders\" routerLinkActive=\"active\" ><a >orders</a></li>\n                <li *ngIf=\"logined\" routerLink=\"/friends\" routerLinkActive=\"active\" ><a >friends</a></li>\n                <li *ngIf=\"logined\" routerLink=\"/groups\" routerLinkActive=\"active\" ><a >groups</a></li>                             \n            </ul>\n            </div>\n            <div class=\"hide-on-large-only\">\n\n                <a  routerLink=\"/home\" routerLinkActive=\"active\"  class=\"button-collapse\" ><i class=\"material-icons\">launch</i></a>\n                <a   routerLink=\"/orders\" routerLinkActive=\"active\" class=\"button-collapse\" ><i class=\"material-icons\">label_outline</i></a>\n                <a  (click)=\"openModal()\"   \n                      class=\"button-collapse\" ><i class=\"material-icons\">add_alert</i></a>\n                \n               <a (click)=\"openMenuModal()\" class=\"button-collapse\" ><i class=\"material-icons\">menu</i></a>                             \n                \n            </div>\n\n            <ul >\n                <!--<li  routerLink=\"/home\" routerLinkActive=\"active\" ><a class=\"button-collapse\" ><i class=\"material-icons\">launch</i></a></li>\n                <li  routerLink=\"/orders\" routerLinkActive=\"active\" ><a class=\"button-collapse\" ><i class=\"material-icons\">label_outline</i></a></li>\n                <li  (click)=\"openModal()\"   >\n                    <a  class=\"button-collapse\" ><i class=\"material-icons\">add_alert</i></a>\n                </li>\n                <li   ><a (click)=\"openMenuModal()\" class=\"button-collapse\" ><i class=\"material-icons\">menu</i></a></li>                             -->\n<!--=======\n                <li *Iflogged  routerLink=\"/orders\" routerLinkActive=\"active\" ><a >orders</a></li>\n                <li *Iflogged  routerLink=\"/friends\" routerLinkActive=\"active\" ><a >friends</a></li>\n                <li *Iflogged  routerLink=\"/groups\" routerLinkActive=\"active\" ><a >groups</a></li>                \n>>>>>>> 9a3388c1636320b93899d23c264bb931b1ec7e3c-->\n            </ul>\n\n            <!--<a   data-activates=\"mobile-demo\" routerLink=\"/home\" routerLinkActive=\"active\" ><i class=\"material-icons\">launch</i></a>\n            <a   data-activates=\"mobile-demo\" routerLink=\"/orders\" class=\"button-collapse\"><i class=\"material-icons\">label_outline</i></a>\n            <a   data-activates=\"mobile-demo\" (click)=\"openModal()\" class=\"button-collapse\"><i class=\"material-icons\">add_alert</i></a>\n            <a   data-activates=\"mobile-demo\"  class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>-->\n\n            <div class=\"right hide-on-med-and-down\">\n                <ul>\n<!--<<<<<<< HEAD-->\n                <li *ngIf=\"logined\"  ><a  (click)=\"logout()\" >logout</a></li>\n                <li *ngIf=\"logined\" routerLink=\"/profile\" routerLinkActive=\"active\" ><a >{{user.name}}</a></li>\n                <li *ngIf=\"!logined\" ><a   routerLink=\"/login\" routerLinkActive=\"active\">login</a></li>\n                <li *ngIf=\"!logined\" ><a  routerLink=\"/register\" routerLinkActive=\"active\">register</a></li>\n                <li  ><a> <span (click)=\"openModal()\" class=\"button-collapse\" class=\"new badge blue\">{{notificationNmber}}</span></a> </li>   \n<!--=======\n                <li *Iflogged  ><a  (click)=\"logout()\" >logout</a></li>\n                <li *Iflogged  routerLink=\"/profile\" routerLinkActive=\"active\" ><a >{{user.name}}</a></li>\n                <li *Iflogged=\"false\"  ><a   routerLink=\"/login\" routerLinkActive=\"active\">login</a></li>\n                <li *Iflogged=\"false\"  ><a  routerLink=\"/register\" routerLinkActive=\"active\">register</a></li>\n>>>>>>> 9a3388c1636320b93899d23c264bb931b1ec7e3c-->\n                </ul>\n            </div>\n            <div class=\"right hide-on-med-and-down\">\n                <form>\n                    <div class=\"input-field\">\n                        <input id=\"search\" type=\"search\" required>\n                        <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n                        <i class=\"material-icons\">close</i>\n                    </div>\n                </form>\n            </div>\n\n\n\n\n\n        </div>\n    </nav>\n</div>\n\n\n \n\n\n<div class=\"container\" >\n    <router-outlet></router-outlet>\n</div>\n\n\n<!-- Modal Structure -->\n<div id=\"modal1\" class=\"modal \" materialize=\"modal\" [materializeParams]=\"[{dismissible: true}]\" [materializeActions]=\"modalActions\">\n    <div class=\"modal-content\">\n    <div *ngFor=\"let message of messages\">\n                     {{message.text}}\n                   </div>\n    </div>\n    <div class=\"modal-footer\">\n      <a  (click)=\"closeModal()\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">Agree</a>\n    </div>\n</div>\n\n\n\n\n            <div id=\"modal1\" class=\"side-nav\"  materialize=\"modal\" [materializeParams]=\"[{dismissible: true}]\" [materializeActions]=\"modalMenuActions\" >\n            <div class=\"modal-content\">\n                <ul class=\"collection with-header\">\n                    <li class=\"collection-header\"><h4>First Names</h4></li>\n                    <li *ngIf=\"logined\" class=\"collection-item\"  ><a  (click)=\"logout()\" >logout</a></li>\n                    <li *ngIf=\"logined\" class=\"collection-item\" routerLink=\"/profile\" routerLinkActive=\"active\" ><a >{{user.name}}</a></li>\n                    <li *ngIf=\"!logined\" class=\"collection-item\" ><a   routerLink=\"/login\" routerLinkActive=\"active\">login</a></li>\n                    <li *ngIf=\"!logined\" class=\"collection-item\" ><a  routerLink=\"/register\" routerLinkActive=\"active\">register</a></li>\n\n                </ul>\n            </div>\n            </div>"

/***/ }),

/***/ 654:
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"file-field input-field\">\n      <div class=\"btn\">\n        <span>{{tag}}</span>\n        <input type=\"file\" [accept]=\"accept\" (change)=\"onupload($event)\" >\n      </div>\n      <div class=\"file-path-wrapper\">\n        <input class=\"file-path validate\" [(ngModel)]=\"inputname\" type=\"text\">\n      </div>\n    </div>\n"

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

module.exports = "<p>\n  friends works!\n</p>\n\n\n\n<app-user-search [url]='URL' (selectedObject)=\"addSearchResult($event)\" ></app-user-search>\n\n<div *ngIf=\"friend\" class=\"chip\">\n    <img src=\"http://lorempixel.com/100/190/nature/6\" alt=\"Contact Person\">\n          {{friend.name}}\n          <a *ngIf=\"isFriend\" (click)=\"unfollow(friend._id)\" >Unfollow</a>\n          <a *ngIf=\"!isFriend\" (click)=\"follow(friend)\" >follow</a>\n  </div>\n<div class=\"row\">\n<div class=\"col  s10 m5 l3\" *ngFor=\"let friend of user.friends \" >\n          <div class=\"card\">\n            <div class=\"card-image\">\n              <img class=\"img\" src=\"http://lorempixel.com/100/190/nature/6\">\n              <span class=\"card-title\">{{friend.name}}</span>\n            </div>\n            <div class=\"card-action\">\n              <a (click)=\"unfollow(friend._id )\" >Unfollow</a>\n            </div>\n          </div>\n</div>"

/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = "  <p>\n  groups works!\n</p>\n<div>\n\n<app-singlegroup [group]=\"'MND'\"></app-singlegroup>\n<ul>\n<li *ngFor=\"let item of user?.friends; let i = index; \">{{friend1}}</li>\n</ul>\n\n<ul>\n<li *ngFor=\"let item of choosenList; let i = index; \">\n  User name:{{item.name}}\n\n  Email: {{item.email}}\n\n  <button (click)=\"removefromlist(i)\">remove</button>\n  \n  \n  </li>\n</ul>\n  <input placeholder=\"User Name\"  list=\"browsers\"  #inp >\n  <button (click)=\"addtolist(inp.value);inp.value=''\" >add User</button>\n<datalist id=\"browsers\">\n  \n <option *ngFor=\"let item of userfriends; let i = index;\"   [value]=\"item.email\" >{{item.name}}</option>\n</datalist>\n\n  <input placeholder=\"Group name\"   #gname >\n  \n<app-fileuploader [tag]=\"'image'\" [accept]=\"'image/x-png,image/gif,image/jpeg'\" (upload)=\"uploaded($event)\"> </app-fileuploader>\n\n\n  <button (click)=\"addgroup(gname.value);gname.value='';\" >Add Group</button>\n\n\n<!--addgroup(gname.value);gname.value=''; fname.value='';-->\n\n\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ 657:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n    <!--<div>\n      <a [routerLink]=\"['list']\">Overview</a>\n      <a [routerLink]=\"['edit']\">Technical Specs</a>\n    </div>\n    <router-outlet ></router-outlet>-->\n    <!-- Overview & Specs components get added here by the router -->\n\n"

/***/ }),

/***/ 658:
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"row \">\n            <div class=\"col s12 offset-m3 m6 offset-l4  l4\">\n                <div class=\"card hoverable\">\n                    <form method=\"post\" action=\"\">\n                        <div class=\"row \">\n                            <div class=\"input-field col offset-s1 s10\">\n                                <i class=\"material-icons prefix\">perm_identity</i>\n                                <input id=\"email\" [(ngModel)]=\"user.email\" name=\"email\"  type=\"email\" class=\"validate\">\n                                <label for=\"email\">Email</label>\n                            </div>\n                            <div class=\"input-field col offset-s1 s10\">\n                                <i class=\"material-icons prefix\">lock_outline</i>\n                                <input id=\"password\" [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"validate\">\n                                <label for=\"password\">Password</label>\n                            </div>\n                            <!--offset-s2 s10 offset-l2 l10-->\n                            <div class=\"col offset-s1 s11 \">\n                                <p>\n                                    <input type=\"checkbox\" id=\"test5\" name=\"rememberme\" />\n                                    <label for=\"test5\">Remember Me</label>\n\n                                </p>\n                            </div>\n                            <div class=\"col s12\">\n                                <br />\n                            </div>\n                            <div class=\"col s12\">\n                                <button (click)=\"login()\" class=\"btn  red  col offset-s1 offset-l1 s10 l10 waves-effect waves-light\"  type=\"submit\" name=\"submit\">Login\n                                </button>\n\n                            </div>\n                            <div class=\"col s12\">\n                                <br />\n                            </div>\n\n                            <div class=\"col offset-s1 s10\">\n                                <div class=\"row \">\n                                    <a href=\"/register\" >Create Acount</a>\n                                    <a href=\"#\" class=\"right\">Forget Password</a>\n                                </div>\n                            </div>\n                            <!--<div class=\"col offset-s1 s10\">\n                                <span><?php if(!empty($emailErr)) echo $emailErr;?></span>\n                                <span><?php if (!empty($passwordErr)) echo $passwordErr;?></span>\n                            </div>-->\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n\n"

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "\n      \n      <div class=\"collection\">\n        <a routerLink=\"/profile\" class=\"collection-item\" routerLinkActive=\"active\" >me</a>\n        <a routerLink=\"/login\" class=\"collection-item\" routerLinkActive=\"active\">login</a>\n        <a routerLink=\"/register\" class=\"collection-item\" routerLinkActive=\"active\">register</a>\n      </div>"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col s12 m12 l5 card hoverable\">\n    <div class=\"row\">\n      <form class=\"col s12\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"order_name\" name=\"order_name\" [(ngModel)]=\"order.name\"  type=\"text\" class=\"validate\">\n            <label for=\"order_name\">order name</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <input id=\"order_time\" name=\"order_time\" [(ngModel)]=\"order.time\" type=\"text\" class=\"validate\">\n            <label for=\"order_time\">order time</label>\n          </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"!toggleRestaur && toggleSelectedRest \">\n          <app-user-search class=\"col s8\" [url]='URL' (selectedObject)=\"addSearchResult($event)\"></app-user-search>\n          <div class=\"col s4\"> <button (click)=\"toggleRestaur=!toggleRestaur\"> Add new</button></div>\n        </div>\n        <div class=\"row\" *ngIf=\"!toggleSelectedRest\">\n          <div class=\"col s8\" ><label > {{restaurant?.name}} </label></div>\n          <div class=\"col s4\"> <button (click)=\"toggleSelectedRest=!toggleSelectedRest\"> Change</button></div>\n        </div>\n\n\n        <div>\n          <div *ngIf=\"toggleRestaur \" class=\"col s12\">\n            \n<app-fileuploader [tag]=\"'menu'\" [accept]=\"'image/x-png,image/gif,image/jpeg'\" (upload)=\"uploaded($event)\"> </app-fileuploader>\n\n\n            <div class=\"input-field col s12\">\n              <input id=\"rest_name\" name=\"rest_name\" [(ngModel)]=\"newRestaurant.name\" type=\"text\" class=\"validate\">\n              <label for=\"rest_name\">{{newRestaurant?.name}}</label>\n            </div>\n\n            <div class=\"col s12\">\n              <div class=\"row s12 l12\">\n                <div class=\"col s6 l6 m6\" (click)=\"toggleRestaur=!toggleRestaur\"><button>Cancel</button></div>\n                <div class=\"col s6 l6 m6\" (click)=\"addRestuernt()\"><button>Save</button></div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col s12\">\n            <div class=\"input-field inline\">\n              <input id=\"friendOrGroup\" name=\"searchTerm\" [(ngModel)]=\"searchTerm\" (input)=\"searchTerm = $event.target.value\" type=\"text\"\n                class=\"validate\">\n              <label for=\"friendOrGroup\" data-error=\"wrong\" data-success=\"right\">add friend or group</label>\n            </div>\n            <div>\n              <ul>\n                <li *ngFor=\"let object of allFriendsAndGroups | filter:{name:searchTerm} \">\n                  {{object?.name}}  type = {{object?.difftype}} <button (click)=\"invaite(object)\">add</button>\n                </li>\n\n              </ul>\n            </div>\n          </div>\n        </div>\n\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <a (click)=\"addOrder()\"> Add Order </a>\n        <a routerLink=\"/orders/list\" routerLinkActive=\"active\" >Cancel</a>\n\n      </div>\n    </div>\n\n\n      </form>\n    </div>\n\n\n\n\n\n  </div>\n\n    <!--right side  friends and groups-->\n\n  <div class=\"col s12 m12 offset-l1 l5 card hoverable\">\n\n    <div class=\"row\">\n      <div class=\"col  s10 m5 l3\" *ngFor=\"let friend of inviated \">\n        <div class=\"card\">\n          <div class=\"card-image\">\n            <img class=\"img\" src=\"http://lorempixel.com/100/190/nature/6\">\n            <span class=\"card-title\">{{friend?.name}}</span>\n          </div>\n          <div class=\"card-action\">\n            <a (click)=\"remove(friend)\">remove</a>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div *ngIf=\"!toggleSelectedRest\" class=\"col s12 m12 offset-l1 l5 card hoverable\">\n        <div class=\"card\">\n          <div class=\"card-image\">\n            <img class=\"img\" [src]=\"'/'+restaurant.menu\">\n          </div>\n        </div>\n\n\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = "<div> \n<p>\n  listorders works!\n              \n</p>\n\n  <table>\n        <thead>\n          <tr>\n             <th>User</th>\n              <th>Meal Name</th>\n              <th>Meal Price</th>\n             \n              <th>Meal Amount</th>\n\n              <th> Comments</th>\n             \n             \n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngFor=\"let meal of order.meals; let i = index;\">\n            <td>{{meal.username}}</td>\n            <td>{{meal.price}}</td>\n            <td>{{meal.name}}</td>\n            <td>{{meal?.amount}}</td>\n           <td>{{meal?.comment}}</td>\n           \n            <td> <button *ngIf=\"meal.userId==userservice.getUser()._id\" (click)=\"deleteentry(meal._id)\">Delete Meal</button>  </td>\n          </tr>\n            <tr >\n              <td></td>\n            <td><input type=\"text\" placeholder=\"Meal Name\"  #name></td>\n            <td><input type=\"number\" placeholder=\"Amount\" min=0 #number/></td>\n            <td><input type=\"number\" placeholder=\"Price\" min=0 #price/></td>\n            <td><input type=\"text\" placeholder=\"Comment\" #comment></td>\n            \n            <td><button (click)=\"addentry(name.value,number.value,price.value,comment.value)\">Add Meal</button> </td>\n          </tr>\n        </tbody>\n      </table>\n</div> "

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "<div> \n<p>\n  listorders works!\n              \n</p>\n\n  <table>\n        <thead>\n          <tr>\n              <th>Order Number</th>\n              <th>Order Name</th>\n              <th>Order Users</th>\n              <th>Unique Users</th>\n             <th>Creation Date</th>\n             <th>Add Meals</th>\n              <th>Controls</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngFor=\"let order of orderslist; let i = index;\">\n            <td>{{order.number}}</td>\n            <td>{{order.name}}</td>\n            <td>{{order.users.length}}</td>\n            <td>{{order.meals|unique:\"userId\"}}</td>\n            <td>{{order.createdate}}</td>\n            <td> <a [routerLink]=\"['/orders/edit', order._id]\">Add Meals</a> </td>\n            <td *ngIf=\"order.status=='Active'&&order.adminId==this.userservice.getUser()._id\"> <button (click)=\"finishorder(order?._id)\">Finish</button>\n            <button (click)=\"removeorder(order?._id)\">Cancel</button>\n             </td>\n          </tr>\n\n        </tbody>\n      </table>\n</div> "

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "    <div>\n      <a [routerLink]=\"['list']\">Orders</a>\n\n      <a [routerLink]=\"['add']\">Add Order</a>\n    </div>\n    <router-outlet ></router-outlet>\n    <!-- Overview & Specs components get added here by the router -->"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m5 l4\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img src=\"http://demo.geekslabs.com/materialize/v2.3/layout03/images/gallary/3.jpg\">\n        <span class=\"card-title\">Card Title</span>\n      </div>\n      <div class=\"card-content\">\n\n        <a href=\"#\">Change Picture</a>\n\n\n      </div>\n\n    </div>\n  </div>\n\n\n\n  <div class=\"col s12 m7 l8\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"row\">\n\n          <div class=\"col s12 m6 l4\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <i style=\"font-size:2in\" class=\"material-icons\">group_work</i>\n              </div>\n              <div class=\"card-content\">\n                <h2 class=\"center\">25</h2>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col s12 m6 l4\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <i style=\"font-size:2in\" class=\"material-icons\">supervisor_account</i>\n              </div>\n              <div class=\"card-content\">\n                <h2 class=\"center\">25</h2>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col s12 m6 l4\">\n            <div class=\"card\">\n              <div class=\"card-image\">\n                <i style=\"font-size:2in\" class=\"material-icons\">done_all</i>\n              </div>\n              <div class=\"card-content\">\n                <h2 class=\"center\">25</h2>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n</div>\n\n<div class=\"circle\" style=\"background-color: red\" >\n            <div class=\"card circle \">\n              <div class=\"card-content circle\">\n                <h2 class=\"center\">25</h2>\n              </div>\n          </div>\n</div>"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"row \">\n            <div class=\"col s12 offset-m3 m6 offset-l4  l4\">\n                <div class=\"card hoverable\">\n                    <form >\n                        <div class=\"row \">\n                            <div class=\"input-field col offset-s1 s10\">\n                                <i class=\"material-icons prefix\">perm_identity</i>\n                                <input id=\"username\" [(ngModel)]=\"user.name\" name=\"username\" type=\"text\" class=\"validate\">\n                                <label for=\"username\">User Name</label>\n                            </div>\n                            <div class=\"input-field col offset-s1 s10\">\n                                <i class=\"material-icons prefix\">email</i>\n                                <input id=\"email\" [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" class=\"validate\">\n                                <label for=\"email\">Email</label>\n                            </div>\n\n                            <div class=\"input-field col offset-s1 s10\">\n                                <i class=\"material-icons prefix\">lock</i>\n                                <input id=\"password\" [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"validate\">\n                                <label for=\"password\">Password</label>\n                            </div>\n                            <div class=\"input-field col offset-s1 s10\">\n                                <i class=\"material-icons prefix\">lock_outline</i>\n                                <input id=\"repassword\" type=\"password\" class=\"validate\">\n                                <label for=\"repassword\">Password</label>\n                            </div>\n                            <!--offset-s2 s10 offset-l2 l10-->\n                            <div class=\"col offset-s1 s11 \">\n                                <p>\n                                    <input type=\"checkbox\" id=\"test5\" />\n                                    <label for=\"test5\">Remember Me</label>\n\n                                </p>\n                            </div>\n                            <div class=\"col s12\">\n                                <br />\n                            </div>\n                            <div class=\"col s12\">\n                                <button (click)=\"register()\" class=\"btn  red  col offset-s1 offset-l1 s10 l10 waves-effect waves-light\" type=\"submit\" name=\"submit\">Register\n                                </button>\n\n                            </div>\n\n                            <div class=\"col offset-s1 s10\">\n                                <div class=\"row \">\n                                    <p class=\"center-align \">Already have an account?<a href=\"#\" > Login</a></p>\n                                </div>\n                            </div>\n                            <!--<div class=\"col offset-s1 s10\">\n                                <span><?php if(!empty($emailErr)) echo $emailErr;?></span>\n                                <span><?php if (!empty($passwordErr)) echo $passwordErr;?></span>\n                            </div>-->\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n\n"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n  <div>\n    <div *ngFor=\"let object of objects | async\"\n         (click)=\"selectObject(object);searchBox.value='';\" class=\"search-result\" >\n      {{object.name}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shareable_http_client_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.loggedIn = false;
        this.user = {};
        this.logger = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](false);
        this.postsUrl = 'http://localhost:8000/user'; // URL to web api
    }
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.isLoggedIn = function () {
        console.log("change in loggedIn");
        return this.logger.asObservable();
    };
    AuthService.prototype.doLogin = function (user) {
        var _this = this;
        return this.http
            .post(this.postsUrl + "/login", JSON.stringify(user))
            .toPromise()
            .then(function (res) {
            if (res.json().token) {
                localStorage.setItem('token', res.json().token);
                _this.loggedIn = true;
                _this.userService.setUser(res.json().user);
                _this.logger.next(_this.loggedIn);
                console.log(res.json().user);
                console.log(_this.userService.getUser());
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (res) { return false; });
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('token');
        this.userService.setUser(null);
        this.loggedIn = false;
        this.logger.next(this.loggedIn);
    };
    //    private handleError(error: any): Promise<any> {
    //   console.error('An error occurred', error); // for demo purposes only
    //   return Promise.reject(error.message || error);
    // }
    AuthService.prototype.doRegister = function (user) {
        var _this = this;
        return this.http
            .post(this.postsUrl + "/register", JSON.stringify(user))
            .toPromise()
            .then(function (res) {
            if (res.json().token) {
                console.log("in true");
                localStorage.setItem('token', res.json().token);
                _this.loggedIn = true;
                _this.user = res.json().user;
                _this.logger.next(_this.loggedIn);
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (res) {
            console.log("errrrror");
            console.log(res.json());
            return false;
        });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shareable_http_client_service__["a" /* HttpClientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shareable_http_client_service__["a" /* HttpClientService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 949:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(426);


/***/ })

},[951]);
//# sourceMappingURL=main.bundle.js.map
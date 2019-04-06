"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var User_1 = require("./api/User");
var app = new app_1.App([
    new User_1.UserApi()
]);
app.listen();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var User_1 = require("./api/User");
var Question_1 = require("./api/Question");
var Subject_1 = require("./api/Subject");
var app = new app_1.App([
    new User_1.UserApi(),
    new Question_1.QuestionApi(),
    new Subject_1.SubjectApi()
]);
app.listen();

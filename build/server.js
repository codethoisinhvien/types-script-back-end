"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var User_1 = require("./api/User");
var Question_1 = require("./api/Question");
var Subject_1 = require("./api/Subject");
var Exam_1 = require("./api/Exam");
var Task_1 = require("./api/Task");
var app = new app_1.App([
    new User_1.UserApi(),
    new Question_1.QuestionApi(),
    new Subject_1.SubjectApi(),
    new Exam_1.EXamApi(),
    new Task_1.TaskApi()
]);
app.listen();

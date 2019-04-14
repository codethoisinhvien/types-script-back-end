"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../db/models");
var jsonwebtoken_1 = require("jsonwebtoken");
var key = 'phongthien';
var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        this.data = {};
        this.status = 200;
        this.db = models_1.Database.setInstance(null);
        this.create = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var _a, username, password, first_name, last_name, user, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //vadidate
                        console.log(request.body);
                        _a = request.body, username = _a.username, password = _a.password, first_name = _a.first_name, last_name = _a.last_name;
                        if (!true) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.db.db.User.create(request.body)];
                    case 2:
                        user = _b.sent();
                        this.data = {
                            success: true,
                            message: "Đăng kí thành công"
                        };
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        switch (e_1.parent.code) {
                            case 'ER_DUP_ENTRY':
                                this.data = {
                                    success: false,
                                    message: "Tài khoản đã tồn tại"
                                };
                                break;
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        response.status(this.status).json(this.data);
                        return [2 /*return*/];
                }
            });
        }); };
        this.get = function (request, response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.updateBaseInformation = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var _a, first_name, last_name, birthday, user, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, first_name = _a.first_name, last_name = _a.last_name, birthday = _a.birthday;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.db.db.User.update({
                                first_name: request.body.first_name,
                                last_name: request.body.last_name,
                                birthday: request.body.birthday
                            }, { where: { id: 1 } })];
                    case 2:
                        user = _b.sent();
                        console.log(user);
                        if (user != null) {
                            // let name=giang
                            response.status(this.status).json({ success: true, message: "Thay đổi thông tin thành công" });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        console.log(e_2);
                        response.status(this.status).json({ success: false, message: "Thay đổi thông tin thất bại" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.updateRole = function (request, response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.delete = function (request, response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.login = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var _a, username, password, user, access_token, role, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, username = _a.username, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.db.db.User.findOne({ where: { username: request.body.username } })
                            //  console.log(user.dataValues);
                        ];
                    case 2:
                        user = _b.sent();
                        //  console.log(user.dataValues);
                        if (user != null) {
                            access_token = jsonwebtoken_1.sign({ user: user.dataValues }, key);
                            role = 1;
                            // let name=giang
                            response.status(this.status).json({ access_token: access_token, role: role, user: user.dataValues.username });
                        }
                        else {
                            response.status(this.status).json({ success: false, message: "Tên đăng nhập hoặc mật khẩu không đúng" });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _b.sent();
                        response.status(this.status).json({ success: false, message: "Tên đăng nhập hoặc mật khẩu không đúng" });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    }
    return UserController;
}());
exports.default = UserController;

"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var UserController_1 = __importDefault(require("../controller/UserController"));
var access_token_1 = __importDefault(require("../middleware/access_token"));
var UserApi = /** @class */ (function () {
    // thieu email
    function UserApi() {
        this.path = '/users';
        this.router = express.Router();
        this.controller = new UserController_1.default();
        this.access = new access_token_1.default();
        this.intializeRoutes();
    }
    UserApi.prototype.intializeRoutes = function () {
        this.router.route('/login')
            .post(this.controller.login);
        this.router.route("" + this.path)
            .post(this.controller.create)
            .delete(this.access.adminAccess, this.controller.delete)
            .get(this.controller.getlist);
        this.router.route(this.path + "/:id")
            .put(this.controller.updateRole);
        this.router.route('/profile')
            .get(this.access.access, this.controller.get)
            .put(this.access.access, this.controller.updateBaseInformation);
        this.router.route('/password')
            .put(this.access.access, this.controller.changePassword);
    };
    ;
    return UserApi;
}());
exports.UserApi = UserApi;

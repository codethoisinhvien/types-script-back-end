"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sequelize_1 = __importDefault(require("sequelize"));
var models_1 = require("./db/models");
var bodyParser = require('body-parser');
var morgan = require('morgan');
var sequelizeConfig = require('./db/config/config.json');
var db = models_1.Database.setInstance(sequelizeConfig);
var Op = sequelize_1.default.Op;
var PORT = process.env.PORT || 4201;
var App = /** @class */ (function () {
    function App(controllers) {
        this.app = express_1.default();
        this.connectToTheDatabase();
        this.setAngular();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }
    App.prototype.listen = function () {
        this.app.listen(PORT, function (req, res) {
            console.log("App listening on the port " + PORT);
        });
    };
    App.prototype.initializeMiddlewares = function () {
        this.app.use(morgan('[:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'));
        this.app.use(bodyParser.json());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    };
    App.prototype.initializeErrorHandling = function () {
    };
    App.prototype.initializeControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (api) {
            _this.app.use('/api', api.router);
        });
    };
    App.prototype.setAngular = function () {
        /* this.app.engine('html', ngExpressEngine({
           bootstrap: AppServerModuleNgFactory,
           providers: [
             provideModuleMap(LAZY_MODULE_MAP)
           ]
         }));
         // this.app.set('view engine', 'html');
         //this.app.set('views', DIST_FOLDER);
         */
    };
    App.prototype.connectToTheDatabase = function () {
        db.db.sequelize.sync();
    };
    return App;
}());
exports.App = App;

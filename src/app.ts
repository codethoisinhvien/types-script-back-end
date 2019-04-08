import express from 'express';
import Sequelize from 'sequelize';
import { Request, Response } from 'express';
import {Database} from './db/models'

import Api from './interface/BaseApi'
const bodyParser = require('body-parser')
const morgan = require('morgan')
const sequelizeConfig = require('./db/config/config.json');
const db :Database=Database.setInstance(sequelizeConfig);

const Op = Sequelize.Op;

const PORT = process.env.PORT || 4201
export class App {
    public app: express.Application;
  
    constructor(controllers:Api[]) {
      this.app = express();
      
      this.connectToTheDatabase();
      this.setAngular();
      this.initializeMiddlewares();
      this.initializeControllers(controllers);
      this.initializeErrorHandling();
      
      
    }
  
    public listen() {
      this.app.listen(PORT, (req:any,res:any) => {
        console.log(`App listening on the port ${PORT}`);
      });
    }
  
    private initializeMiddlewares() {
      this.app.use(morgan('[:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'));
      this.app.use(bodyParser.json());
      this.app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      })
    }
  
    private initializeErrorHandling() {
     
    }
  
    private initializeControllers(controllers: any []) {

      controllers.forEach((api:Api) => {
        this.app.use('/api', api.router);
        
      });
      
    }
    private setAngular(){
     /* this.app.engine('html', ngExpressEngine({
        bootstrap: AppServerModuleNgFactory,
        providers: [
          provideModuleMap(LAZY_MODULE_MAP)
        ]
      }));
      // this.app.set('view engine', 'html');
      //this.app.set('views', DIST_FOLDER);
      */
    }
    private connectToTheDatabase() {
      
      db.db.sequelize.sync();  
    }
  }
 

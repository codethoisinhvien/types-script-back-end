import * as express from 'express';
import Api from '../interface/BaseApi';
import AccessToken from '../middleware/access_token';
import QuestionController from '../controller/QuestionController';
import TaskController from '../controller/TaskController';
export class TaskApi implements Api {
  path = '/tasks';
  router = express.Router();
  controller = new TaskController();
  access = new AccessToken()
  // thieu email
  constructor() {
    this.intializeRoutes();

  }
  intializeRoutes() {

    this.router.route(this.path)
      .post(this.access.access,this.controller.create)
      .get(this.controller.getList)
    this.router.route(this.path+"/:id") 
      .put(this.access.access,this.controller.update)
      .delete(this.access.access,this.controller.delete)
      .get(this.access.access,this.controller.getInformation)
  }
}

     


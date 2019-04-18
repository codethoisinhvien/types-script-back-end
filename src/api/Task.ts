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

    this.router.route(this.path+'/:id')
      .get(this.controller.create)
      .put(this.controller.update)
  }
}

     


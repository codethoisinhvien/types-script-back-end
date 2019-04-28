import * as express from 'express';
import Api from '../interface/BaseApi';
import UserController from '../controller/UserController'
import AccessToken from '../middleware/access_token';
import ExamController from '../controller/ExamController';
export class EXamApi implements Api {
  path = '/exams';
  router = express.Router();
  controller = new ExamController();
  access = new AccessToken()
  // thieu email
  constructor() {
    this.intializeRoutes();

  }
  intializeRoutes() {
    this.router.route(this.path)
    .post(this.controller.create)
    
  this.router.route('/exams/:id')
  .put(this.controller.updateQuestion)
  .delete(this.controller.delete)
  .get(this.controller.get)

   





  };
}
import * as express from 'express';
import Api from '../interface/BaseApi';
import AccessToken from '../middleware/access_token';
import QuestionController from '../controller/QuestionController';
export class QuestionApi implements Api {
  path = '/questions';
  router = express.Router();
  controller = new QuestionController();
  access = new AccessToken()
  // thieu email
  constructor() {
    this.intializeRoutes();

  }
  intializeRoutes() {

    this.router.route(this.path)
      .post(this.access.modAccess,this.controller.createOne)
      .get(this.access.modAccess,this.controller.getList)
    this.router.route(`${this.path}/:id`)
       .put(this.access.modAccess,this.controller.updateQuestion)
  }
}

     


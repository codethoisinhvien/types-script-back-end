import * as express from 'express';
import Api from '../interface/BaseApi';
import AccessToken from '../middleware/access_token';
import QuestionController from '../controller/QuestionController';
import SubjectController from '../controller/SubjectController';
export class SubjectApi implements Api {
  path = '/subjects';
  router = express.Router();
  controller = new SubjectController();
  access = new AccessToken()
  // thieu email
  constructor() {
    this.intializeRoutes();

  }
  intializeRoutes() {

    this.router.route(this.path)
      .post(this.controller.create)
      .get(this.controller.getlist);
  }
}

     


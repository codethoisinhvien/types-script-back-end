import * as express from 'express';
import Api from '../interface/BaseApi';

import AccessToken from '../middleware/access_token';

import NotificationController from '../controller/NotificationController';
export class NotificationApi implements Api {
  path = '/notifications';
  router = express.Router();
  controller = new NotificationController();
  access = new AccessToken()
  // thieu email
  constructor() {
    this.intializeRoutes();

  }
  intializeRoutes() {
    
  this.router.route(this.path).post(this.controller.create)
  .get(this.controller.getlist)

  this.router.route(`${this.path}/:id`).put(this.controller.update)






  };
}
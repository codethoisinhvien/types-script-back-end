import * as express from 'express';
import Api from '../interface/BaseApi';
import UserController from '../controller/UserController'
import AccessToken from '../middleware/access_token';
export class UserApi implements Api {
  path = '/users';
  router = express.Router();
  controller = new UserController();
  access = new AccessToken()
  // thieu email
  constructor() {
    this.intializeRoutes();

  }
  intializeRoutes() {
    this.router.route('/login')
       .post(this.controller.login)
    this.router.route(`${this.path}`)
      .post(this.controller.create)
      .delete(this.access.adminAccess,this.controller.delete)
      
      .get(this.controller.getlist)
    this.router.route(`${this.path}/:id`)
      .put(this.controller.updateRole)
    this.router.route('/profile')
      .get(this.controller.get)
      .put(this.controller.updateBaseInformation)
    this.router.route('/password')
    .put(this.controller.changePassword)
  
   





  };
}
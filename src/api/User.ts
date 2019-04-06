import * as express from 'express';
import Api from '../interface/BaseApi';
import UserController from '../controller/UserController'
export  class UserApi implements Api{
   path='/users';
   router=express.Router();
   controller= new UserController();
   constructor(){
    this.intializeRoutes();

   }
   intializeRoutes(){
     this.router.route('/login').post(this.controller.login)
     this.router.route(this.path).post(this.controller.create);
    
   };
}
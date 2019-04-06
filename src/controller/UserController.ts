import Controller from '../interface/BaseController'
import * as express from 'express';
import { Database } from '../db/models';


export default class UserController implements Controller{
    public data=null
    public status=200
    public db = Database.setInstance(null);
 create = async(request: express.Request, response: express.Response)=>{
   console.log(request.body)
   let user = await this.db.db.User.create({
       username:"phongthien",
       password:"99999999"
   });
   console.log(user)
   response.status(this.status).json({user:'test'});
 
}
 get  =async(request: express.Request, response: express.Response)=>{}
 updateBaseInformation = async(request: express.Request, response: express.Response)=>{}
 updateRole =async(request: express.Request, response: express.Response)=>{};
 delete = async (request: express.Request, response: express.Response)=>{}
 login  = async (request: express.Request, response: express.Response)=>{
   console.log(request.body);
   response.status(this.status).json({user:'test'});

 }
}
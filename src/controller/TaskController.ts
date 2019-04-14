// cac chuc nang voi bai lam cuar thi sinh 
import { Database } from '../db/models';
import * as express from 'express';
import Controller from '../interface/BaseController'
export default class UserController implements Controller {
    public data = {}
    public status = 200
    public db = Database.setInstance(null);
    create= async (request: express.Request, response: express.Response)=>{
        // khoi tao khi thi sinh bat dau thi 
       //kiem tra quyen try cap bai thi
       // tao bai thi 
       this.status=200;
       this.data ={success:true}
    }
    update = async (request: express.Request, response: express.Response)=>{
        // nhan request lien tuc khi thi sinh thi
    }

    
  }
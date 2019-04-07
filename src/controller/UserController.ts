import Controller from '../interface/BaseController'
import * as express from 'express';
import { Database } from '../db/models';
import {sign} from 'jsonwebtoken'
const key ='phongthien'

export default class UserController implements Controller {
  public data = {}
  public status = 200
  public db = Database.setInstance(null);
  create = async (request: express.Request, response: express.Response) => {
    //vadidate
    console.log(request.body)

    if(true){
    try {
      let user = await this.db.db.User.create({
        username: "phongthien",
        password: "99999999"
      });
      this.data = {
        success: true,
        message: "Đăng kí thành công"
      }
    } catch (e) {
      switch (e.parent.code) {
        case 'ER_DUP_ENTRY': this.data = {
          success: false,
          message: "Tài khoản đã tồn tại"
        }; break;


      }
    }
  }


    response.status(this.status).json(this.data);

  }
  get = async (request: express.Request, response: express.Response) => { }
  updateBaseInformation = async (request: express.Request, response: express.Response) => { }
  updateRole = async (request: express.Request, response: express.Response) => { };
  delete = async (request: express.Request, response: express.Response) => { }
  login = async (request: express.Request, response: express.Response) => {
    
    let access_token= sign({user:'giang'},key)
    response.status(this.status).json({ access_token });

  }
}
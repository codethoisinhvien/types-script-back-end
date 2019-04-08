import Controller from '../interface/BaseController'
import * as express from 'express';
import { Database } from '../db/models';
import {sign} from 'jsonwebtoken'
import { UserFactory } from '../db/models/user';
const key ='phongthien'

export default class UserController implements Controller {
  public data = {}
  public status = 200
  public db = Database.setInstance(null);
  create = async (request: express.Request, response: express.Response) => {
    //vadidate
    console.log(request.body)
    let {username,password,first_name,last_name}=request.body
    if(true){
    try {
      let user = await this.db.db.User.create(request.body );
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
  updateBaseInformation = async (request: express.Request, response: express.Response) => {
    const {first_name,last_name,birthday}= request.body
    try{
     let user  =await this.db.db.User.update(
      {
        first_name:request.body.first_name,
        last_name:request.body.last_name,
        birthday:request.body.birthday

      },
   {where: 1})
     console.log(user);
     if(user!=null){
    
    
   // let name=giang
    response.status(this.status).json({success:true,message:"Thay đổi thông tin thành công"});
     }
    }catch(e){
      console.log(e)
      response.status(this.status).json({success:false,message:"Thay đổi thông tin thất bại"});
    }
   }
  updateRole = async (request: express.Request, response: express.Response) => { };
  delete = async (request: express.Request, response: express.Response) => { }
  login = async (request: express.Request, response: express.Response) => {
    const {username,password}= request.body
    try{
     let user  =await this.db.db.User.findOne({where:{username:request.body.username}})
     console.log(user.dataValues);
     if(user!=null){
    let access_token= sign({user:user.dataValues},key)
    let role=1;
   // let name=giang
    response.status(this.status).json({ access_token,role,user:user.dataValues.username});
     }else{
      response.status(this.status).json({ success:false,message:"Tên đăng nhập hoặc mật khẩu không đúng"});
     }
    }catch(e){
      console.log(e)
    }

  }
}
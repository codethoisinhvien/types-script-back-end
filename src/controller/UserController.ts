import Controller from '../interface/BaseController'
import * as express from 'express';
import { Database } from '../db/models';
import { sign, verify } from 'jsonwebtoken'
import { UserFactory } from '../db/models/user';
import { UserAttributes } from '../db/models/user';

const key = 'phongthien'

export default class UserController implements Controller {
  public data = {}
  public status = 200
  public db = Database.setInstance(null);
  create = async (request: express.Request, response: express.Response) => {
    //vadidate
    console.log(request.body)

    if (true) {
      try {
        let userdata: UserAttributes = request.body
        let user = await this.db.db.User.create(userdata);
        this.data = {
          success: true,
          message: "Đăng kí thành công"
        }
      } catch (e) {
        console.log(e)
        if (e.errors != null) {
          this.data = {
            success: true,
            message: "Thông tin chưa đúng"
          }
        } else {
          switch (e.parent.code) {
            case 'ER_DUP_ENTRY': this.data = {
              success: false,
              message: "Tài khoản đã tồn tại"
            }; break;

          }
        }




      } 
    }


    response.status(this.status).json(this.data);

  }
  get = async (request: express.Request, response: express.Response) => {
    let token: any = request.headers.authorization;
    let data: any = verify(token, key);
    try {
      let user = await this.db.db.User.findOne({ attributes: ['username','email','birthday','sex','createdAt','first_name','last_name']},{where:{id:data.user.id}});
      console.log(user)
      this.data={success:true,user}
    } catch (error) {
      console.log(error)
    }
    response.status(this.status).json(this.data);
  }
  updateBaseInformation = async (request: express.Request, response: express.Response) => {
    let userdata: UserAttributes = request.body
    try {
      let token: any = request.headers.authorization;
      let data: any = verify(token, key);
      let user = await this.db.db.User.update(
        userdata,
        { where: { id: data.user.id } })
      console.log(user);
      if (user != null) {


        // let name=giang
        response.status(this.status).json({ success: true, message: "Thay đổi thông tin thành công" });
      }
    } catch (e) {
      console.log(e)
      response.status(this.status).json({ success: false, message: "Thay đổi thông tin thất bại" });
    }
  }
  updateRole = async (request: express.Request, response: express.Response) => {
    try {
      let query = request.body.role
      let id = request.params.id
      console.log(id)
      await this.db.db.User.update({role:query},{where:{id}})
      this.data= {success:true, message:"Thay đổi thành công"}
    } catch (error) {
      this.data = { success: false, message: "Có lỗi xảy ra " }
    }
    response.status(this.status).json(this.data);
   };
  delete = async (request: express.Request, response: express.Response) => { }
  login = async (request: express.Request, response: express.Response) => {
    const { username, password } = request.body
    try {
      let user = await this.db.db.User.findOne({ where: { username: request.body.username } })
      console.log(user.dataValues);
      if (user != null) {
        if(user.dataValues.password==request.body.password){
        let access_token = sign({ user: user.dataValues }, key)
        let role = user.dataValues.role;
        // let name=giang
        this.data = { success: true,access_token, role, user: user.dataValues.username };
        }else{
          this.data = { success: false, message: "Tên đăng nhập hoặc mật khẩu không đúng" };
        }
      } else {

        this.data = { success: false, message: "Tên đăng nhập hoặc mật khẩu không đúng" };
      }
    } catch (e) {
      this.data = { success: false, message: "Tên đăng nhập hoặc mật khẩu không đúng" };
    }
    response.status(this.status).json(this.data);

  }
  changePassword = async (request: express.Request, response: express.Response) => {
    console.log(request.headers.authorization)
    let datas = request.body
    let token: any = request.headers.authorization;
    try {
      let data: any = verify(token, key);
      let user = await this.db.db.User.findOne({ where: { id: data.user.id } })
      console.log()
      console.log(datas.oldpassword == user.dataValues.password)

      if (datas.oldpassword == user.dataValues.password) {
        let user = await this.db.db.User.update({ password: datas.newpassword }, { where: { id: data.user.id } })
        this.data = { success: true, message: "Thay đổi mật khẩu thành công" }
      } else {
        this.data = { success: false, message: "Mật khẩu cũ không đúng " }
      }
    } catch (e) {
      console.log(e)
      this.status = 401
      this.data = { success: false, message: "Không hợp lệ" }
    }
    response.status(this.status).json(this.data);
  }
  getlist = async (request: express.Request, response: express.Response) => {
    let page = request.query.page||1
    let op = this.db.db.Sequelize.Op
    let condition :any= {id:{[op.gt]:0}}
    condition.role={[op.lt]:3}

    try {
      let users = await this.db.db.User.findAll({
        limit: 20,
        offset: 20*(page-1),
        where:condition
      });
      this.data= {success:true,users}
    } catch (error) {
      console.log(error);
      this.data= {success:false,message:"Có lỗi xảy ra"}
    }
    response.status(this.status).json(this.data);
  }
}
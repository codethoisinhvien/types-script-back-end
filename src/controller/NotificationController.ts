// cac chuc nang voi bai lam cuar thi sinh 
import { Database } from '../db/models';
import * as express from 'express';
import Controller from '../interface/BaseController'
import { verify } from 'jsonwebtoken';
import { where } from 'sequelize/types';

export default class NotificationController implements Controller {
    public data = {}
    public status = 200
    public db = Database.setInstance(null);
   

    create = async(request: express.Request, response: express.Response)=>{
        let user :any = request.headers.authorization
        let token :any= verify(user,"phongthien")
          let user_create =token.user.id;
          let data :any = request.body;
          try {
              
              let  notification = await this.db.db.Notification.create({id_create:user_create,content:data.content});
              let  users =  await this.db.db.User.findAll({where:data.condition});
             
              for(let i =0; i<users.length;i++){
                  await    this.db.db.UserNotification.create({notification_id:notification.id,user_id:users[i].id})
              }
            
              

           
              this.data = { success:true, message:"Tạo thông báo thành công "}
          } catch (error) {
              console.log(error)
              this.data={success:false,message:"Có lỗi xảy ra"}
          }
          response.status(200).json(this.data)
    }
    update = async(request: express.Request, response: express.Response)=>{
        let notification_id = request.params.id
        let user :any = request.headers.authorization
        let token :any= verify(user,"phongthien")
          let user_id =token.user.id;
        try {
        await this.db.db.UserNotification.update({ status:true},
             {where: { notification_id ,user_id}}
        )
            this.data={success:true,message:"Đã xem"}
        } catch (error) {
            console.log(error)
            this.data={success:false,message:"Có lỗi xảy ra"}
        }
        response.status(200).json(this.data)
    }
    delete = async(request: express.Request, response: express.Response)=>{
        try {
              
        } catch (error) {
            console.log(error)
            this.data={success:false,message:"Có lỗi xảy ra"}
        }
    }
    getlist = async(request: express.Request, response: express.Response)=>{
        let user :any = request.headers.authorization
        let token :any= verify(user,"phongthien")
          let id =token.user.id;
          console.log(id)
        try {
              let notification = await this.db.db.Notification.findAll(
                  
                {
                  attributes: ['id','content'],
                 
                  include:[{

                  model: this.db.db.User,
                  through: { 
                      where:{status:false}
                   },
                  attributes: [],
                  where:{id:id}
                  
              }]})

              this.data= {success:true, notification}
        } catch (error) {
            console.log(error)
            this.data={success:false,message:"Có lỗi xảy ra"}
        }
        response.status(200).json(this.data)
    }

    
}
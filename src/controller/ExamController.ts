// cac chuc nang voi bai lam cuar thi sinh 
import { Database } from '../db/models';
import * as express from 'express';
import Controller from '../interface/BaseController'
import { verify } from 'jsonwebtoken';

export default class ExamController implements Controller {
    public data = {}
    public status = 200
    public db = Database.setInstance(null);
    create = async (request: express.Request, response: express.Response) => {
        console.log(request.body);
        try {
            let data = request.body
            let exam = await this.db.db.Exam.create(data);
            this.data = {success: true,exam}
        } catch (e) {
            this.data = { success: false, message: "Không thể tao môn học" }
        }
        response.status(this.status).json(this.data)


    }
    updateConfig = async (request: express.Request, response: express.Response) => {

      let data =request.body
      console.log(data)
      let exam_id= request.params.id;
      console.log(exam_id)
      try {
         let b=await  this.db.db.Exam.update(data,{where:{id:exam_id}})
          this.data={success:true,message:"Thay đổi thành công"}
          console.log(b)
      } catch (error) {
        this.data={success:false,message:"Thay đổi thất bại"}
      }
      response.status(this.status).json(this.data)
    }
    updateQuestion = async (request: express.Request, response: express.Response) => {
        console.log(request.params.id)
        console.log(request.body)
        console.log(request.query)
        let action = request.query.action
        let exam_id = request.params.id;
        let question_id = request.body.question_id
        let score = request.body.score
        console.log(request.body.score)
        try {
             if(action=='add'){
            let ExamQuestion = await this.db.db.ExamQuestion.upsert({
                exam_id,
                question_id,
                score

            })

            this.data = { success: true, message: "Upadate thành công " };
        }
        else if(action =='delete'){

            let ExamQuestion = await this.db.db.ExamQuestion
            .destroy({
                
                where:{exam_id:exam_id,question_id:question_id}

            })
            this.data = { success: true, message: "Upadate thành công " };
        }
        } catch (e) {
            console.log(e)
            this.data = { success: false, message: "Upadate thất bại " };
        }
        response.status(this.status).json(this.data)
    }
    get = async (request: express.Request, response: express.Response) => {
        let token :any=request.headers.authorization;
        let user:any = verify(token,"phongthien");
        let exm_id = request.params.id
        try {
            let exam 
            if(user.user.role==2){
                exam= await this.db.db.Exam.findOne({
                    where: { id: exm_id},
                    attributes: ['id', 'name', 'timedo','subject_id','score','status'],
                   
                    include: [{
                        model: this.db.db.Question,
                        through: { attributes: [] },
                        include: [
                            {
                                model: this.db.db.Answer,
                                through: {  attributes: ['right'] },
                                attributes: ['id', 'content'],
    
                            }
                       
                        ],
                        attributes: ['id', 'content'],
                    }]
    
                })
            }else{

                exam= await this.db.db.Exam.findOne({
                    where: { id: exm_id,status:true},
                    attributes: ['id', 'name', 'timedo'],
                   
                    include: [{
                        model: this.db.db.Question,
                        through: { attributes: [] },
                        include: [
                            {
                                model: this.db.db.Answer,
                                through: { attributes: [] },
                                attributes: ['id', 'content'],
    
                            }
                       
                        ],
                        attributes: ['id', 'content'],
                    }]
    
                })

                }
            
           
            
            
            this.data = {success:true,exam}
        } catch (error) {
            console.log(error)
            this.data = {success:false,message:"Có lỗi xảy ra"}
        }
        response.status(this.status).json(this.data)

    }
    getExamsOfSubject= async (request: express.Request, response: express.Response)=>{
        console.log(request.params)
        response.status(this.status).json(this.data)
    }
    delete = async  (request: express.Request, response: express.Response)=>{
        console.log(request.params.id)
        let exam_id = request.params.id
         try {
             let d = await this.db.db.ExamQuestion.destroy({where:{exam_id}})
             console.log(d);
             let d2 =  await this.db.db.Exam.destroy({where:{id:exam_id}})
             this.data= {success:true,d,d2}
         } catch (error) {
             console.log(error)
         }
         response.status(this.status).json(this.data)
    }

}
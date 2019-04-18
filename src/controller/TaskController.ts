// cac chuc nang voi bai lam cuar thi sinh 
import { Database } from '../db/models';
import * as express from 'express';
import Controller from '../interface/BaseController'
import { verify } from 'jsonwebtoken';
export default class TaskController implements Controller {
    public data = {}
    public status = 200
    public db = Database.setInstance(null);
    create= async (request: express.Request, response: express.Response)=>{
        console.log(request.body)
        let exam_id= request.body.exam_id
        try {
            let token: any = request.headers.authorization;
                let data: any = verify(token, "phongthien");
            let exam = await this.db.db.Exam.findOne({
                where: { id:exam_id  },
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
           let task = await this.db.db.Task.create({user_id:data.user.id,exam_id:exam.dataValues.id})
            
            this.data = {exam,task_id:task.dataValues.id}
        } catch (error) {
            console.log(error)
        }
        response.status(this.status).json(this.data)
   
      
    }
    update = async (request: express.Request, response: express.Response)=>{
        console.log(request.params)
        let data = {
            task_id:request.params.id,
            question_id: request.body.question_id,
            answer_id:request.body.answer_id
        }
        try {
              let answerUser = await  this.db.db.TaskExamQuestion.upsert(data);
              console.log(answerUser)       
        } catch (error) {
            console.log(error)  
        }
        response.status(this.status).json(this.data) 
    }

    
  }
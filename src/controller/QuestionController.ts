// cac chuc nang voi bai lam cuar thi sinh 
import { Database } from '../db/models';
import * as express from 'express';
import Controller from '../interface/BaseController'

export default class QuestionController implements Controller {
    public data = {}
    public status = 200
    public db = Database.setInstance(null);
    create = async (request: express.Request, response: express.Response) => {
        let questions= request.body.questions;
        try {
            for (let i = 0; i < questions.length; i++){
             console.log(questions[i])
            await this.createOne(questions[i]);
            }
            this.status = 200;
            this.data = { success: true, message: "them vao thanh cong" }
 
        } catch (e) {
            console.log(e)
            this.status = 400;
            this.data = { success: false, message: "Có lỗi xảy ra" }
        }
   response.status(this.status).json(this.data)
        

    }
    createList = (request: express.Request, response: express.Response) => {
        // khoi tao khi thi sinh bat dau thi 
        //kiem tra quyen try cap bai thi
        // tao bai thi 
        this.status = 200;
        this.data = { success: true }
    }
    createOne = async (data: any) => {
        console.log( data.subject_id)
        let question = await this.db.db.Question.create({

            content: data.content.toString(),
            subject_id:data.subject_id
        })
        //question.dataValues.id
        for (let i = 0; i < data.answer.length; i++) {
            let answer = await this.db.db.Answer.create({

                content: data.answer[i].content,
            })
            let questionAnswer = await this.db.db.QuestionAnswer.create({
                question_id: question.dataValues.id,
                answer_id: answer.dataValues.id

            })
        }



    }

}
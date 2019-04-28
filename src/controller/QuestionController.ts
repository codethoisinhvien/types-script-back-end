// cac chuc nang voi bai lam cuar thi sinh 
import { Database } from '../db/models';
import * as express from 'express';
import Controller from '../interface/BaseController'
import { QuestionAttributes } from '../db/models/question';

export default class QuestionController implements Controller {
    public data = {}
    public status = 200
    public db = Database.setInstance(null);
    create = async (request: express.Request, response: express.Response) => {
        let questions= request.body.questions;
        try {
            for (let i = 0; i < questions.length; i++){
             console.log(questions[i])
          //  await this.createOne(questions[i]);
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
    createOne = async (request: express.Request, response: express.Response) => {
        let data= request.body
        try {
            
       
        let question = await this.db.db.Question.create({

            content: data.content.toString(),
            subject_id:data.subject_id
        })
        //question.dataValues.id
        for (let i = 0; i < data.answers.length; i++) {
            let answer = await this.db.db.Answer.create({

                content: data.answers[i].content,
            })
            let questionAnswer = await this.db.db.QuestionAnswer.create({
                question_id: question.dataValues.id,
                answer_id: answer.dataValues.id,
                right:data.answers[i].right||false

            })
        }

        this.data={success:true,question}
    } catch (error) {
        console.log(error)
            this.data={success:false,message:"Tao cau hoi khong thanh cong"}
    }
        response.status(this.status).json(this.data)
        

    }
    updateQuestion = async(request: express.Request, response: express.Response) =>{
           
         
          let data =request.body
        try {
       //await this.db.db.QuestionAnswer.upsert({});
        await this.db.db.Question.upsert({data})
        let b = await this.db.db.QuestionAnswer.findAll({where:{question_id:data.id}})
        let a =await this.db.db.QuestionAnswer.destroy({where:{question_id:data.id}})
        console.log(b[0].answer_id)
        for(let i =0 ;i<b.length;i++){
            await this.db.db.Answer.destroy({where:{id:b[i].answer_id}})
        }
        for(let i =0 ;i<b.length;i++){
            await this.db.db.Answer.destroy({where:{id:b[i].answer_id}})
        }
        for (let i = 0; i < data.answers.length; i++) {
            let answer = await this.db.db.Answer.create({

                content: data.answers[i].content,
            })
            let questionAnswer = await this.db.db.QuestionAnswer.create({
                question_id: data.id,
                answer_id: answer.dataValues.id,
                right:data.answers[i].right||false

            })
        }
      
           this.data={success:true,message:"update thanh công"}
   } catch (error) {
       console.log(error)
    this.data={success:false,message:"Có lỗi xảy ra"}
  

   }
   response.status(200).json(this.data)
   }
    getList =  async(request: express.Request, response: express.Response) =>{
        try {
            let page = request.query.page||1;
            let limit =20;
            let offset=limit*(page-1)
            let query=request.query.subject_id||1
            let list = await this.db.db.Question.findAll({
                attributes:['id','content'],
                where:{subject_id:query},
                limit: limit,
                offset: offset,
            }
                );
            this.data= {success:true,questions:list}
        } catch (error) {
            this.data={success:false,message:"Có lỗi xảy ra"}
        }

        response.status(200).json(this.data)
    }
 
}
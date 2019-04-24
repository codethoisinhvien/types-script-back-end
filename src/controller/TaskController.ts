// cac chuc nang voi bai lam cuar thi sinh 
import { Database } from '../db/models';
import * as express from 'express';
import Controller from '../interface/BaseController'
import { verify } from 'jsonwebtoken';

export default class TaskController implements Controller {
    public data = {}
    public status = 200
    public db = Database.setInstance(null);
    create = async (request: express.Request, response: express.Response) => {
        console.log(request.body)
        let exam_id = request.body.exam_id
        try {
            let token: any = request.headers.authorization;
            let data: any = verify(token, "phongthien");
            let exam = await this.db.db.Exam.findOne(
                {
                    where: { id: exam_id },
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
            let task = await this.db.db.Task.create({ user_id: data.user.id, exam_id: exam.dataValues.id })

            this.data = { success: true, data: { exam, task_id: task.dataValues.id } }
        } catch (error) {
            console.log(error)
        }
        response.status(this.status).json(this.data)


    }
    update = async (request: express.Request, response: express.Response) => {
        console.log(request.params)
        // kiem tra nguoi dung trong bang task
        let data = {
            task_id: request.params.id,
            question_id: request.body.question_id,
            answer_id: request.body.answer_id
        }
        console.log(data)
        try {
            let answerUser = await this.db.db.TaskExamQuestion.upsert(data);
            console.log(answerUser)
            this.data = { success: true, status: answerUser }
        } catch (error) {
            console.log(error)
        }
        response.status(this.status).json(this.data)
    }
    delete = async (request: express.Request, response: express.Response) => {

        let task_id = request.params.id;

        // tinhs ddiem 

        console.log(Date.now())
        try {
            let cf = await this.db.db.Task.update({ expiresIn: Date.now() }, { where: { id: task_id } })
            this.data = { success: true, cf }
        } catch (error) {
            console.log(error)
        }

        response.status(this.status).json(this.data)
    }
    getList = async (request: express.Request, response: express.Response) => {
        console.log("tesst")
        try {
            let token: any = request.headers.authorization;
            console.log(token)

            let data: any = verify(token, "phongthien");
            let listTask = await this.db.db.Task.findAll({
                where: { user_id: data.user.id },
                attributes: ["id", "exam_id", "expiresIn", "score", "createdAt"],
                order: [['id', 'DESC']],
                include: [
                    {
                        model: this.db.db.Exam,
                        required: true,
                        attributes: ['name', "timedo"],
                        include: [
                            {
                                model: this.db.db.Subject,
                                required: true,
                                attributes: ['name'],

                            }
                        ]

                    }

                ]
            })
            this.data = listTask
            console.log("getlist")
        } catch (error) {
            console.log(error)
        }
        response.status(this.status).json(this.data)

    }
    getInformation = async (request: express.Request, response: express.Response) => {
        try {
            let id = request.params.id
            let res = await this.db.db.Task.findOne({
                where: { id: id },

                include: [
                    {


                        model: this.db.db.Exam,
                        attributes: ['name'],
                        
                        include: [{
                            model: this.db.db.Question,
                            
                            through: { 
                                attributes: [] ,
                               
                            },
                            include: [
                                {model:this.db.db.Task,
                                    through: { 
                                        attributes: ['answer_id'] ,
                                       
                                    },
                                    where :{id:id},
                                    required:false,
                                    attributes: ['id'],
                                   
                                },
                                
                                {
                                    model: this.db.db.Answer,
                                    through: { 
                                        attributes: ['right'] ,
                                       
                                    },
                                    attributes: ['id','content'],
                                
                                    
                                

                                },

                            ],
                            attributes: ['id','content'],

                        },

                        ]

                    },
                    
                ]

            })
            this.data = res
        } catch (error) {
            console.log(error)
        }
        response.status(this.status).json(this.data)

    }
    // get = async

}
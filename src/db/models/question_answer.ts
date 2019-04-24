import *as Sequelize from 'sequelize/index';
import { type } from 'os';

export interface Question_answerAttributes {
    question_id ? : number
    answer_id ? : number
    right?:boolean
}

export interface Question_answerInstance {
   
    createdAt: Date;
    updatedAt: Date;

    question_id: number
    answer_id: number
    right:boolean
}

export const QuestionAnswerFactory= (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var question_answer = sequelize.define('question_answer', {
        question_id:
        { 
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        answer_id: { 
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        right:DataTypes.BOOLEAN
    });

    question_answer.associate = function(models) {
        // associations can be defined here
        question_answer.hasMany(models.TaskExamQuestion,{
         foreignKey:'answer_id'
        })
        question_answer.hasMany(models.TaskExamQuestion,{
            foreignKey:'question_id'
           })
        
    };
    question_answer.removeAttribute('id')
    return question_answer;
};

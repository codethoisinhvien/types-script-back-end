import *as Sequelize from 'sequelize/index';

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

export const QuestionAnwerFactory= (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var question_answer = sequelize.define('question_answer', {
        question_id: DataTypes.INTEGER,
        answer_id: DataTypes.INTEGER,
        right:DataTypes.BOOLEAN
    });

    question_answer.associate = function(models) {
        // associations can be defined here
    };
    question_answer.removeAttribute('id')
    return question_answer;
};

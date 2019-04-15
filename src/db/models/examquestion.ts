import *as  Sequelize from 'sequelize/index';

export interface ExamQuestionAttributes {
    exam_id ? : number
    question_id ? : number
    score ? : number

}

export interface ExamQuestionInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    exam_id: number
    question_id: number
    score: number

}

export const ExamQuestionFactory= (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var examQuestion = sequelize.define('examQuestion', {
        exam_id: {
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        question_id:{
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        score: DataTypes.INTEGER
    });
     examQuestion.removeAttribute('id')
    examQuestion.associate = function(models) {
        // associations can be defined here
    };

    return examQuestion;
};

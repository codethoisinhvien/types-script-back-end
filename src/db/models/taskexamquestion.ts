import Sequelize from 'sequelize/index';

export interface TaskExamQuestionAttributes {
    task_id ? : number
    question_id ? : number
    answer_id ? : number

}

export interface TaskExamQuestionInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    task_id: number
    question_id: number
    answer_id: number

}

export const TaskExamQuestionFactory= (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var taskExamQuestion = sequelize.define('taskExamQuestion', {
        task_id: { 
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        question_id: { 
            type:DataTypes.INTEGER,
            primaryKey:true,
            
        },
        answer_id: { 
            type:DataTypes.INTEGER,
            
        }
    });

    taskExamQuestion.associate = function(models) {
        // associations can be defined here
        
    };

    return taskExamQuestion;
};

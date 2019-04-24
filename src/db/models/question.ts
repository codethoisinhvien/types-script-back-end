import * as Sequelize from 'sequelize/index';
import { AnswerInstance, AnswerAttributes } from './answer';

export interface QuestionAttributes {
    subject_id ? : number
    content ? : string;
    level ? : number
    answer?:AnswerAttributes[]
}

export interface QuestionInstance extends Sequelize.Instance<QuestionAttributes >, QuestionAttributes{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    subject_id: number
    content: string;
    level: number
   // createQuestions:Sequelize.HasManyCreateAssociationMixin<AnswerAttributes,AnswerInstance>;

}

export const QuestionFactory = (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var question = sequelize.define('question', {
        subject_id: DataTypes.INTEGER,
        content: DataTypes.STRING,
        level: DataTypes.INTEGER
    });

    question.associate = function(models) {
        // associations can be defined here
        question.belongsToMany(models.Answer,{
            foreignKey: 'question_id',
            through: {
                model: models.QuestionAnswer,
                unique: false,
                
        }

    })
    question.belongsToMany(models.Exam, {
        foreignKey: 'question_id',
        through: {
            model: models.ExamQuestion,
            unique: false
        }
    
    })
    question.belongsToMany(models.Task,{
        foreignKey: 'question_id',
        through: {
            model: models.TaskExamQuestion,
            unique: false,
            
    }
}
    )
    
    };

    return question;
};

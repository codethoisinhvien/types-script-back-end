import *as Sequelize from 'sequelize/index';

export interface AnswerAttributes {
    content ? : string;
  
}

export interface AnswerInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    content: string;
    

}

export const AnswerFacatory= (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var answer = sequelize.define('answer', {
        content: DataTypes.STRING
    });

    answer.associate = function(models) {
        // associations can be defined here
        answer.belongsToMany(models.Question,{
            foreignKey: 'answer_id',
            through: {
                model: models.QuestionAnswer,
                unique: false,
                
        }

    })
    
    };

    return answer;
};

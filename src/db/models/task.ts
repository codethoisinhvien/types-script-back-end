import Sequelize from 'sequelize/index';

export interface TaskAttributes {
    user_id ? : number
    exam_id ? : number
    score ? : number
    expiresIn ? : number

}

export interface TaskInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    user_id: number
    exam_id: number
    score: number
    expiresIn: Date

}

export const TaskFactory = (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var task = sequelize.define('task', {
        user_id: DataTypes.INTEGER,
        exam_id: DataTypes.INTEGER,
        score: DataTypes.INTEGER,
        expiresIn: DataTypes.DATE
    });

    task.associate = function(models) {
       
        
        task.belongsToMany(models.Question, {
            foreignKey: 'task_id',
            through: {
                model: models.TaskExamQuestion,
                unique: false,
                
        }
            
        })
        task.belongsTo(models.Exam,{
            foreignKey: "exam_id"
        })
        
        
    };

    return task;
};

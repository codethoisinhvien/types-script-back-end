
import *as Sequelize from 'sequelize/index';
export interface SubjectAttributes {
    name ? : string;

}

export interface SubjectInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    name: string;

}

export const SubjectFactory= (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var subject = sequelize.define('subject', {
        name: {
            type:DataTypes.STRING,
            unique:true
        }
    });

    subject.associate = function(models) {
       subject.hasMany(models.Question,{
           // associations can be defined here
     
            foreignKey: 'subject_id', 
        })
    };

    return subject;
};

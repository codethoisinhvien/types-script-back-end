import *as Sequelize from 'sequelize/index';

export interface UserAttributes {
    username ? : string;
    password ? : string;
    first_name ? : string;
    last_name ? : string;
    level ? : number
    birthday ? : Date;

}

export interface UserInstance extends Sequelize.Instance<UserAttributes >, UserAttributes{
    id: number;
    createdAt: Date;
    updatedAt: Date;

    username: string;
    password: string;
    first_name: string;
    last_name: string;
    level: number;
    birthday: Date;

}

export const UserFactory = (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var User = sequelize.define('User', {
        username:{
            type:DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        level: DataTypes.INTEGER,
        birthday: DataTypes.DATE
    });

    User.associate = function(models) {
        // associations can be defined here
        User.hasMany(models.Question,{
             as: 'newTask',
             foreignKey: 'userId', 
           
        })
    };

    return User;
};

import *as Sequelize from 'sequelize/index';

export interface UserAttributes {
    first_name ? : string;
    last_name ? : string;
    username ? : string;
    password ? : string;
    email?:string
    birthday ? : Date;
    sex:string
    level ? : number;
    role?: number
}

export interface UserInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email?:string
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    sex:string
    birthday: Date;
    level: number
    role?: number
}

export const UserFactory = (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var user = sequelize.define('user', {
        first_name: {
            type:DataTypes.STRING,
            allowNull: false
           },
        last_name:{
            type:DataTypes.STRING,
            allowNull: false
           },
        email:{
            type:DataTypes.STRING,
            allowNull: false
           },
        username:{
         type:DataTypes.STRING,
         unique:true
        } ,
        password: DataTypes.STRING,
        birthday: DataTypes.DATE,
        level: DataTypes.INTEGER,
        sex:DataTypes.ENUM('male','female'),
        role:{
          type: DataTypes.INTEGER,
          defaultValue:1
        }
    });

    user.associate = function(models) {
        // associations can be defined here
        user.hasMany(models.Question,{
            
            foreignKey: 'user_id', 
          
       })
    };

    return user;
};

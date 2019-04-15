"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = function (sequelize, DataTypes) {
    var user = sequelize.define('user', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        birthday: DataTypes.DATE,
        level: DataTypes.INTEGER,
        sex: DataTypes.ENUM('male', 'female'),
        role: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    });
    user.associate = function (models) {
        // associations can be defined here
        user.hasMany(models.Question, {
            foreignKey: 'user_id',
        });
    };
    return user;
};

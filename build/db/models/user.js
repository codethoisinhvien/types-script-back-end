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
            unique: true,
            allowNull: false
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
        user.hasMany(models.Task, {
            foreignKey: 'user_id',
        });
        user.hasMany(models.Notification, {
            foreignKey: 'id_create',
        });
        user.belongsToMany(models.Notification, {
            foreignKey: 'user_id',
            through: {
                model: models.UserNotification,
                unique: false
            }
        });
    };
    return user;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        level: DataTypes.INTEGER,
        birthday: DataTypes.DATE
    });
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};

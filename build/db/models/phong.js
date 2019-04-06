"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhongFactory = function (sequelize, DataTypes) {
    var phong = sequelize.define('phong', {
        name: DataTypes.STRING
    });
    phong.associate = function (models) {
        // associations can be defined here
    };
    return phong;
};

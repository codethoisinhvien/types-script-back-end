"use strict";
module.exports = function (sequelize, DataTypes) {
    var anhthanh = sequelize.define('anhthanh', {
        giang: DataTypes.STRING
    });
    anhthanh.associate = function (models) {
        // associations can be defined here
    };
    return anhthanh;
};

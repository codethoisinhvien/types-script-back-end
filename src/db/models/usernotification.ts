import *as Sequelize from 'sequelize/index'
export const UserNotificationFactory= (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var UserNotification = sequelize.define('UserNotification', {
        notification_id: {
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        user_id:{
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        status: DataTypes.BOOLEAN
    });

    UserNotification.associate = function(models) {
        // associations can be defined here
    };
    UserNotification.removeAttribute('id')
    return UserNotification;
};

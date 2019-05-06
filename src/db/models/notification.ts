import *as Sequelize from 'sequelize/index'

export interface NotificationAttributes {
    content ? : string;
 
}

export interface NotificationInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    content: string;

}

export const NotificationFactory= (sequelize: Sequelize.Sequelize, DataTypes:Sequelize.DataTypes) => {
    var Notification = sequelize.define('Notification', {
        content: DataTypes.STRING,
        id_create:DataTypes.INTEGER
    });

    Notification.associate = function(models) {
        // associations can be defined here
        Notification.belongsToMany(models.User,{
            foreignKey: 'notification_id',
            through: {
                model: models.UserNotification,
                unique: false
            }
        })
      
    };

    return Notification;
};

import {
    QueryInterface,
    SequelizeStatic
} from 'sequelize/index';

export = {
    up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            username: {
                type: Sequelize.STRING,
                
                    
                unique: true
                
            },

            password: {
                type: Sequelize.STRING
            },

            first_name: {
                type: Sequelize.STRING
            },

            last_name: {
                type: Sequelize.STRING
            },

            level: {
                type: Sequelize.INTEGER
            },

            birthday: {
                type: Sequelize.DATE
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.dropTable('Users');
    }
};

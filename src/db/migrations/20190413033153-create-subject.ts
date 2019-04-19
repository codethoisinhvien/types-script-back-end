import {
    QueryInterface,
    SequelizeStatic
} from 'sequelize/index';

export = {
    up: (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
        return queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            first_name: {
                type: Sequelize.STRING
            },

            last_name: {
                type: Sequelize.STRING
            },

            username: {
                type: Sequelize.STRING
            },

            password: {
                type: Sequelize.STRING
            },

            birthday: {
                type: Sequelize.DATE
            },

            level: {
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('usesrs');
    }
};

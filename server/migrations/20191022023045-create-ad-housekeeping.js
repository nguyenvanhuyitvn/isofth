'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ad_housekeepings', {
            ad_housekeeping_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ad_client_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            ad_org_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            ad_table_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            backupfolder: {
                allowNull: true,
                type: Sequelize.STRING
            },
            created: {
                allowNull: false,
                type: Sequelize.DATE
            },
            description: {
                allowNull: true,
                type: Sequelize.STRING
            },
            help: {
                allowNull: true,
                type: Sequelize.STRING
            },
            isactive: {
                type: Sequelize.STRING
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isexportxmlbackup: {
                allowNull: false,
                type: Sequelize.STRING
            },
            issaveinhistoric: {
                allowNull: false,
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ad_housekeepings');
    }
};
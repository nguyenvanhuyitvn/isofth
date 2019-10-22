'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('his_service_sequences', {
            his_service_sequence_id: {
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
            createdby: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            updatedby: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            his_service_sequence_uu: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isactive: {
                allowNull: false,
                type: Sequelize.STRING
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isdeleted: {
                allowNull: false,
                type: Sequelize.STRING
            },
            value: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                name: 'created',
                field: 'created'
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                name: 'updated',
                field: 'updated'
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('his_service_sequences');
    }
};
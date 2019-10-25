'use strict';
const withDateNoTz = require('sequelize-date-no-tz-postgres');
module.exports = {
    up: (queryInterface, SequelizeBase) => {
        
        const Sequelize = withDateNoTz(SequelizeBase);
        return queryInterface.createTable({
            tableName: 'm_products',
            schema: 'adempiere'
        }, {
            m_product_id: {
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
            isactive: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdby: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            updatedby: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            value: {
                allowNull: false,
                type: Sequelize.STRING
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            description: {
                allowNull: false,
                type: Sequelize.STRING
            },
            documentnote: {
                allowNull: false,
                type: Sequelize.STRING
            },
            help: {
                allowNull: false,
                type: Sequelize.STRING
            },
            upc: {
                allowNull: false,
                type: Sequelize.STRING
            },
            sku: {
                allowNull: false,
                type: Sequelize.STRING
            },
            c_uom_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            salesrep_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            issummary: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isstocked: {
                allowNull: false,
                type: Sequelize.STRING
            },
            ispurchased: {
                allowNull: false,
                type: Sequelize.STRING
            },
            issold: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isbom: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isinvoiceprintdetails: {
                allowNull: false,
                type: Sequelize.STRING
            },
            ispicklistprintdetails: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isverified: {
                allowNull: false,
                type: Sequelize.STRING
            },
            c_revenuerecognition_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            m_product_category_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            classification: {
                allowNull: false,
                type: Sequelize.STRING
            },
            volume: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            weight: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            shelfwidth: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            shelfheight: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            shelfdepth: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            unitsperpallet: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            c_taxcategory_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            s_resource_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            discontinued: {
                allowNull: false,
                type: Sequelize.STRING
            },
            processing: {
                allowNull: false,
                type: Sequelize.STRING
            },
            s_expensetype_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            producttype: {
                allowNull: false,
                type: Sequelize.STRING
            },
            imageurl: {
                allowNull: false,
                type: Sequelize.STRING
            },
            descriptionurl: {
                allowNull: false,
                type: Sequelize.STRING
            },
            guaranteedays: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            r_mailtext_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            versionno: {
                allowNull: false,
                type: Sequelize.STRING
            },
            m_attributeset_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            m_attributesetinstance_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            downloadurl: {
                allowNull: false,
                type: Sequelize.STRING
            },
            m_freightcategory_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            m_locator_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            guaranteedaysmin: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            iswebstorefeatured: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isselfservice: {
                allowNull: false,
                type: Sequelize.STRING
            },
            c_subscriptiontype_id: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isdropship: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isexcludeautodelivery: {
                allowNull: false,
                type: Sequelize.STRING
            },
            group1: {
                allowNull: false,
                type: Sequelize.STRING
            },
            group2: {
                allowNull: false,
                type: Sequelize.STRING
            },
            istoformule: {
                allowNull: false,
                type: Sequelize.STRING
            },
            lowlevel: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            unitsperpack: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            copyfrom: {
                allowNull: false,
                type: Sequelize.STRING
            },
            m_product_uu: {
                allowNull: false,
                type: Sequelize.STRING
            },
            m_parttype_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            iskanban: {
                allowNull: false,
                type: Sequelize.STRING
            },
            ismanufactured: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isphantom: {
                allowNull: false,
                type: Sequelize.STRING
            },
            isownbox: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                name: 'created',
                field: 'created',
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                name: 'updated',
                field: 'updated',
<<<<<<< HEAD
                type: Sequelize.DATE
            },
            discontinuedby: {
                allowNull: true,
                type: Sequelize.STRING
            },
            deletedAt: {
                allowNull: true,
                name: 'discontinuedat',
                field: 'discontinuedat',
                type: 'TIMESTAMP'
            },
=======
                type: Sequelize.DATE_NO_TZ
            }
>>>>>>> 215350005bf535cb30be8f474267252276959d84
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable({
            tableName: 'm_product',
            schema: 'adempiere'
        });
    }
};
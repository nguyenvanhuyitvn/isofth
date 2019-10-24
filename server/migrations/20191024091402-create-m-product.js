'use strict';
const withDateNoTz = require('sequelize-date-no-tz-postgres');

module.exports = {
    up: (queryInterface, SequelizeBase) => {
        const Sequelize = withDateNoTz(SequelizeBase);
        return queryInterface.createTable('m_products', {
            m_product_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ad_client_id: {
                type: Sequelize.INTEGER
            },
            ad_org_id: {
                type: Sequelize.INTEGER
            },
            isactive: {
                type: Sequelize.STRING
            },
            createdby: {
                type: Sequelize.INTEGER
            },
            updatedby: {
                type: Sequelize.INTEGER
            },
            value: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            documentnote: {
                type: Sequelize.STRING
            },
            help: {
                type: Sequelize.STRING
            },
            upc: {
                type: Sequelize.STRING
            },
            sku: {
                type: Sequelize.STRING
            },
            c_uom_id: {
                type: Sequelize.INTEGER
            },
            salesrep_id: {
                type: Sequelize.INTEGER
            },
            issummary: {
                type: Sequelize.STRING
            },
            isstocked: {
                type: Sequelize.STRING
            },
            ispurchased: {
                type: Sequelize.STRING
            },
            issold: {
                type: Sequelize.STRING
            },
            isbom: {
                type: Sequelize.STRING
            },
            isinvoiceprintdetails: {
                type: Sequelize.STRING
            },
            ispicklistprintdetails: {
                type: Sequelize.STRING
            },
            isverified: {
                type: Sequelize.STRING
            },
            c_revenuerecognition_id: {
                type: Sequelize.INTEGER
            },
            m_product_category_id: {
                type: Sequelize.INTEGER
            },
            classification: {
                type: Sequelize.STRING
            },
            volume: {
                type: Sequelize.INTEGER
            },
            weight: {
                type: Sequelize.INTEGER
            },
            shelfwidth: {
                type: Sequelize.INTEGER
            },
            shelfheight: {
                type: Sequelize.INTEGER
            },
            shelfdepth: {
                type: Sequelize.INTEGER
            },
            unitsperpallet: {
                type: Sequelize.INTEGER
            },
            c_taxcategory_id: {
                type: Sequelize.INTEGER
            },
            s_resource_id: {
                type: Sequelize.INTEGER
            },
            discontinued: {
                type: Sequelize.STRING
            },
            processing: {
                type: Sequelize.STRING
            },
            s_expensetype_id: {
                type: Sequelize.INTEGER
            },
            producttype: {
                type: Sequelize.STRING
            },
            imageurl: {
                type: Sequelize.STRING
            },
            descriptionurl: {
                type: Sequelize.STRING
            },
            guaranteedays: {
                type: Sequelize.INTEGER
            },
            r_mailtext_id: {
                type: Sequelize.INTEGER
            },
            versionno: {
                type: Sequelize.STRING
            },
            m_attributeset_id: {
                type: Sequelize.INTEGER
            },
            m_attributesetinstance_id: {
                type: Sequelize.INTEGER
            },
            downloadurl: {
                type: Sequelize.STRING
            },
            m_freightcategory_id: {
                type: Sequelize.INTEGER
            },
            m_locator_id: {
                type: Sequelize.INTEGER
            },
            guaranteedaysmin: {
                type: Sequelize.INTEGER
            },
            iswebstorefeatured: {
                type: Sequelize.STRING
            },
            isselfservice: {
                type: Sequelize.STRING
            },
            c_subscriptiontype_id: {
                type: Sequelize.STRING
            },
            isdropship: {
                type: Sequelize.STRING
            },
            isexcludeautodelivery: {
                type: Sequelize.STRING
            },
            group1: {
                type: Sequelize.STRING
            },
            group2: {
                type: Sequelize.STRING
            },
            istoformule: {
                type: Sequelize.STRING
            },
            lowlevel: {
                type: Sequelize.INTEGER
            },
            unitsperpack: {
                type: Sequelize.INTEGER
            },
            copyfrom: {
                type: Sequelize.STRING
            },
            m_product_uu: {
                type: Sequelize.STRING
            },
            m_parttype_id: {
                type: Sequelize.INTEGER
            },
            iskanban: {
                type: Sequelize.STRING
            },
            ismanufactured: {
                type: Sequelize.STRING
            },
            isphantom: {
                type: Sequelize.STRING
            },
            isownbox: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                name: 'created',
                field: 'created',
                type: Sequelize.DATE_NO_TZ
            },
            updatedAt: {
                allowNull: false,
                name: 'updated',
                field: 'updated',
                type: Sequelize.DATE_NO_TZ
            },
            discontinuedby: {
                allowNull: false,
                type: Sequelize.DATE_NO_TZ
            },
            discontinuedat: {
                allowNull: false,
                type: Sequelize.DATE_NO_TZ
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('m_products');
    }
};
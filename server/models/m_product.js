'use strict';
const withDateNoTz = require('sequelize-date-no-tz-postgres');
module.exports = (sequelize, SequelizeDataTypes) => {
    const DataTypes = withDateNoTz(SequelizeDataTypes);
    sequelize.query(`
    SET SCHEMA 'adempiere'
`);
    const m_product = sequelize.define('m_product', {
        m_product_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        ad_client_id: DataTypes.INTEGER,
        ad_org_id: DataTypes.INTEGER,
        isactive: DataTypes.STRING,
        createdby: DataTypes.INTEGER,
        updatedby: DataTypes.INTEGER,
        value: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        documentnote: DataTypes.STRING,
        help: DataTypes.STRING,
        upc: DataTypes.STRING,
        sku: DataTypes.STRING,
        c_uom_id: DataTypes.INTEGER,
        salesrep_id: DataTypes.INTEGER,
        issummary: DataTypes.STRING,
        isstocked: DataTypes.STRING,
        ispurchased: DataTypes.STRING,
        issold: DataTypes.STRING,
        isbom: DataTypes.STRING,
        isinvoiceprintdetails: DataTypes.STRING,
        ispicklistprintdetails: DataTypes.STRING,
        isverified: DataTypes.STRING,
        c_revenuerecognition_id: DataTypes.INTEGER,
        m_product_category_id: DataTypes.INTEGER,
        classification: DataTypes.STRING,
        volume: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        shelfwidth: DataTypes.INTEGER,
        shelfheight: DataTypes.INTEGER,
        shelfdepth: DataTypes.INTEGER,
        unitsperpallet: DataTypes.INTEGER,
        c_taxcategory_id: DataTypes.INTEGER,
        s_resource_id: DataTypes.INTEGER,
        discontinued: DataTypes.STRING,
        processing: DataTypes.STRING,
        s_expensetype_id: DataTypes.INTEGER,
        producttype: DataTypes.STRING,
        imageurl: DataTypes.STRING,
        descriptionurl: DataTypes.STRING,
        guaranteedays: DataTypes.INTEGER,
        r_mailtext_id: DataTypes.INTEGER,
        versionno: DataTypes.STRING,
        m_attributeset_id: DataTypes.INTEGER,
        m_attributesetinstance_id: DataTypes.INTEGER,
        downloadurl: DataTypes.STRING,
        m_freightcategory_id: DataTypes.INTEGER,
        m_locator_id: DataTypes.INTEGER,
        guaranteedaysmin: DataTypes.INTEGER,
        iswebstorefeatured: DataTypes.STRING,
        isselfservice: DataTypes.STRING,
        c_subscriptiontype_id: DataTypes.STRING,
        isdropship: DataTypes.STRING,
        isexcludeautodelivery: DataTypes.STRING,
        group1: DataTypes.STRING,
        group2: DataTypes.STRING,
        istoformule: DataTypes.STRING,
        lowlevel: DataTypes.INTEGER,
        unitsperpack: DataTypes.INTEGER,
        copyfrom: DataTypes.STRING,
        m_product_uu: DataTypes.STRING,
        m_parttype_id: DataTypes.INTEGER,
        iskanban: DataTypes.STRING,
        ismanufactured: DataTypes.STRING,
        isphantom: DataTypes.STRING,
        isownbox: DataTypes.STRING,
        createdAt: {
            field: 'created',
            name: 'created',
            type: DataTypes.DATE
        },
        updatedAt: {
            field: 'updated',
            name: 'updated',
            type: DataTypes.DATE
        },
        discontinuedby: {
            type: DataTypes.STRING,
            allowNull: {
                args: true
            }
        },
        deletedAt: {
            type: 'TIMESTAMP',
            name: 'discontinuedat',
            field: 'discontinuedat',
            allowNull: {
                args: true
            }
        },
    }, { 
        timestamp: true,
        schema: 'adempiere',

    });
    m_product.associate = function(models) {
        // associations can be defined here
    };
    m_product.schema("adempiere");
    return m_product;
};
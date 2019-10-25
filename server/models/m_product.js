'use strict';
const withDateNoTz = require('sequelize-date-no-tz-postgres');
module.exports = (sequelize, SequelizeDataTypes) => {
    const DataTypes = withDateNoTz(SequelizeDataTypes);
    const m_product = sequelize.define('m_product', {
        m_product_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        ad_client_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        ad_org_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        isactive: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        createdby: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        updatedby: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        value: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        documentnote: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        help: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        upc: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        c_uom_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        salesrep_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        issummary: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        isstocked: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        ispurchased: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        issold: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        isbom: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        isinvoiceprintdetails: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        ispicklistprintdetails: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        isverified: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        c_revenuerecognition_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        m_product_category_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        classification: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        volume: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        shelfwidth: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        shelfheight: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        shelfdepth: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        unitsperpallet: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        c_taxcategory_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        s_resource_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        discontinued: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        processing: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        s_expensetype_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        producttype: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        imageurl: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        descriptionurl: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        guaranteedays: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        r_mailtext_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        versionno: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        m_attributeset_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        m_attributesetinstance_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        downloadurl: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        m_freightcategory_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        m_locator_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        guaranteedaysmin: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        iswebstorefeatured: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        isselfservice: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        c_subscriptiontype_id: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        isdropship: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        isexcludeautodelivery: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        group1: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        group2: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        istoformule: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        lowlevel: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        unitsperpack: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        copyfrom: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        m_product_uu: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        m_parttype_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false
            }
        },
        iskanban: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        ismanufactured: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        isphantom: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        isownbox: {
            type: DataTypes.STRING,
            allowNull: {
                args: false
            }
        },
        createdAt: {
            field: 'created',
            type: DataTypes.DATE_NO_TZ
        },
        updatedAt: {
            field: 'updated',
            type: DataTypes.DATE_NO_TZ
        }
    }, { timestamp: true });
    m_product.associate = function(models) {
        // associations can be defined here
    };
    return m_product;
};
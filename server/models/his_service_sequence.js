'use strict';
module.exports = (sequelize, DataTypes) => {
    const his_service_sequence = sequelize.define('his_service_sequence', {
        his_service_sequence_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        ad_client_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: "Please choose client"
            }
        },
        ad_org_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: "Please choose org"
            }
        },
        createdby: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: "Please choose who created"
            }
        },
        updatedby: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: "Please choose who updated"
            }
        },
        his_service_sequence_uu: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: "Please input his_service_sequence_uu"
            }
        },
        isactive: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: "Please choose Y or N to take your choice"
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: "Please input the name"
            }
        },
        isdeleted: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: "Please take your choice"
            }
        },
        value: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: "Please take your choice"
            }
        },
        createdAt: {
            field: 'created',
            type: DataTypes.DATE
        },
        updatedAt: {
            field: 'updated',
            type: DataTypes.DATE
        }
    }, {
        timestamps: true
    });
    his_service_sequence.associate = function(models) {
        // associations can be defined here
    };
    return his_service_sequence;
};
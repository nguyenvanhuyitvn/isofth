'use strict';
module.exports = (sequelize, DataTypes) => {
    const ad_housekeeping = sequelize.define('ad_housekeeping', {
        ad_housekeeping_id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        ad_client_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: 'Please choose client'
            }
        },
        ad_org_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: 'Please choose org'
            }
        },
        ad_table_id: {
            type: DataTypes.INTEGER,
            allowNull: {
                args: false,
                msg: 'Please choose table'
            }
        },
        backupfolder: {
            type: DataTypes.STRING,
            allowNull: {
                args: true
            }
        },
        created: {
            type: DataTypes.DATE,
            allowNull: {
                args: false,
                msg: 'Please enter the date'
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: {
                args: true
            }
        },
        help: {
            type: DataTypes.STRING,
            allowNull: {
                args: true
            }
        },
        isactive: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: 'Input Y or N to take your choice'
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: 'Please input the name'
            }
        },
        isexportxmlbackup: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: 'Input Y or N to take your choice'
            }
        },
        issaveinhistoric: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: 'Input Y or N to take your choice'
            }
        }
    }, { timestamps: false });
    ad_housekeeping.associate = function(models) {
        // associations can be defined here
    };
    return ad_housekeeping;
};
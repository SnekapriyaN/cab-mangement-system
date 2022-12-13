const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Admin = sequelize.define('admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(70),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(250),
        allowNull: true,
    }
        
});


module.exports = Admin;
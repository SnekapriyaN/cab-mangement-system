const sequelize = require('./db');
const {DataTypes} = require('sequelize');
//const Review = require('./review');
const User = require('./user');

const Ride = sequelize.define('Ride', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
 
    Pickup: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Drop: 
     {
        type: DataTypes.STRING(50),
        allowNull: false
     },
    Date: 
    {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Time: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.hasMany(Ride)
Ride.belongsTo(User)
module.exports = Ride;
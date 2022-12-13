const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Review = sequelize.define('Review', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    review: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
});



module.exports = Review;
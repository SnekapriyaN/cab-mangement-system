const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Driver = require('./driver')
const Cab = sequelize.define('Cab', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // driver_id:{
    //     type: DataTypes.INTEGER,
    //     allowNull:false,
    //     references: {model:"Driver",key:"id"}
    //         },
    
    Cabno: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    Cabmodel: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
   
    Totalseating: {
        type: DataTypes.INTEGER(50),
        allowNull: false
    }
    
});
Driver.hasMany(Cab)
Cab.belongsTo(Driver)

module.exports = Cab;
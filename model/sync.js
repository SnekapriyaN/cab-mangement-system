const user = require('./user');
const cab = require('./cab');
const ride= require('./ride');
const driver= require('./driver');
const review = require('./review');
const admin = require('./admin');

// Ride.hasMany(review);
// review.belongsTo(Ride, {
//     onDelete: 'CASCADE',
// });
//review.sync({alter: true});
admin.sync({alter: true});
user.sync({alter: true});
ride.sync({alter: true});
cab.sync({alter: true});
driver.sync({alter: true});
// admin.sync();
// user.sync();
// ride.sync();
// cab.sync();
// driver.sync();
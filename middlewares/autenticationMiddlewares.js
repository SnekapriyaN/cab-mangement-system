
const user = require('../model/user');
const driver = require('../model/driver');



module.exports = async (req, res, next) => {

    req.identity = {
    isAuthenticated: false,
    user: null

    }
if (req.url == "/login" || req.url == "/register") {
    return next();

    }



    let userId = req.session.userId;
    if (!userId || userId == null) {
    return res.redirect("/login");
}

let userFromDb = await user.findByPk(userId);
//console.log("auth");




//console.log(userFromDb);
if (userFromDb == null) {
return res.redirect("/login");
}

req.identity.isAuthenticated = true;
req.identity.user = {
id: userFromDb.id,

role: 'user'
 }
next();

} 



// module.exports = async (req, res, next) => {
//     req.identity = {
//         isAuthenticated: false,
//         user: null

//     }

// if (req.url == "/log" || req.url == "/reg" ) {
//     return next();
// }
// let driverId = req.session.driverId;
// if (!driverId || driverId == null) {
//     return res.redirect("/log");
// }


// let driverFromDb = await driver.findByPk(driverId);
// if (driverFromDb == null) {
//     return res.redirect("/log");
// }
// req.identity.isAuthenticated = true;
// req.identity.driver = {
//     id:driverFromDb.id,
//     role: 'driver'
// }
// next();
// }










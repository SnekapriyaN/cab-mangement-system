const express = require('express');
const parser = require('body-parser');
const rideRoutes = require('./routes/rideRoutes');
const accountRoutes = require('./routes/accountRoutes');
const cabRoutes = require('./routes/cabRoutes');
const driverRoutes = require('./routes/driverRoutes');
const adminRoutes = require('./routes/adminRoutes');
const payRoutes = require('./routes/payRoutes');

const path = require('path');
const cookieSession = require('cookie-session');
const {engine} = require('express-handlebars');
const authMiddleware = require('./middlewares/autenticationMiddlewares');

// Creating an express app
const app = express();

// Configuring the express app to use handlebars template engine.
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'))

// Configuring body parser.
app.use("/", parser.urlencoded({extended: true}));

// Configuring static files middleware.
app.use("/static", express.static(path.join(__dirname, 'static')));

app.use(cookieSession({
    name:'session',
    httpOnly: true,
    keys: ["asdfghjkasdfghjk"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(authMiddleware);

app.use(adminRoutes);
app.use(rideRoutes);
app.use(accountRoutes);
app.use(cabRoutes);
app.use(payRoutes);


app.use(driverRoutes);
function handler(req, res){
    res.send("Hello World")
}
app.get('/test', handler)

app.listen(80);
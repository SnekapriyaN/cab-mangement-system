const Driver = require('../model/driver');
module.exports.reg = (req, res, next)=>{
    res.render('driver');
}

module.exports.regPost = async (req, res, next)=>{
    const {firstName, lastName,dob, email ,license, password } = req.body;
    let existingDriver = await Driver.findOne({
        where: {
            email: email
        }
    });

    if(existingDriver){
        return res.render('register', {message: 'Already registered.'});
    }

    await Driver.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        email: req.body.email,
        license: req.body.license,
        password: req.body.password
    });

    res.redirect('/log');
}




module.exports.upda= async (req, res, next)=>{
    Driver.findByPk(req.params.id)
    .then(infoFromDb=>{
        res.render('dr-update',{
            data:infoFromDb
        });
    });
}


module.exports.updaPost = (req, res, next) => {
    Driver.findByPk(req.params.id)
        .then(driver=> {
            driver.update({
                     firstName: req.body.firstName,
                     lastName: req.body.lastName,
                     dob: req.body.dob,
                     email: req.body.email,
                     license: req.body.license,
                     password: req.body.password
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(count => {
                    res.redirect('/dri');
                });
        });
}


module.exports.updaPost = async (req, res, next) => {
    // var Driver = await Driver.findByPk(req.params.id);
    await Driver.update(
        {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        email: req.body.email,
        license: req.body.license,
        password: req.body.password
        },
        {
            where: {id: req.params.id}
        }
    )

    res.redirect('/id' );
}

module.exports.ind = (req, res , next)=>{
    Driver.findAll().then(details=>{
        res.render('dr-index',{
            data:details
        });
    })
}


module.exports.log= (req, res, next)=>{
    res.render('dr-login');
}

module.exports.logPost = async (req, res, next)=>{
    const {email, password} = req.body;
    const driverFromDb = await Driver.findOne({
        where: {email: email, password: password}
        
    })
   
     if(driverFromDb == null){
        return res.render('dr-login', {message: 'No user with this email or password was found.'})
    }


    res .cookie('id',(driverFromDb.id))
    req.session.driverId = driverFromDb.id;
    res.redirect('/drpage');
}

module.exports.drpage= (req, res, next)=>{
    res.render('driverpage');
}
module.exports.drlogout = (req, res, next)=>{
    req.session.driverId==null;
    res.redirect('/log')
}
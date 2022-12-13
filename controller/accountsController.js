const User = require('../model/user');



module.exports.login = (req, res, next)=>{
   
    res.render('login');
}
module.exports.logout = (req, res, next)=>{
   //console.log('logout');
    req.session=null;
  res.redirect('/login')
  //console.log(req.session);
}

module.exports.loginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    //console.log(email,password);
    const userFromDb = await User.findOne({
        where: {email: email, password: password}
        
    })
  
      if(userFromDb == null){
        return res.render('login', {message: 'No user with this email or password was found.'})
    }
    console.log(userFromDb)
    res.cookie('id',userFromDb.id)
    req.session.userId = userFromDb.id;
    //console.log('redirected')
    res.redirect('/page');
}


module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.registerPost = async (req, res, next)=>{
    const {firstName, lastName, email, password } = req.body;
    let existingUser = await User.findOne({
        where: {
            email: email
        }
    });

    if(existingUser){
        return res.render('register', {message: 'Already registered.'});
    }

    await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
   

    res.redirect('/login');
}
module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.update = async (req, res, next)=>{
    User.findByPk(req.params.id)
    .then(infoFromDb=>{
        res.render('reg-update',{
            data:infoFromDb
        });
    });
}


module.exports.updatePost = (req, res, next) => {
    User.findByPk(req.params.id)
        .then(user=> {
            user.update({
                     firstName: req.body.firstName,
                     lastName: req.body.lastName,
                     email: req.body.email,
                     password: req.body.password
                 
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(count => {
                    res.redirect('/cab');
                });
        });
}


module.exports.updatePost = async (req, res, next) => {
     //var User = await User.findByPk(req.params.id);
    await User.update(
        {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
        },
        {
            where: {id: req.params.id}
        }
    )

    res.redirect('/cab1' );
}


module.exports.delete= async (req, res, next)=>{
    let id = req.params.id;
    let infoFromDb= await User.findByPk(id);
    if(infoFromDb!=null){
        await User.destroy({
            where: {id: id}
        });
res.redirect("/cab")
}

}
module.exports.home = (req, res , next)=>{
    res.render('home');
}

module.exports.page = (req, res , next)=>{
    res.render('pass');
}

module.exports.index = (req, res , next)=>{
    User.findAll().then(details=>{
        res.render('reg-index',{
            data:details
        });
    })
}
module.exports.end = (req, res, next)=>{
    res.render('end');
}
const Admin = require('../model/admin');


module.exports.ad = (req, res, next) => {
    res.render('admin');
}


module.exports.adminlogin = (req, res, next)=>{
    res.render('ad-login');
}
module.exports.adminlogout = (req, res, next)=>{
    req.session==null;
    res.redirect('/adminlogin')
}

module.exports.adminloginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    const adminFromDb = await Admin.findOne({
        where: {email: email, password: password}
        
    })
    
  
     if(adminFromDb == null){
        return res.render('ad-login', {message: 'No user with this email or password was found.'})
    }
    else{
    res .cookie('id',(adminFromDb.dataValues.id))
    req.session.adminId = adminFromDb.id;
    res.redirect('/admin');
}
}

module.exports.upage = (req, res, next)=>{
    res.render('upage');
}
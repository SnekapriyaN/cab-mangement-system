
const Ride = require('../model/ride');
const sequelize=require('../model/db')

module.exports.download = async(req, res, next) => {
  
    // let id = req.params.id
    // const result = await Ride.findByPk(id);
    sequelize.query('SELECT * FROM cab.rides ORDER BY id DESC LIMIT 1').then(data=>{data=data.pop();res.render("pdf",{data:data})})
    // res.render('pdf',result);
    // res.redirect('/end')
}
module.exports.card= (req, res, next) => {
    // Ride.findAll({where: {id: req.params.id}}).then(data=>{res.render('payment',{data:data});  })
   
    res.render('payment'); 
     
    }

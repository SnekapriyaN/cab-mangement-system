const Cab = require('../model/cab');
const Driver = require('../model/driver');

module.exports.cab = (req, res, next) => {
    res.render('cab');
}

module.exports.cabPost = (req, res, next) => {
    Cab.create({
            Cabno: req.body.cab,
            Cabmodel: req.body.model,
            Totalseating: req.body.cap,
            DriverId:req.session.driverId
        
        })
        .then(cabFromDb => {
            res.redirect("/end");
        })
}

module.exports.detail = (req, res , next)=>{
    Cab.findAll().then(details=>{
        res.render('cab-index',{
            data:details
        });
    })
}
// module.exports.delete= (req, res, next)=>{
//     let id = req.params.id;
//     console.log(req.params.id);
//     Cab.destroy({
//             where: {id: id}
//         }).then((next) => {
//             res.redirect("/detail")
//         })
        
// }

module.exports.delete= async (req, res, next)=>{
    let id = req.params.id;
    let infoFromDb= await Cab.findByPk(id);
    if(infoFromDb!=null){
        await Cab.destroy({
            where: {id: id}
        });
res.redirect("/detail")
}
}


module.exports.up = async (req, res, next)=>{
    Cab.findByPk(req.params.id)
    .then(infoFromDb=>{
        res.render('cab-update',{
            data:infoFromDb
        });
    });
}

module.exports.upPost = async (req, res, next) => {

    await Cab.update(
        {
            Cabno: req.body.cab,
            Cabmodel: req.body.model,
            Totalseating: req.body.cap,
       
        },
        {
            where: {id: req.params.id}
        }
    )
     res.redirect('/detail');
 }

//  module.exports.upPost = (req, res, next) => {
//     Cab.findByPk(req.params.id)
//         .then(cab=> {
//             cab.update({
//                 Cabno: req.body.cab,
//                 Cabmodel: req.body.model,
//                 Totalseating: req.body.cap,
                    
//                 }, {
//                     where: {
//                         id: req.params.id
//                     }
//                 })
//                 .then(count => {
//                     res.redirect('/up');
//                 });
//         });
// }

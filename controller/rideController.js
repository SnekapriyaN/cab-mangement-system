const Ride = require('../model/ride');
const sequelize= require('../model/db')



module.exports.ride = (req, res, next) => {
    res.render('ride');
}





module.exports.ridePost = (req, res, next) => {
    //console.log(req.session.id)
    Ride.create({
            Pickup: req.body.pickup,
            Drop: req.body.drop,
            Date: req.body.date,
            Time: req.body.time,
            UserId: req.session.userId 
        })
        .then(rideFromDb => {
            sequelize.query('SELECT * FROM cab.rides ORDER BY id DESC LIMIT 1').then(data=>{data=data.pop();res.redirect("/card/"+data[0].id);})
            
        })
}

module.exports.edit = async(req, res, next) => {
    Ride.findByPk(req.params.id)
        .then(rideFromDb => {
            res.render('ride-update', {
                data: rideFromDb
            });
        });
}

module.exports.editPost = (req, res, next) => {
    Ride.findByPk(req.params.id)
        .then(ride=> {
            ride.update({
                Pickup: req.body.pickup,
                Drop: req.body.drop,
                Date: req.body.date,
                Time: req.body.time
                   },
                 {
                    where: {
                        id: req.params.id
                    }
                })
                .then(count => {
                    res.redirect('/page');
                });
        });
}


module.exports.editPost = async (req, res, next) => {

   await Ride.update(
       {
        Pickup: req.body.pickup,
        Drop: req.body.drop,
        Date: req.body.date,
        Time: req.body.time
      
       },
       {
           where: {id: req.params.id}
       }
   )

   res.redirect('/index');
}

module.exports.index = (req, res , next)=>{
    Ride.findAll().then(details=>{
        res.render('ride-index',{
            data:details
        });
    })
}
module.exports.delete= async (req, res, next)=>{
    let id = req.params.id;
    let infoFromDb= await Ride.findByPk(id);
    if(infoFromDb!=null){
        await Ride.destroy({
            where: {id: id}
        });
res.redirect("/edit")
}
}

module.exports.download1 = (req, res, next) => {
   // console.log("line 15");
   let id;
   let cookieArray
    if(cookieArray!=null){
        for(let i = 0; i<cookieArray.length; i++){
            if(cookieArray[i].split("=")[0]=="id"){
                id =  cookieArray[i].split("=")[1]
            }
        }
        console.log("hey");
    }
}



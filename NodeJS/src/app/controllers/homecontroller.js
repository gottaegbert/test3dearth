const user = require('../models/user')
class homecontroller{

    index(req,res){
          res.render('home',{
          title: 'Home',
          style:'stylehome.css',
          style2:'responsivehome.css',
      });        
    }

    show(req,res){
    }

}

module.exports= new homecontroller;
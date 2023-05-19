const wallet = require('../models/wallet.js');

class wallet_controller{

    index(req,res){
          res.render('wallet/wallet',{
          title: 'Wallet',
          style: 'wallet.css',
          users:req.user,
        //   style2: 'responsivehome.css',
      });        
    }

    show(req,res){
        
    }

}

module.exports= new wallet_controller;
class messcontroller{

    index(req,res){
         res.render('mess',{
          title: 'Messages',
          script1:'scriptproduct.js',
          style:'mess.css',
          style2:'styleproduct.css',
          script1 : 'mess.js',
          users:req.user
      });
    }

}

module.exports= new messcontroller;
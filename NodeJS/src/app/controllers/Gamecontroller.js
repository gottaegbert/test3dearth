class Gamecontroller{

    index(req,res){
         res.render('Game',{
          title: 'Game',
          style:'styleproduct.css',
          style2:'queriesproduct.css',
          script1:'scriptproduct.js',
          script2:'jquery.waypoints.min.js',
          users:req.user
      });
    }

}

module.exports= new Gamecontroller;
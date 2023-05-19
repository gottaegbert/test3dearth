
class Aicontroller{

    index(req,res){
         res.render('Ai',{
          title: 'Ai',
          style:'styleproduct.css',
          style2:'queriesproduct.css',
          script1:'scriptproduct.js',
          script2:'jquery.waypoints.min.js',
          users:req.user
      });
    }

}

module.exports= new Aicontroller;
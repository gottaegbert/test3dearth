class createcontroller{

    index(req,res){
          res.render('create',{
                                        title: 'Create',
                                        style:'styleproduct.css',
                                        style2:'create.css',
                                        script2:'jquery.waypoints.min.js',
                                        script3:'scriptcreate.js',
                                        users:req.user
                                        })
    }


}

module.exports= new createcontroller;
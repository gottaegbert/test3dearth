class signupcontroller{

    index(req,res){
         res.render('signup',{
          title: 'Signup',
          style:'signup.css',
          style2:''
      });
    }

}

module.exports= new signupcontroller;
const user=require('./NodeJS/src/app/models/user')
class datausercontroller{

   async index(req,res,next){
         try{
            const email=req.body.email;
            const password=req.body.password;

            const useremail= await user.findOne({ email: email});
            if(useremail.password==password){
              if(useremail!=null)
              res.redirect('homepage');
              else throw new Error;
            }
         }catch(error){
           res.status(400).send("invalid")
         }
    }


}


module.exports= new datausercontroller;
const Product=require('../models/product')
class storecontroller{

    index(req,res,next){
        const formdata=req.body;
        const product= new Product(formdata);
        product.save()
            .then(()=> res.redirect('product'))
            .catch(error => {
                
            })
        }

    update(req,res,next){
        Product.updateOne({_id:req.params.id},req.body)
            .then(()=> res.redirect('../../me'))
            .catch(next);
        }   
        
    delete(req,res,next){
        console.log(123);
        Product.deleteOne({_id:req.params.id})
            .then(()=> res.redirect('../../me'))
            .catch(next);
    }      
}

module.exports= new storecontroller;
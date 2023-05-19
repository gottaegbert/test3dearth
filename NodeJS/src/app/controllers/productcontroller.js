const product=require('../models/product')
const {mongooseToObject}= require('../../util/mongoose')
class productcontroller{
    index(req,res,next){
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        res.setHeader('Access-Control-Allow-Credentials', true);

        product.find({})
            .then(products=>{
                products=products.map(product => product.toObject() )
                products.reverse();
                res.send(products.reverse());
                })
            .catch(next);
    }
    edit(req,res, next){
        product.findById(req.params.id)
            .then(Product=>res.render('edit',{
                                        title: 'Edit',
                                        style:'../../../css/styleproduct.css',
                                        style2:'../../../css/edit.css',
                                        script1:'../../../css/scriptproduct.js',
                                        script2:'jquery.waypoints.min.js',
                                        Product:mongooseToObject(Product),
                                        users : req.user
                                        }))   
    }
    }

module.exports= new productcontroller;
// const Project = require('../models/create_prj');
// const Faqs = require('../models/question');
// const Storys = require('../models/story');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

const create_prj = require('../models/create_prj');
let create_prj_db;
class post_project_created_controller{
    
    async index(req,res,next){

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        res.setHeader('Access-Control-Allow-Credentials', true);

        await create_prj.find()
        .then(prj => {
            prj = mutipleMongooseToObject(prj);
            create_prj_db = prj.reverse();
        })
        .catch(next);

        res.send(create_prj_db);

        // res.render('profile/profile', {
        //     title : 'profile',
        //     style : 'swiper-bundle.min.css',
        //     style2 : 'profile.css',
        //     script1 : 'swiper-bundle.min.js',
        //     script3 : 'profile.js',
        //     create_prj : create_prj_db,
        //     users:req.user
        // });
    }

}

module.exports= new post_project_created_controller;
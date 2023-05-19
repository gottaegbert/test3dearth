const create_prj = require('../models/create_prj');
const Project_comment = require('../models/project_comment');
const faqs = require('../models/question');
const story = require('../models/story');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

var prj_cmt_db, project_db, faq_db ,str_db, slug_val ,API_project=[];

// const checkSlugExist = async (req, res) => {
//     const { slug } = req.body;
//     const result = await userService.checkEmailExist(email);
//     return response(res, result);
// }

// async updateUser(req, res, next) {
//     try {
//         const userId = req.userId;
//         const { userName, email } = req.body;
//         const result = await userService.updateUser(userId,_.pickBy({ userName, email }, _.identity));
//         res.json(result);
//     } catch (error) {next(error)}
// }

class create_project_controller{
    async show_detail(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        res.setHeader('Access-Control-Allow-Credentials', true);

        await Project_comment.find({slug : req.params.slug}) 
            .then(prj_cmt => {
                prj_cmt = mutipleMongooseToObject(prj_cmt);
                prj_cmt_db = prj_cmt.reverse();
            })
            .catch(next);

        await faqs.find({slug : req.params.slug})
            .then(faq => {
                faq = mutipleMongooseToObject(faq);
                faq_db = faq;
            })
            .catch(next);
            
        await story.find({slug : req.params.slug})
        .then(str => {
            str = mutipleMongooseToObject(str);
            str_db = str;
        })
        .catch(next);
        

        create_prj.findOne({slug : req.params.slug})
            .then(project => {
                project_db = mongooseToObject(project);
                slug_val = project.main_title;

                res.send([mongooseToObject(project),str_db,faq_db,prj_cmt_db]);

                // res.render('create_project/create_project', {
                //     project : mongooseToObject(project),
                //     prj_cmt : prj_cmt_db,
                //     question : faq_db,
                //     story : str_db,
                //     title : 'create_project',
                //     style : '../../css/create_project.css',
                //     script1 : '../../js/create_project.js',
                //     script3 : '../../js/post_project_created.js',
                //     users: req.user
                // });
            })
            .catch(next)
    }

    index(req,res,next){
        Project_comment.find({}) 
            .then(prj_cmt => {
                prj_cmt = mutipleMongooseToObject(prj_cmt);
                prj_cmt_db = prj_cmt;
            })
            .catch(next);

        create_prj.find({})
            .then(project => {
                project = mutipleMongooseToObject(project);
                project_db = project;
            })
            .catch(next);

        faqs.find({})
            .then(faq => {
                faq = mutipleMongooseToObject(faq);
                faq_db = faq;
            })
            .catch(next);
        
        res.render('create_project/create_project', {
            prj_cmt : prj_cmt_db,
            project : project_db,
            question : faq_db,
            title : 'create_project',
            style : 'create_project.css',
            script3 : '../../js/post_project_created.js',
        });

    }

    //[POST] /create_project/store
    save_comment(req , res ,next) {

        const temp = req.body;
        //object len 4 nha
       
        // res.json(req.user);
        // slug_present = req.body.main_title;
        const project_comment = new Project_comment(temp);

        project_comment.save();
    }
}

module.exports= new create_project_controller;
const express=require('express');
const router=express.Router();

const post_project_created_controller=require('../app/controllers/post_project_created_controller');

// productcontroller.index
router.get('/create' ,post_project_created_controller.create);
router.post('/story' ,post_project_created_controller.story);
router.post('/faq' , post_project_created_controller.faq);
router.post('/store' ,post_project_created_controller.store);
router.get('/', post_project_created_controller.index);

module.exports = router;

















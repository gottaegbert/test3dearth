const express=require('express');
const router=express.Router();

const create_project_controller=require('../app/controllers/create_project_controller');

router.post('/save_comment', create_project_controller.save_comment);
router.get('/:slug',create_project_controller.show_detail);
router.get('/',create_project_controller.index);


module.exports = router;
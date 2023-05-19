const express=require('express');
const router=express.Router();

const profile_controller=require('../app/controllers/profile_controller');

// productcontroller.index
router.get('/', profile_controller.index);

module.exports = router;
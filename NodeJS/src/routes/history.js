const express=require('express');
const router=express.Router();
const history_controller = require('../app/controllers/history_controller')

// productcontroller.index
router.get('/' , history_controller.index);


module.exports = router;

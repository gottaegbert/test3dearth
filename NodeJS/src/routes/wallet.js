const express=require('express');
const router=express.Router();

const wallet_controller=require('../app/controllers/wallet_controller.js');

// productcontroller.index
router.get('/', wallet_controller.index);

module.exports = router;
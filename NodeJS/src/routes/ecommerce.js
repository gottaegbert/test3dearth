const express=require('express');
const router=express.Router();

const ecommercecontroller=require('../app/controllers/ecommercecontroller');

// productcontroller.index
router.get('/',ecommercecontroller.index);



module.exports = router;
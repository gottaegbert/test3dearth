const express=require('express');
const router=express.Router();

const productcontroller=require('../app/controllers/productcontroller');

// productcontroller.index
router.get('/',productcontroller.index);
router.get('/:id/edit',productcontroller.edit);

module.exports = router;
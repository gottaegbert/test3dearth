const express=require('express');
const router=express.Router();

const detailcontroller=require('../app/controllers/detailcontroller');

// productcontroller.index
router.get('/',detailcontroller.index);

module.exports = router;
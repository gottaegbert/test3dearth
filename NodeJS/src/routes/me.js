const express=require('express');
const router=express.Router();

const mecontroller=require('../app/controllers/mecontroller');

// productcontroller.index
router.get('/',mecontroller.index);


module.exports = router;
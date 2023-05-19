const express=require('express');
const router=express.Router();

const Aicontroller=require('../app/controllers/Aicontroller');

// productcontroller.index
router.get('/',Aicontroller.index);



module.exports = router;
const express=require('express');
const router=express.Router();

const Appcontroller=require('../app/controllers/Appcontroller');

// productcontroller.index
router.get('/',Appcontroller.index);



module.exports = router;
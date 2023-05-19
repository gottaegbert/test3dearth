const express=require('express');
const router=express.Router();

const logincontroller=require('../app/controllers/logincontroller');

// productcontroller.index

router.get('/',logincontroller.index);



module.exports = router;
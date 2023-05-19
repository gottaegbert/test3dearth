const express=require('express');
const router=express.Router();

const signupcontroller=require('../app/controllers/signupcontroller');

// productcontroller.index

router.get('/',signupcontroller.index);



module.exports = router;
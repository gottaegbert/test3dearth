const express=require('express');
const router=express.Router();

const createcontroller=require('../app/controllers/createcontroller');

// productcontroller.index

router.get('/',createcontroller.index);

module.exports = router;
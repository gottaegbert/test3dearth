const express=require('express');
const router=express.Router();

const messcontroller=require('../app/controllers/messcontroller');

// productcontroller.index

router.get('/',messcontroller.index);



module.exports = router;
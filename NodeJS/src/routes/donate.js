const express=require('express');
const router=express.Router();

const donatecontroller=require('../app/controllers/donatecontroller');

// productcontroller.index

router.get('/detailprod',donatecontroller.show);
router.get('/',donatecontroller.index);



module.exports = router;
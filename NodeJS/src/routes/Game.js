const express=require('express');
const router=express.Router();

const Gamecontroller=require('../app/controllers/Gamecontroller');

// productcontroller.index
router.get('/',Gamecontroller.index);



module.exports = router;
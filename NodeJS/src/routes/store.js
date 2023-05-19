const express=require('express');
const router=express.Router();

const storecontroller=require('../app/controllers/storecontroller');

// productcontroller.index

router.post('/',storecontroller.index);
router.put('/:id',storecontroller.update);
router.delete('/:id',storecontroller.delete);
module.exports = router;
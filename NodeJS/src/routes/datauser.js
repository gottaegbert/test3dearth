const express=require('express');
const passport= require("passport");
const initPassportLocal = require("../app/auth/passportLocal");
const router=express.Router();

const datausercontroller=require('../../../datausercontroller');

// // productcontroller.index
// initPassportLocal();

router.post('/',passport.authenticate('local',{
    failureRedirect: "/login",
    successRedirect: "/homepage"
  }));



module.exports = router;
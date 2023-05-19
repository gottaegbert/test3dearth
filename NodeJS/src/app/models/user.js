const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  email : {type:String,required:true},
  password : {type:String,required:true},
  name_author : {type:String,required:true},
  img_author : {type:String,required:true},
});
module.exports = mongoose.model('user',user);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
  name : {type:String},
  name_author : {type:String},
  img_author : {type:String},
  infor : {type:String},
  img1 : {type:String},
  img2 : {type:String},
  img3 : {type:String},
  video : {type:String},
  slug : {type:String},
  createdAt:{type:Date,default:Date.now},
  updateAt: {type:Date,default:Date.now}
});
module.exports = mongoose.model('product',product);
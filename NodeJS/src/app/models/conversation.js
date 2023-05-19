const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversation = new Schema({
    members:{
        type:Array,
    },
    createdAt:{type:Date,default:Date.now},
    updateAt: {type:Date,default:Date.now}
  });
module.exports = mongoose.model('conversation',conversation);
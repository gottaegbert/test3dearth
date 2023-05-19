const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const message = new Schema(
  {
    conversationId:{
        type:String
    },
    sender:{
        type:String
    },
    text:{
        type:String
    },
    createdAt:{type:Date,default:Date.now},
    updateAt: {type:Date,default:Date.now}
  },
  {timestamps:true}
);
module.exports = mongoose.model('message',message);
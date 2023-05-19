const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const project = new Schema({
    img_big: {type:String},
    img1 : {type:String},
    img2 : {type:String},
    img3 : {type:String},
    img4 : {type:String},
    img5 : {type:String},
    img6 : {type:String},
    main_title : {type:String},
    main_content : {type:String},
    title_money_pledged: {type:String},
    slug: { type: String, slug: "main_title" , unique : true},
    createdAt:{type:Date,default:Date.now},
    updateAt: {type:Date,default:Date.now},
})

module.exports = mongoose.model('project',project);























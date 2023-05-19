const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const story = new Schema({
    image1 : {type:String},
    image2 : {type:String},
    image3 : {type:String},
    image4 : {type:String},
    image5 : {type:String},
    image6 : {type:String},
    image7 : {type:String},
    title1 : {type:String},
    title2 : {type:String},
    title3 : {type:String},
    title4 : {type:String},
    title5 : {type:String},
    title6 : {type:String},
    title7 : {type:String},
    content1 : {type:String},
    content2 : {type:String},
    content3 : {type:String},
    content4 : {type:String},
    content5 : {type:String},
    content6 : {type:String},
    content7 : {type:String},
    slug_temp : {type:String},
    slug: { type: String, slug: "slug_temp"},
})

module.exports = mongoose.model('storys', story);
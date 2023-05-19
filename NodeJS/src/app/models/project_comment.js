const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const project_comment = new Schema({
    avatar : {type:String},
    name : {type:String},
    comment : {type:String},
    slug_temp : {type:String},
    slug: { type: String, slug: "slug_temp"},
})

module.exports = mongoose.model('project_comment',project_comment);

const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const faq = new Schema({
    //lấy slug của create_prj , gán trước truyền sau
    question : {type:String},
    slug_temp : {type:String},
    slug: { type: String, slug: "slug_temp"},
})

module.exports = mongoose.model('faqs', faq);























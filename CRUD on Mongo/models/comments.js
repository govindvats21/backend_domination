
const mongoose = require("mongoose");



const commentsSchema = mongoose.Schema({
    title:String,
    content:String,
    author:String,
    comments:[{user:String, text:String}],
    metadata:[{views:Number, likes:Number}]

})

module.exports = mongoose.model("comment", commentsSchema);

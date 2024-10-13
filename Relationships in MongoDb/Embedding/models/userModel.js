const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/relationship");
// Embedding
const postSchema = mongoose.Schema({
    content: String
})

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    posts:[postSchema]
})



module.exports = mongoose.model("user", userSchema)
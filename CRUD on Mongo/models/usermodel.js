const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shop");

const productSchema = mongoose.Schema({
    username:String,
    name:String,
    email:String,
    password:String,
    age:String,
    price:Number,
    isFeatured:Boolean
})
 module.exports = mongoose.model("product", productSchema);



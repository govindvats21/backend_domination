const mongoose = require("mongoose");

//  Referencing 


const postSchema = mongoose.Schema({

users:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
},
content:String
   
})



module.exports = mongoose.model("Post", postSchema)
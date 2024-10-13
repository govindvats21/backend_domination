const express = require('express');
const app = express();
const userModel = require('./models/usermodel');
const postModel = require('./models/postModel');
const usermodel = require('./models/usermodel');
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.post("/create", async(req,res)=>{
    const createdUser = await userModel.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    res.send(createdUser)
    })

    app.get("/create/post", async(req,res)=>{
    const user = await userModel.findOne({username:"gaurav"})
const postcreated = await postModel.create({
    user:user._id,
    content:"hello"
})
 user.posts.push(postcreated._id)
 await user.save();
res.send({postcreated,user})
        })

        app.get("/look", async(req,res)=> {
 const match = await userModel.aggregate([
    {
$match:{
username:"gaurav"
}
    },
   {
    $lookup:{
        from:"posts",
        localField:"posts",
        foreignField:"_id",
        as:"hkaehka"
        }
   }
])
res.send(match)
        })

app.listen(3000)
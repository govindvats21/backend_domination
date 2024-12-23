const express = require("express");
const app = express();
const userModel = require("./models/userModel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create", async(req,res)=>{
const createdUser = await userModel.create({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
})
res.send(createdUser)
})


app.post("/:username/create/post", async(req,res)=> {
   const user = await userModel.findOne({username:req.body.username});
user.posts.push({content:"jfksef"})
user.save()
res.send(user)


})
app.listen(3000)
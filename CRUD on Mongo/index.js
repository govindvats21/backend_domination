const express = require('express');
const app = express();
const products = require('./models/usermodel');
const comments = require('./models/comments');

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));


app.get("/find", async(req,res)=> {
    // logical operators 
    // AND
    // All conditions must be true
    // const users = await products.find({$and: [{price:{$gt:100}}, {"name": "Diamond Ring"}]});
    // OR 
    // const users = await products.find({$or: [{price:{$gt:100000000}}, {"name": "Diamond Ring"}]});
    // NOT
    // const users = await products.find({price:{$not:{$eq:100}}});
// NOR
// const users = await products.find( {$nor: [ {'price': {$eq: 100}}, {'name':'Nobook Collection'} ]} )

// const users = await comments.find({"comments.user": {$all: ['Alice','Vinod']}})

// const users = await comments.find({comments: {$elemMatch:{'user':'Alice' , 'text':'Awesome article!'}}})

// update
// const users = await products.find({ _id: ObjectId("12345")})
    res.send(users)
});


// app.get("/find1", async(req,res)=> {

//     const user1 = await comments.find({comments: {$elemMatch:{'user':'Alice' , 'text':'Awesome article!'}}})
//     res.send(user1)

// })
app.listen(3000);


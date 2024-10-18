const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


// Bcrypt

app.post("/encrypt", async(req,res)=> {
let salt = await bcrypt.genSalt(); // genSalt = kitne deep level salt genrate karna hai 
let hashed = await bcrypt.hash("PlanePassword", salt);
res.send(hashed)
})

app.post("/decrypt", async(req,res)=> {
    let result = await bcrypt.compare("PlanePassword", "$2b$10$cS950SE6BTvTUv5e5pQui.Ep/FfxiiZvwHN054G5xtbb1ZvaPrK/S");
    res.send(result)
    })


    // JWT 

    app.get("/tokenmaker", (req,res)=> {
let token = jwt.sign({name:"govind"}, "secret key")
res.send(token)
    })

    app.get("/datafetch", (req,res)=> {
        let data = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ292aW5kIiwiaWF0IjoxNzI5MDEyMDA0fQ.f8Va-ohP4RhCnKvFSl3qNEAgGSG4m2znAXI94O72vLo",
            "secret key"
        )
res.send(data)
        
            })
app.listen(3000);
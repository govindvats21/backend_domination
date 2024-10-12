
const express = require('express');
const app = express();


 // Cookie-parser Middleware
 const cookieParser = require('cookie-parser')
 app.use(cookieParser())

// Set Cookie Browser
 app.get("/", (req, res, next)=> {
 res.cookie("banned", "true")
 res.send("banned")
 })

 // read cookie in other route
 app.get("/check", (req, res, next)=> {
 console.log(req.cookies.banned);
 res.send("check")
 })
 

 // Morgan Middleware
 const morgan = require('morgan')

 app.use(morgan("common"))

 app.get("/morgan", (req, res, next)=> {
 res.send("hello")
 })

app.listen(3000)

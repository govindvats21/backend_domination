
 const express = require('express')
 const app = express();

 const expressSession = require('express-session')
 const flash = require("connect-flash")

 app.use(expressSession({
 resave: false,
 saveUninitialized: false,
 secret: "any thing you want"
 }));

app.use(flash());


// app.get("/", (req, res, next)=> {
// req.flash("error", "invalid")                   // iss rout mein kuch data save kar paye
// res.redirect("/error")
// })

//  app.get("/error", (req, res, next)=> {
//  let msg = req.flash()                         // or dusre rout mein usee use kar paye
//  res.send(msg)
//  })

 app.listen(3000)

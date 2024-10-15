const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index-router')

require('dotenv').config();
const mongoose = require('./config/mongoose-connection')
const config = require('config')

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use("/", indexRouter);

// app.listen(process.env.PORT || 3000)  // server start using   .env
app.listen(config.get("PORT"))            // server start using   config

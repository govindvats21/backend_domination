const mongoose = require("mongoose");

mongoose.connect(`${process.env.mongo_URL}`);
const db = mongoose.connection;

db.once("open", ()=> {
    console.log("connected to database")
})

db.on('error', ()=> console.error.bind(console, 'connection error:'));
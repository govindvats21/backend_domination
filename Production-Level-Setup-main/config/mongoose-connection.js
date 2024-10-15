const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGODB_URI}/testingDb`);

let db = mongoose.connection;

db.once("open", ()=> {
    console.log("connected to the database")
})

module.exports  = db;
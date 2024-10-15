const randomFunction = require('../utils/random') 

module.exports.indexController = function(req,res){
       // res.send(req.data);
console.log(randomFunction());
res.render("index")
    }
    

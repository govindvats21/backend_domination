const userModel = require("../models/user-model")
const jwt = require("jsonwebtoken");

module.exports.protect = async(req,res,next)=> {

try {
    if(req.cookies.token){
        const data = jwt.verify(req.cookies.token, process.env.secret_KEY)
       const user = await userModel.findOne({email:data.email}).select("-password")
       req.data = user;
    next();
    }
    else {
        return res.status(401).json({ message: "Invalid token" });
    }
} catch (error) {
     res.status(401).json({ message: "Invalid token" });
}

}
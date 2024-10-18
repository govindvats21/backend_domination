const userModel = require("../models/user-model")
const bycrpt = require("bcrypt");
const generateToken = require("../utils/generate-token")


module.exports.register = async(req,res)=> {

const { name, email, password } = req.body;

try {
    let user = await userModel.findOne({email:"email"});

if(user){
 return res.status(400).json({ message: "User already exists" });
}

let salt = await bycrpt.genSalt();
let hashPassword = await bycrpt.hash(password,salt)

    user = await userModel.create({
        name,
        email,
        password:hashPassword
    })

    let token = generateToken({email});
    // console.log(token)
 res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 30 * 24 * 60 * 60,
 })

 res.status(201).json({ message: "User registered successfully" });

} catch (error) {
    res.status(500).json({ message: error.message });
}
};

module.exports.login = async(req,res)=> {
    const { email, password} = req.body;
  
    try {
        
        let user = await userModel.findOne({email});

        if(!user){
            return res.status(500).send( "Invalid email or password" );
        }
        
        let results = await bycrpt.compare(password,user.password)
        
        if(results){
            let token = generateToken({email});
            // console.log(token)
         res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60,
         })
         res.status(201).send(user);
        } else{
             res.send("or password" );
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports.logout = async(req,res)=> {

    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        maxAge: 30 * 24 * 60 * 60,
     })
     res.status(201).send("Logged out!");
}

module.exports.getprofile =(req,res)=> {
res.send("aap login ho")
console.log(req.data)
}
const jwt = require("jsonwebtoken");

const generateToken = (data)=> {
  return jwt.sign(data, `${process.env.secret_KEY}`)
}
module.exports = generateToken;
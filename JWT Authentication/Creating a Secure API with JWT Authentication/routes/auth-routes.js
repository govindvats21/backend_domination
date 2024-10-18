const express = require("express");
const router = express.Router();
const {register,login,logout,getprofile} = require("../controllers/auth-controller")
const {protect} = require("../middlewares/protect")


router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/getprofile", protect, getprofile);

module.exports = router;
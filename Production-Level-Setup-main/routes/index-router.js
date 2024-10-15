const express = require('express');
const router = express.Router();
const {indexController} = require('../controllers/index-controller');
const isLoggedIn = require('../middlewares/isLoggedIn');
router.get("/", isLoggedIn,indexController);

module.exports = router;

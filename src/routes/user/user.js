const mysql = require("mysql2")
const express = require("express");
const router = express.Router();
const query = require("./user.query")

router.post ('/register', query.registerCtrl);

module.exports = router;
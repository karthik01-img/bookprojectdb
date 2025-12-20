var express = require("express")
const createnewuser = require("../controllers/user-controller")

var router = express.Router()


router.post("/register",createnewuser)

module.exports = router
var express = require("express")
const {createnewuser,loginuser} = require("../controllers/user-controller")

var router = express.Router()


router.post("/register",createnewuser)

router.post("/login",loginuser)

module.exports = router
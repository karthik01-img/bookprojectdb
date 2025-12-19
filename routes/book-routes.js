var express = require("express")
const { createnewbook, getallbooks, getsinglebook, updatebooks, deletingbook } = require("../controllers/book-controllers")

var router = express.Router()

router.post("/add",createnewbook)

router.get("/allbooks",getallbooks)

router.get("/allbooks/:id",getsinglebook)

router.put("/update/:id",updatebooks)

router.delete("/delete/:id",deletingbook)

module.exports = router
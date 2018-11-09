var express = require("express")
var router = express.Router()
var path = require("path")

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" })
})

router.get("/index", function(req, res, next) {
    //res.send(path.join(__dirname + "/../views/index.html"))
    res.sendFile(path.join(__dirname + "/../views/index.html"))
})

module.exports = router

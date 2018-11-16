var express = require("express")
var router = express.Router()
// https://github.com/dcodeIO/bcrypt.js
var bcrypt = require("bcryptjs")

// https://express-validator.github.io/docs/
const { check, validationResult } = require("express-validator/check")
const { sanitizeBody } = require("express-validator/filter")

var User = require("../models/user")

// authenticated page; check if session exists
router.get("/", (req, res, next) => {
    var user = req.session.user
    if (user)
        res.render("./private/dashboard", {
            title: "All Students Grades",
            user: user
        })
    else res.redirect("/grade/login")
})

// authenticated page; check if session exists
router.get("/dashboard", (req, res, next) => {
    var user = req.session.user
    if (user)
        res.render("dashboard", { title: "All Students Grades", user: user })
    else res.redirect("/grade/login") //url
})

router.get("/login", function(req, res, next) {
    res.render("./private/login", { title: "Log in" }) // pug template
})

router.post("/login", function(req, res, next) {
    var email = req.body.email
    var password = req.body.password
    User.findOne({ email: email }, function(err, user) {
        if (err) {
            console.log(err)
            throw err
        }
        var validUser = false
        if (user) {
            // add user to session
            console.log(user)
            var hash = user.password
            validUser = bcrypt.compareSync(password, hash)
        }
        if (validUser) {
            req.session.user = user
            res.redirect("/grade")
        } else {
            let context = {
                title: "Log in",
                error: "Invalid username and/or password"
            }
            res.render("./private/login", context)
        }
    })
})

router.get("/register", function(req, res, next) {
    res.render("./private/register", { title: "Register" })
})

router.post(
    "/register",
    [
        // Validate fields.
        check("firstName", "First name must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        check("lastName", "Last name must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        check("email", "Email must not be empty.")
            .isLength({ min: 1 })
            .trim(),
        // email must be valid
        check("email", "Not a valid email.")
            .isEmail()
            .trim(),
        check("password", "Password must be at leat 5 chars long")
            .isLength({ min: 5 })
            .trim(),
        check("password1", "two passwords do not match")
            .exists()
            .custom((value, { req }) => value === req.body.password),
        // Sanitize fields.
        sanitizeBody("*")
            .trim()
            .escape()
    ],
    function(req, res, next) {
        // extract the validation errors from a request
        const errors = validationResult(req)
        // check if there are errors
        if (!errors.isEmpty()) {
            let context = {
                title: "Register",
                errors: errors.array()
            }
            res.render("./private/register", context)
        } else {
            // create a user document and insert into mongodb collection
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            })
            console.log(user)
            user.save(err => {
                if (err) {
                    return next(err)
                }
                // successful - redirect to dashboard
                // add user to session
                req.session.user = user
                res.redirect("/grade")
            })
        }
    }
)

router.get("/logout", (req, res, next) => {
    var user = req.session.user
    if (user) {
        req.session.destroy(function() {
            console.log(`user: ${user.email} logged out...`)
        })
    }
    res.redirect("/")
})

/* GET users listing. */
router.get("/profile", function(req, res, next) {
    user = req.session.user
    if (user) res.render("./private/profile", { title: "Profile", user: user })
    else res.redirect("/grade/login")
})

router.post("/profile", function(req, res, next) {
    var user = req.session.user
    if (!user) res.redirect("/grade/login")

    var conditions = { _id: user._id }
    var update = {
        email: req.body.email,
        firstName: req.body.fname,
        lastName: req.body.lname
    }
    var options = {}
    User.update(conditions, update, options, (err, numAffected) => {
        if (err) throw err
        User.findById(user._id, function(err, updateduser) {
            if (err) throw err
            req.session.user = updateduser
            //console.log(updateduser)
            res.render("profile", {
                title: "Profile",
                user: updateduser,
                msg: "Profile updated successfully!"
            })
        })
    })
})

module.exports = router

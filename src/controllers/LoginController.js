const passport = require("passport");

class LoginController {
    static async index(req, res) {
        return res.render("pages/login.html")
    }
    static async login(req, res, next) {
        try {
            passport.authenticate("local", {
                successRedirect: "/",
                failureRedirect: "/login",
                failureFlash: true
            })(req, res, next)
            return res.json({})
        } catch (error) {
            return res.json(error)

        }
    }
}

module.exports = { LoginController }
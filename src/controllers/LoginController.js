class LoginController {
    static async index(req, res) { 
        return res.render("pages/login.html")
    }
}

module.exports = { LoginController }
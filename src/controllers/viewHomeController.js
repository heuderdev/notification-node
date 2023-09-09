const { NotificacaoDatabase } = require("../database/functions/NotificacaoDatabase");

class viewHomeController {
    static async index(req, res) {
        try {
            const notifications = await NotificacaoDatabase.ListAll()
            console.log(notifications);
            return res.render("pages/index.html", { notifications });
        } catch (error) {
            return res.json(error)
        }
    }
}

module.exports = { viewHomeController }
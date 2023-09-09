const { HorariosDatabase } = require("../database/functions/HorariosDatabase");

class ViewHorariosController {
  static async index(req, res) {
    const horarios = await HorariosDatabase.list();
    return res.render("pages/horarios.html", { horarios });
  }
}

module.exports = { ViewHorariosController };

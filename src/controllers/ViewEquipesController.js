const { EquipesDatabase } = require("../database/functions/EquipesDatabase");

class ViewEquipesController {
  static async index(req, res) {
    const equipes = await EquipesDatabase.list();
    res.render("pages/equipes.html", { equipes });
  }
}

module.exports = { ViewEquipesController };

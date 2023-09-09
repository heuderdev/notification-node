const { EquipesDatabase } = require("../database/functions/EquipesDatabase");
const {
  FuncionariosDatabase,
} = require("../database/functions/FuncionariosDatabase");

class ViewFuncionariosController {
  static async index(req, res) {
    const equipes = await EquipesDatabase.list();
    const funcionarios = await FuncionariosDatabase.list();
    res.render("pages/funcionarios.html", { equipes, funcionarios });
  }
}

module.exports = { ViewFuncionariosController };

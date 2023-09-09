const {
  FuncionariosDatabase,
} = require("../database/functions/FuncionariosDatabase");
const { TarefasDatabase } = require("../database/functions/TarefasDatabase");

class ViewTarefasColaboradoresController {
  static async index(req, res) {
    const contributions = await FuncionariosDatabase.list();
    const tasks = await TarefasDatabase.list();
    return res.render("pages/tarefas-colaboradores", { contributions, tasks });
  }
}

module.exports = { ViewTarefasColaboradoresController };

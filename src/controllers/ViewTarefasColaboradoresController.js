const {
  FuncionariosDatabase,
} = require("../database/functions/FuncionariosDatabase");
const { TarefasColaboradoresDatabase } = require("../database/functions/TarefasColaboradoresDatabase");
const { TarefasDatabase } = require("../database/functions/TarefasDatabase");

class ViewTarefasColaboradoresController {
  static async index(req, res) {
    const contributions = await FuncionariosDatabase.list();
    const tasks = await TarefasDatabase.list();
    const contributions_tasks = await TarefasColaboradoresDatabase.list()
    return res.render("pages/tarefas-colaboradores", { contributions, tasks, contributions_tasks });
  }
}

module.exports = { ViewTarefasColaboradoresController };

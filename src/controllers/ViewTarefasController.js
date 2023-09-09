const { TarefasDatabase } = require("../database/functions/TarefasDatabase");

class ViewTarefasController {
  static async index(req, res) {
    const tasks = await TarefasDatabase.list();
    return res.render("pages/tarefas", { tasks });
  }
}

module.exports = { ViewTarefasController };

const { HorariosDatabase } = require("../database/functions/HorariosDatabase");
const { TarefasDatabase } = require("../database/functions/TarefasDatabase");

class ViewTarefasHorariosController {
  static async index(req, res) {
    const tasks = await TarefasDatabase.list();
    const horarios = await HorariosDatabase.list();
    return res.render("pages/tarefas-horarios.html", { tasks, horarios });
  }
}

module.exports = { ViewTarefasHorariosController };

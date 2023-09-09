const { HorariosDatabase } = require("../database/functions/HorariosDatabase");
const { TarefasDatabase } = require("../database/functions/TarefasDatabase");
const { TarefasHorariosDatabase } = require("../database/functions/TarefasHorariosDatabase");

class ViewTarefasHorariosController {
  static async index(req, res) {
    const tasks = await TarefasDatabase.list();
    const horarios = await HorariosDatabase.list();
    const schedules_tasks = await TarefasHorariosDatabase.list()
    return res.render("pages/tarefas-horarios.html", { tasks, horarios, schedules_tasks });
  }
}

module.exports = { ViewTarefasHorariosController };

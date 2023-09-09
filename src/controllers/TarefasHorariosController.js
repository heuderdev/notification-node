const {
  TarefasHorariosDatabase,
} = require("../database/functions/TarefasHorariosDatabase");

class TarefasHorariosController {
  static async create(req, res) {
    try {
      const { task_id, schedule_id } = req.body;
      console.log(task_id, schedule_id);
      const content = await TarefasHorariosDatabase.create(
        Number(task_id),
        Number(schedule_id)
      );
      return res.json(content);
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = { TarefasHorariosController };

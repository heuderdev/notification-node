const {
  TarefasColaboradoresDatabase,
} = require("../database/functions/TarefasColaboradoresDatabase");

class TarefasColaboradoresController {
  static async create(req, res) {
    try {
      const { contributor_id, task_id } = req.body;
      console.log(contributor_id, task_id);
      const content = await TarefasColaboradoresDatabase.create(
        Number(contributor_id),
        Number(task_id)
      );
      return res.json(content);
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = { TarefasColaboradoresController };

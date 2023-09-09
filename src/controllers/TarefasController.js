const { TarefasDatabase } = require("../database/functions/TarefasDatabase");

class TarefasController {
  static async create(req, res) {
    try {
      const { name, description } = req.body;
      const tarefas = await TarefasDatabase.create(name, description);
      return res.json(tarefas);
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = { TarefasController };

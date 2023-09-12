const { EquipesDatabase } = require("../database/functions/EquipesDatabase");

class EquipesController {
  static async create(req, res) {
    const { name, description } = req.body;
    const content = await EquipesDatabase.create(name, description);
    return res.json(content);
  }

  static async update(req, res) {
    const { id, situacao } = req.body;
    let convert_situacao = Number(situacao) == 1 ? 0 : 1;
    try {
      const content = await EquipesDatabase.update(id, convert_situacao);
      return res.json(content);
    } catch (error) {}
    return res.json(convert_situacao);
  }
}

module.exports = { EquipesController };

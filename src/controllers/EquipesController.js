const { EquipesDatabase } = require("../database/functions/EquipesDatabase");

class EquipesController {
  static async create(req, res) {
    const { name, description } = req.body;
    const content = await EquipesDatabase.create(name, description);
    return res.json(content);
  }
}

module.exports = { EquipesController };

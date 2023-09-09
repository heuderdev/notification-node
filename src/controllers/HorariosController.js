const { HorariosDatabase } = require("../database/functions/HorariosDatabase");

class HorariosController {
  static async create(req, res) {
    try {
      const { time } = req.body;
      const times = await HorariosDatabase.create(time);
      return res.json(times);
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = { HorariosController };

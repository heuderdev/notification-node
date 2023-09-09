const {
  FuncionariosDatabase,
} = require("../database/functions/FuncionariosDatabase");

class FuncionariosController {
  static async create(req, res) {
    try {
      const { shift_id, name, phone, email } = req.body;
      console.log(shift_id, name, phone, email);
      const funcionarios = await FuncionariosDatabase.create(
        shift_id,
        name,
        phone,
        email
      );

      return res.json(funcionarios);
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = { FuncionariosController };

const { poll } = require("../connection");

class FuncionariosDatabase {
  static async list() {
    try {
      const [contributions] = await poll.query("select * from contributions");
      return contributions;
    } catch (error) {
      return error;
    }
  }

  static async create(shift_id, name, phone, email) {
    try {
      const [contributions] = await poll.query(
        "INSERT INTO contributions (shift_id,name,phone,email) VALUES (?,?,?,?)",
        [shift_id, name, phone, email]
      );
      return contributions;
    } catch (error) {
      return error;
    }
  }
}

module.exports = { FuncionariosDatabase };

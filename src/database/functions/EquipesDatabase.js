const { poll } = require("../connection");

class EquipesDatabase {
  static async create(name, description) {
    try {
      const [shifts] = await poll.query(
        "INSERT INTO shifts (name,description) VALUES (?,?)",
        [name, description]
      );
      return shifts;
    } catch (error) {
      return error;
    }
  }

  static async list() {
    try {
      const [shifts] = await poll.query("SELECT * FROM shifts ");
      return shifts;
    } catch (error) {
      return error;
    }
  }

  static async update(id, is_active) {
    try {
      const [shifts] = await poll.query(
        "UPDATE shifts SET is_active=? WHERE id=?",
        [is_active, id]
      );
      return shifts;
    } catch (error) {
      return error;
    }
  }
}

module.exports = { EquipesDatabase };

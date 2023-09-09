const { poll } = require("../connection");

class TarefasDatabase {
  static async list() {
    try {
      const [tasks] = await poll.query("SELECT * FROM tasks");
      return tasks;
    } catch (error) {
      return error;
    }
  }

  static async create(name, description) {
    try {
      const [tasks] = await poll.query(
        "INSERT INTO tasks (name, description) VALUES (?,?)",
        [name, description]
      );
      return tasks;
    } catch (error) {
      return error;
    }
  }
}

module.exports = { TarefasDatabase };

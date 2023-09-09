const { poll } = require("../connection");

class TarefasColaboradoresDatabase {
  static async create(contributor_id, task_id) {
    try {
      const content = await poll.query(
        "INSERT INTO contributors_tasks (contributor_id,task_id) VALUES (?,?)",
        [contributor_id, task_id]
      );
      return content;
    } catch (error) {
      return error;
    }
  }
}

module.exports = { TarefasColaboradoresDatabase };

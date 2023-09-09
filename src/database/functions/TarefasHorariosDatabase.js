const { poll } = require("../connection");

class TarefasHorariosDatabase {
  static async create(task_id, schedule_id) {
    try {
      const content = await poll.query(
        "INSERT INTO schedules_tasks (task_id,schedule_id) VALUES (?,?)",
        [task_id, schedule_id]
      );
    } catch (error) {
      return error;
    }
  }
}

module.exports = { TarefasHorariosDatabase };

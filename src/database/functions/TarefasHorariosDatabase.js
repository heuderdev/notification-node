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

  static async list() {
    try {
      const [schedules_tasks] = await poll.query(`
      SELECT
          s.id AS schedule_id,
          s.time AS schedule_time,
          GROUP_CONCAT(t.name) AS task_names
        FROM
            schedules s
        LEFT JOIN
            schedules_tasks st ON s.id = st.schedule_id
        LEFT JOIN
            tasks t ON st.task_id = t.id
        GROUP BY
            s.id, s.time
        HAVING
            task_names IS NOT NULL  
      `)
      return schedules_tasks
    } catch (error) {
      return error
    }
  }

}

module.exports = { TarefasHorariosDatabase };

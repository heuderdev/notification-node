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

  static async list() {
    try {
      const [content] = await poll.query(`
      SELECT
          c.id AS contribution_id,
          c.name AS contributor_name,
          t.id AS task_id,
          t.name AS task_name,
          t.description AS task_description
      FROM
          contributions c
      JOIN
          contributors_tasks ct ON c.id = ct.contributor_id
      JOIN
          tasks t ON ct.task_id = t.id
      WHERE
          c.is_active = 1
          AND t.is_active = 1
      ORDER BY
          c.id, t.id;

      `)

      return content
    } catch (error) {
      return error
    }
  }
}

module.exports = { TarefasColaboradoresDatabase };

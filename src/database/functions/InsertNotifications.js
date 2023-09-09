const { poll } = require("../connection");

class InsertNotifications {
  static async execute(code_uuid, task_id, contributor_id) {
    try {
      const [notification] = await poll.query(
        "INSERT INTO notifications (code_uuid,task_id,contributor_id) VALUES(?,?,?)",
        [code_uuid, task_id, contributor_id]
      );
      return notification;
    } catch (error) {
      return error;
    }
  }
}

module.exports = { InsertNotifications };

const { poll } = require("../connection");

class HorariosDatabase {
  static async list() {
    try {
      const [horarios] = await poll.query("select * from schedules");
      return horarios;
    } catch (error) {
      return error;
    }
  }
  static async create(time) {
    try {
      const [horario] = await poll.query(
        "INSERT INTO schedules (time) VALUES (?)",
        [time]
      );
      return horario;
    } catch (error) {
      return error;
    }
  }
}

module.exports = { HorariosDatabase };

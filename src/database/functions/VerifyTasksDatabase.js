const { obterHoraFormatada } = require("../../utils/obterHoraFormatada");
const { poll } = require("../connection");

class VerifyTasksDatabase {
  static async execute() {
    const HoraAtual = obterHoraFormatada();

    try {
      const [tasks] = await poll.query(
        "SELECT  DISTINCT  contributions.id as contributions_id,contributions.phone AS contributions_phone, contributions.name AS contributions_name,  tasks.id as tasks_id,tasks.name AS tasks_name, schedules.time AS schedules_time, contributions.name AS contributions_name	from tasks   inner join schedules_tasks on schedules_tasks.task_id = tasks.id inner join schedules on schedules.id = schedules_tasks.schedule_id   inner join contributors_tasks on  contributors_tasks.task_id = tasks.id   inner join contributions on contributions.id = contributors_tasks.contributor_id WHERE schedules.time = ?",
        [HoraAtual]
      );
      return tasks;
    } catch (error) {
      return error;
    }
  }
}

module.exports = { VerifyTasksDatabase };

const cron = require("node-cron");
const uuid = require("uuid");
const http = require("axios");

const { obterHoraFormatada } = require("./utils/obterHoraFormatada");
const {
  VerifyTasksDatabase,
} = require("./database/functions/VerifyTasksDatabase");
const {
  InsertNotifications,
} = require("./database/functions/InsertNotifications");
const { Whatsapp } = require("./utils/whatsapp");

cron.schedule("*/60 * * * * *", async function () {
  const tasks = await VerifyTasksDatabase.execute();

  if (tasks.length > 0) {
    const newTasks = tasks.map((item) => ({
      contributionId: item.contributions_id,
      contributionPhone: item.contributions_phone,
      contributionEmail: item.contributions_email,
      contributionName: item.contributions_name,
      tasksName: item.tasks_name,
      taskId: item.tasks_id,
      uuid: uuid.v4(),
    }));

    function processItemWithDelay(item, index) {
      setTimeout(async () => {
        // console.log(`Processando item ${index + 1} - ${JSON.stringify(item)}`);
        InsertNotifications.execute(
          item.uuid,
          item.taskId,
          item.contributionId
        ).then(async () => {
          await Whatsapp.execute(item);
        });
      }, index * 3000);
    }

    newTasks.forEach((item, index) => {
      processItemWithDelay(item, index);
    });
  } else {
    console.log("fail");
  }
});

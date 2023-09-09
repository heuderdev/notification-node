const http = require("axios");

class Whatsapp {
  static async execute(item) {
    http.post("https://whatsapp.coringagames.com/message/text?key=123", {
      id: item.contributionPhone,
      message: `Olá, ${item.contributionName} \n\n Verifique sua tarefa: ${item.tasksName} \n\n acesse: http://exemplo.com.br/${item.uuid}`,
    });
  }
}

module.exports = { Whatsapp };

const { poll } = require("../connection")

class NotificacaoDatabase {
    static async ListAll() {
        try {
            const [notifications] = await poll.query(`SELECT 
        N.id AS notifications_id,
         C.name AS contributions_name,
         N.code_uuid AS notifications_code_uuid,
         N.was_verified AS notifications_verify,
         T.name AS task_name,
         DATE_FORMAT(N.created_at, '%d/%m/%Y %H:%i:%s') AS created_at,
	     DATE_FORMAT(N.updated_at, '%d/%m/%Y %H:%i:%s') AS updated_at,
         CASE WHEN N.was_verified = 1 THEN 'ON' ELSE 'OFF' END AS case_onotifications_verify
      FROM  notifications AS N
             JOIN tasks AS T ON T.id = N.task_id
             JOIN contributions AS C ON C.id = N.contributor_id
         ORDER BY N.was_verified DESC
         LIMIT 100
         `)
         return notifications
        } catch (error) {
            return error
        }
    }
}


module.exports = { NotificacaoDatabase }
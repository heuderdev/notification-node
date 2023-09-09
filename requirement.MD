01 - A APLICAÇÃO PRECISA MANDAR NOTIFICAÇÕES PARA UM USUÁRIO, LEMBRANDO ELE DE
FAZER UMA TAREFA.

02 - SERA CRIADO UM GRUPO DE PESSOAS REFERENCIANDO CADA PESSOA PARA UM TURNO.

shifts = {
name: 'turno a',
isActive: boolean
}

contributors =
{
shift_id: integer
name: string,
phone: string,
email: string,
isActive: boolean,
}

contributors_tasks {
contributor_id: integer,
task_id: integer
}

taks =
{
name: string,
description: string,
}

schedules_tasks {
schedule_id: integer,
task_id: integer
}

schedules = {
time: string,
}

notifications = {

}
npm install express-session connect-flash
```sql

DROP DATABASE IF EXISTS sicoob;
CREATE DATABASE sicoob;

USE sicoob;

CREATE TABLE users(
  `id` INT(11) AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL UNIQUE,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
   `roles` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

CREATE TABLE shifts(
  `id` INT(11) AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `is_deleted` TINYINT(1) NOT NULL DEFAULT 0,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

CREATE TABLE contributions(
   `id` INT(11) AUTO_INCREMENT,
   `shift_id` INT(11) NOT NULL,
   `name` VARCHAR(255) NOT NULL,
   `phone` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `is_active` TINYINT(1) NOT NULL DEFAULT 1,
   `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
   `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

ALTER TABLE contributions ADD FOREIGN KEY(shift_id)  REFERENCES shifts(id);

CREATE TABLE tasks(
   `id` INT(11) AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `is_active` TINYINT(1) NOT NULL DEFAULT 1,
   `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
   `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE contributors_tasks(
    `contributor_id` INT(11) NOT NULL,
    `task_id` INT(11) NOT NULL
);

ALTER TABLE contributors_tasks ADD FOREIGN KEY(contributor_id)  REFERENCES contributions(id);
ALTER TABLE contributors_tasks ADD FOREIGN KEY(task_id)  REFERENCES tasks(id);


CREATE TABLE schedules (
   `id` INT(11) AUTO_INCREMENT,
   `time` VARCHAR(100) NOT NULL DEFAULT '00:00',
   `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
   `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE schedules_tasks (
  `schedule_id` INT(11) NOT NULL,
  `task_id` INT(11) NOT NULL
);

ALTER TABLE schedules_tasks ADD FOREIGN KEY(schedule_id)  REFERENCES schedules(id);
ALTER TABLE schedules_tasks ADD FOREIGN KEY(task_id)  REFERENCES tasks(id);


CREATE TABLE notifications(
  `id` INT(11) AUTO_INCREMENT,
  `code_uuid` VARCHAR(255) NOT NULL,
  `was_verified` TINYINT(1) NOT NULL DEFAULT 0, --  = foi verificado
  `task_id` INT(11) NOT NULL,
  `contributor_id` INT(11) NOT NULL,
  `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY(id)
);

ALTER TABLE notifications ADD FOREIGN KEY(task_id)  REFERENCES taks(id);
ALTER TABLE notifications ADD FOREIGN KEY(contributor_id)  REFERENCES contributions(id);



```

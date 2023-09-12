DROP PROCEDURE IF EXISTS PROCEDURE_VERIFY_TASKS;
DELIMITER //
	CREATE PROCEDURE PROCEDURE_VERIFY_TASKS(IN INPUT_HOURS VARCHAR(100))
		BEGIN		    
           select 
				contributions.id as contributions_id,
				tasks.id as tasks_id,
				tasks.name AS tasks_name,
				schedules.time AS schedules_time,
				contributions.name AS contributions_name
		from tasks
			inner join schedules_tasks on schedules_tasks.task_id = tasks.id
		    inner join schedules on schedules.id = schedules_tasks.schedule_id
		    inner join contributors_tasks on  contributors_tasks.task_id = tasks.id
		    inner join contributions on contributions.id = contributors_tasks.contributor_id
			WHERE schedules.time = INPUT_HOURS;
		END //
DELIMITER ;
CALL PROCEDURE_VERIFY_TASKS('10:45')

CALL PROCEDURE_VERIFY_TASKS('10:45')
    
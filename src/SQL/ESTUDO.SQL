

SELECT  DISTINCT  contributions.id as contributions_id, tasks.id as tasks_id,tasks.name AS tasks_name, schedules.time AS schedules_time, contributions.name AS contributions_name	from tasks   inner join schedules_tasks on schedules_tasks.task_id = tasks.id inner join schedules on schedules.id = schedules_tasks.schedule_id   inner join contributors_tasks on  contributors_tasks.task_id = tasks.id   inner join contributions on contributions.id = contributors_tasks.contributor_id WHERE schedules.time = '00:00'


-- 
		SELECT 
			notifications.code_uuid AS notifications_code_uuid,
			tasks.name AS tasks_name,
			contributions.phone AS contributions_phone,
			contributions.email AS contributions_email,
			contributions.name AS contributions_name,
			shifts.name  AS shifts_name
		FROM notifications
			JOIN tasks ON  tasks.id = notifications.task_id
			JOIN contributions ON contributions.id  = notifications.contributor_id
			JOIN shifts ON shifts.id = contributions.shift_id
			WHERE shifts.is_active = 0
			AND notifications.code_uuid ='eb35fb66-fec6-4b92-85d2-fb4fc82b78ed'
			
			
			
			SELECT  DISTINCT  contributions.id as contributions_id,contributions.phone AS contributions_phone, contributions.name AS contributions_name,  tasks.id as tasks_id,tasks.name AS tasks_name, schedules.time AS schedules_time, contributions.name AS contributions_name	from tasks   inner join schedules_tasks on schedules_tasks.task_id = tasks.id inner join schedules on schedules.id = schedules_tasks.schedule_id   inner join contributors_tasks on  contributors_tasks.task_id = tasks.id   inner join contributions on contributions.id = contributors_tasks.contributor_id WHERE schedules.time = '00:00'
			
			
			
			SELECT * FROM notifications
			
			
			
			
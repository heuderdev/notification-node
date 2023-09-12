DROP PROCEDURE IF EXISTS PROCEDURE_INSERT_NOTIFICATIONS;
DELIMITER //
	CREATE PROCEDURE PROCEDURE_INSERT_NOTIFICATIONS(
		IN INPUT_TAKS_ID INT,
        IN INPUT_CONTRIBUTOR_ID INT
	)
		BEGIN		    
            INSERT INTO notifications (code_uuid,task_id,contributor_id) VALUES (uuid(),INPUT_TAKS_ID,INPUT_CONTRIBUTOR_ID);
            
            IF LAST_INSERT_ID() != FALSE THEN
           	 SELECT * FROM notifications INNER JOIN contributions ON contributions.id = notifications.contributor_id  WHERE notifications.id = LAST_INSERT_ID();
            ELSE
	    			ROLLBACK;
					SELECT "ERROR";
			END IF;	
		END //
DELIMITER ;
CALL PROCEDURE_INSERT_NOTIFICATIONS(1,1)
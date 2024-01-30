SET @user_id = 1;
SET @job_id = 1;
SET @time_slot = 1;

INSERT INTO applied_jobs
(
user_id,
time_slot,
resume_URL,
hall_ticket_URL,
applied_jobs_modified,
job_id
)
VALUES
(
@user_id,
(SELECT start_time FROM walkin_job_timeslots WHERE id = @time_slot AND job_id = @job_id),
(SELECT resume_url FROM user WHERE id = @user_id),
"www.hallticket.com",
CURRENT_TIMESTAMP(),
@job_id
)
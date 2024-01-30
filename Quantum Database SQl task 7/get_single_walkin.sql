SET @job_id = 1;

SELECT 
    w.job_id,
    w.title,
    w.start_date,
    w.end_date,
    w.location,
    GROUP_CONCAT(DISTINCT wrf.lpa) AS lpas,
    GROUP_CONCAT(DISTINCT wrf.role_desc) AS role_descs,
    GROUP_CONCAT(DISTINCT wrf.requirements) AS requirements,
    GROUP_CONCAT(DISTINCT CONCAT(wt.start_time, ' - ', wt.end_time)) AS timeslots,
    GROUP_CONCAT(DISTINCT r.role) AS roles
FROM walkin_job w
LEFT JOIN walkin_job_role_info wrf ON w.job_id = wrf.job_id
LEFT JOIN walkin_job_timeslots wt ON w.job_id = wt.job_id
LEFT JOIN roles r ON wrf.roles_pref_id = r.pref_id
WHERE w.job_id = @job_id
GROUP BY w.job_id, w.title, w.start_date, w.end_date, w.location

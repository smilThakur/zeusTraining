INSERT INTO user
(
first_name,
last_name,
email,
phone_number,
resume_url,
portfolio_url,
reff_emp_name,
job_offers,
display_img_url,
user_created_timestamp,
user_modified
)

VALUES(
"smil",
"raj",
"smil.thakur@zeuslearning.com",
7487081401,
"www.resume.com",
"www.portfolio.com",
"akash tambe",
1,
"www.diapayImg.com",
CURRENT_TIMESTAMP(),
CURRENT_TIMESTAMP()
);

SET @last_user_id = LAST_INSERT_ID();


INSERT INTO user_auth
VALUES(
@last_user_id,
"smil.thakur@zeuslearning@.com",
"PASSWORD@123"
);


INSERT INTO user_education_qualification
(
user_id,
agrr_per,
year_passed,
qualification,
`stream`,
college,
college_location
) 
VALUES 
(
@last_user_id,
90,
2024,
"Bachelor in Engineering",
"Information and Communication Technology",
"Adani University",
"Ahmedabad"
);

INSERT INTO user_professional_qualification
(
user_id,
applicant_type,
years_exp,
current_ctc,
expected_ctc
)
VALUES
(
@last_user_id,
1,
2,
750000,
1200000
);

INSERT INTO preferred_job
(
user_id,
roles_pref_id
)
VALUES
(
@last_user_id,
1
),
(
@last_user_id,
3
)
;

INSERT INTO expertise_tech
(
user_id,
technologies_tech_id,
other
)
VALUES
(
@last_user_id,
1,
NULL
);

INSERT INTO familiar_tech
(
user_id,
technologies_tech_id,
other
)
VALUES
(
@last_user_id,
2,
NULL
),
(
@last_user_id,
4,
NULL
);

INSERT INTO user_notice_period
(
user_id,
current_notice,
notice_end,
notice_duration
)
VALUES
(
@last_user_id,
0,
"2020-05-20",
2
);

INSERT INTO user_zeus_test
(
user_id,
appeared,
`role`
)
VALUES(
@last_user_id,
0,
NULL
);


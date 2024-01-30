INSERT INTO walkin_job
(
title,
start_date,
end_date,
location,
venue
)
VALUES
(
"Multiple Job Roles",
"2021-06-03",
"2021-06-04",
"Mumbai",
"Zeus Learning pvt ltd"
);

SET @last_job_id = LAST_INSERT_ID();

INSERT INTO walkin_job_role_info
(
job_id,
roles_pref_id,
lpa,
role_desc,
requirements
)
VALUES
(
@last_job_id,
1,
500000,
"
- Generate highly interactive and innovative instructional strategies for e-learning solutions
- Develop course structure and learning specifications addressing the requirements of the target audience
- Construct appropriate testing strategies to ensure learners' understanding and performance
- Address usability issues
- Keep abreast of new trends in e-learning
- Ensure that the instructional strategies are as per global standards
- Prepare instructional design checklists and guidelines
- Check for quality assurance
",
"- Experience in creating instructional plans and course maps.
- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instructio
- Awareness of different instructional design models and familiarity with instructional and learning theories
- Awareness of latest trends in e-learning and instructional design
- Strong client consulting/interfacing skills.
- Ability to guide clients to focus on specific objectives and teaching points
- Strong meeting facilitation, presentation and interpersonal skills
- A thorough understanding of the web as an instructional medium
- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism
"
),
(
@last_job_id,
2,
600000,
"
- Generate highly interactive and innovative instructional strategies for e-learning solutions
- Develop course structure and learning specifications addressing the requirements of the target audience
- Construct appropriate testing strategies to ensure learners' understanding and performance
- Address usability issues
- Keep abreast of new trends in e-learning
- Ensure that the instructional strategies are as per global standards
- Prepare instructional design checklists and guidelines
- Check for quality assurance
",
"- Experience in creating instructional plans and course maps.
- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instructio
- Awareness of different instructional design models and familiarity with instructional and learning theories
- Awareness of latest trends in e-learning and instructional design
- Strong client consulting/interfacing skills.
- Ability to guide clients to focus on specific objectives and teaching points
- Strong meeting facilitation, presentation and interpersonal skills
- A thorough understanding of the web as an instructional medium
- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism
"
),
(
@last_job_id,
3,
700000,
"
- Generate highly interactive and innovative instructional strategies for e-learning solutions
- Develop course structure and learning specifications addressing the requirements of the target audience
- Construct appropriate testing strategies to ensure learners' understanding and performance
- Address usability issues
- Keep abreast of new trends in e-learning
- Ensure that the instructional strategies are as per global standards
- Prepare instructional design checklists and guidelines
- Check for quality assurance
",
"- Experience in creating instructional plans and course maps.
- Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instructio
- Awareness of different instructional design models and familiarity with instructional and learning theories
- Awareness of latest trends in e-learning and instructional design
- Strong client consulting/interfacing skills.
- Ability to guide clients to focus on specific objectives and teaching points
- Strong meeting facilitation, presentation and interpersonal skills
- A thorough understanding of the web as an instructional medium
- Post graduate degree in Education, Instructional Design, Mass Communication or Journalism
"
);

INSERT INTO walkin_job_timeslots
(
job_id,
start_time,
end_time
)
VALUES
(
@last_job_id,
TIME("09:00:00"),
TIME("11:00:00")
),
(
@last_job_id,
TIME("13:00:00"),
TIME("15:00:00")
)

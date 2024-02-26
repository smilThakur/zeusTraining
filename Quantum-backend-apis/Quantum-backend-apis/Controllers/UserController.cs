using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quantum_backend_apis.Data;
using Quantum_backend_apis.Model;
using Quantum_backend_apis.DTO;
using Quantum_backend_apis.Helpers;
using Microsoft.AspNetCore.Authorization;

namespace Quantum_backend_apis.Controllers
{
    [Route("api")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly APPDBContext _aPPDBContext;
        private readonly IConfiguration _config;

        public UserController(APPDBContext aPPDBContext, IConfiguration config)
        {
            _aPPDBContext = aPPDBContext;
            _config = config;
        }
        [Authorize]
        [HttpGet("users")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetUsers()
        {
            List<User> users = await _aPPDBContext.user.ToListAsync();
            List<ExpertiseTech> exptechs = await _aPPDBContext.expertise_tech.ToListAsync();
            List<FimiliarTech> fmltechs = await _aPPDBContext.familiar_tech.ToListAsync();
            List<UserEducationQualification> equlifications = await _aPPDBContext.user_education_qualification.ToListAsync();
            List<UserProfessionalQualifications> pqualifications = await _aPPDBContext.user_professional_qualification.ToListAsync();
            List<UserNoticeInfo> noticeInfos = await _aPPDBContext.user_notice_period.ToListAsync();
            List<UserZuesTestInfo> userZuesTestInfos = await _aPPDBContext.user_zeus_test.ToListAsync();
            List<UserPreferredJob> userPreferredJobs = await _aPPDBContext.preferred_job.ToListAsync();
            List<AppliedJob> userAppliedJobs = await _aPPDBContext.applied_jobs.ToListAsync();
            List<AppliedJobPreference> appliedJobPreferences = await _aPPDBContext.applied_job_preference.ToListAsync();


            List<string> getAppliedJobPreferences(int jobid)
            {
                return appliedJobPreferences.Where(ajp => ajp.applied_jobs_id == jobid).Select(ajp => ajp.role).ToList();
            }

            List<UserAppliedJobDTO> getUserAppliedJobs(int uid)
            {
                return userAppliedJobs.Where(uaj => uaj.user_id == uid)
                    .Select(uaj => new UserAppliedJobDTO()
                    {
                        job_id = uaj.job_id,
                        appliedJobPreference = getAppliedJobPreferences(uaj.job_id)

                    }).ToList();

            }



            UserZuesTestInfoDTO getUserZuestestInfo(int uid)
            {
                var zti = userZuesTestInfos.Where(zti => zti.user_id == uid).FirstOrDefault();

                return new UserZuesTestInfoDTO()
                {
                    appeared = zti.appeared,
                    role = zti.role
                };
            }

            List<UserPreferredJobDTO> getUserPreferredJob(int uid)
            {
                return userPreferredJobs.Where(upj => upj.user_id == uid)
                    .Select(upj => new UserPreferredJobDTO()
                    {
                        roles_pref_id = upj.roles_pref_id,
                        role = Enums.Enums.fetchRoleName(upj.roles_pref_id)

                    }).ToList();
            }

            EducationQualificationDTO getEducationQualification(int uid) {

                var eq = equlifications.Where(eq => eq.user_id == uid).FirstOrDefault();

                return new EducationQualificationDTO()
                {
                    agrr_per = eq.agrr_per,
                    year_passed = eq.year_passed,
                    qualification = eq.qualification,
                    stream = eq.stream,
                    college = eq.college,
                    college_location = eq.college_location

                };


            }

            UserNoticeInfoDTO getUserNoticeInfo(int uid)
            {
                var nf = noticeInfos.Where(nf => nf.user_id == uid).FirstOrDefault();

                return new UserNoticeInfoDTO()
                {
                    is_on_notice = nf.current_notice,
                    notice_duration = nf.notice_duration,
                    notice_end = nf.notice_end,
                };
            }

            ProfessionalQualificationDTO getprofessionalQualification(int uid)
            {
                var pq = pqualifications.Where(pq => pq.user_id == uid).FirstOrDefault();

                return new ProfessionalQualificationDTO()
                {
                    isExperienced = pq.applicant_type,
                    years_exp = pq.years_exp,
                    current_ctc = pq.current_ctc,
                    expected_ctc = pq.expected_ctc,
                    expertise_tech = getExpTechs(uid),
                    familiar_tech = getFmlTechs(uid),
                    noticeInfo = getUserNoticeInfo(uid),
                };
            }

            List<TechDTO> getExpTechs(int uid)
            {
                return exptechs
                    .Where(et => et.user_id == uid)
                    .Select(et => new TechDTO
                    {
                        id = et.id,
                        tech = Enums.Enums.fetchTechName(et.id)
                    })
                    .ToList();
            }

            List<TechDTO> getFmlTechs(int uid)
            {
                return fmltechs
                    .Where(et => et.user_id == uid)
                    .Select(et => new TechDTO
                    {
                        id = et.id,
                        tech = Enums.Enums.fetchTechName(et.id)
                    })
                    .ToList();
            }

            List<UserDTO> userDTOs = users.Select(u => new UserDTO
            {
                id = u.id,
                first_name = u.first_name,
                last_name = u.last_name,
                email = u.email,
                is_experienced = u.is_experienced,
                user_created_timestamp = u.user_created_timestamp,
                user_modified = u.user_modified,
                job_offers = u.job_offers,
                phone_number = u.phone_number,
                resume_url = u.resume_url,
                display_img_url = u.display_img_url,
                portfolio_url = u.portfolio_url,
                reff_emp_name = u.reff_emp_name,
                Education_qualification = getEducationQualification(u.id),
                professional_qualification = getprofessionalQualification(u.id),
                zuesTestInfo = getUserZuestestInfo(u.id),
                preferredRoles = getUserPreferredJob(u.id),
                appliedJobs = getUserAppliedJobs(u.id)


            }).ToList();

            if (!users.Any())
            {
                return NotFound();
            }

            return Ok(userDTOs);
        }


        [HttpGet("basicuser")]
        public async Task<ActionResult<IEnumerable<User>>> getBasicUser()
        {
            return Ok(await _aPPDBContext.user.ToListAsync());
        }


        [AllowAnonymous]
        [HttpPost("user")]
        public async Task<ActionResult> registerUser([FromBody] UserDTO user)
        {

            int user_id = _aPPDBContext.user.ToList().Count + 1;

            var newUser = _aPPDBContext.user.Add(new Model.User()
            {
                first_name = user.first_name,
                last_name = user.last_name,
                email = user.email,
                phone_number = user.phone_number,
                resume_url = user.resume_url,
                portfolio_url = user.portfolio_url,
                reff_emp_name = user.reff_emp_name,
                job_offers = user.job_offers,
                display_img_url = user.display_img_url,
                user_created_timestamp = DateTime.Now,
                user_modified = DateTime.Now,
                is_experienced = user.is_experienced,
            });

            await _aPPDBContext.SaveChangesAsync();


            user.preferredRoles.ForEach(pr =>
            {
                _aPPDBContext.preferred_job.Add(new UserPreferredJob()
                {
                    user_id = user_id,
                    roles_pref_id = pr.roles_pref_id
                });
            });

            _aPPDBContext.user_education_qualification.Add(new UserEducationQualification()
            {
                user_id = user_id,
                agrr_per = user.Education_qualification.agrr_per,
                year_passed = user.Education_qualification.year_passed,
                qualification = user.Education_qualification.qualification,
                stream = user.Education_qualification.stream,
                college = user.Education_qualification.college,
                college_location = user.Education_qualification.college_location
            });

            _aPPDBContext.user_professional_qualification.Add(new UserProfessionalQualifications()
            {
                user_id = user_id,
                applicant_type = user.professional_qualification.isExperienced,
                years_exp = user.professional_qualification.years_exp,
                current_ctc = user.professional_qualification.current_ctc,
                expected_ctc = user.professional_qualification.expected_ctc,
                other_expertise_tech = user.professional_qualification.other_expertise_tech,
                other_familiar_tech = user.professional_qualification.other_familiar_tech
            });

            await _aPPDBContext.SaveChangesAsync();

            _aPPDBContext.user_zeus_test.Add(new UserZuesTestInfo()
            {
                user_id = user_id,
                appeared = user.zuesTestInfo.appeared,
                role = user.zuesTestInfo.role
            });

            user.professional_qualification.expertise_tech?.ForEach(et =>
                {
                    _aPPDBContext.expertise_tech.Add(new ExpertiseTech()
                    {
                        user_id = user_id,
                        technologies_tech_id = et.id

                    });
                });


            user.professional_qualification.familiar_tech?.ForEach(ft =>
            {

                _aPPDBContext.familiar_tech.Add(new FimiliarTech()
                {
                    user_id = user_id,
                    technologies_tech_id = ft.id
                });

            });

            _aPPDBContext.user_notice_period.Add(new UserNoticeInfo()
            {
                user_id = user_id,
                current_notice = user.professional_qualification.noticeInfo.is_on_notice,
                notice_end = user.professional_qualification.noticeInfo.notice_end,
                notice_duration = user.professional_qualification.noticeInfo.notice_duration
            });

            await _aPPDBContext.SaveChangesAsync();

            return Ok();
        }

        [AllowAnonymous]
        [HttpPost("userAuthRegister")]
        public async Task<ActionResult> registerUserAuth([FromBody] UserAuth userAuth)
        {

            try
            {

                string hashedPassword = PasswordHasher.HashPassword(userAuth.password);

                var newUserAuth = new UserAuth()
                {
                    email = userAuth.email,
                    password = hashedPassword
                };

                _aPPDBContext.user_auth.Add(newUserAuth);
                await _aPPDBContext.SaveChangesAsync();

                return Ok(new { message = "User authentication information registered successfully"});
            }
            catch (Exception ex)
            {
                
                return StatusCode(StatusCodes.Status500InternalServerError, new { error = ex.ToString() });
            }
        }

        [AllowAnonymous]
        [HttpPost("checkemail")]
        public ActionResult checkUniqueEmail([FromBody] EmailDTO email)
        {
            Console.WriteLine(email.email);
            var emails =  _aPPDBContext.user.FromSql($"SELECT * FROM `Quantum Database`.user WHERE email = {email.email}").ToList();

            if(emails.Count() == 0)
            {
                return Ok(1);
            }

            return Ok(0);

        }

        [AllowAnonymous]
        [HttpPost("login")]
        public ActionResult<int> login([FromBody]UserAuth auth)
        {
            try
            {
                UserAuth? user = _aPPDBContext.user_auth.FromSql($"SELECT * FROM `Quantum Database`.user_auth WHERE email = {auth.email}").ToList().FirstOrDefault();

                if (user != null)
                {

                    if (PasswordHasher.VerifyPassword(auth.password, user.password))
                    {

                        User? u = _aPPDBContext.user.FromSql($"SELECT * FROM `Quantum Database`.user WHERE email = {auth.email}").ToList().FirstOrDefault();
                        if (u != null)
                        {
                            var res = new JwtService(_config).GenerateToken(u);
                            return Ok(new { token = res });
                        }
                        else
                        {
                            return NotFound(new {error="User not Found"});
                        }
                    }
                    else
                    {
                        return NotFound(new {error="Password Incorrect"});
                    }
                }

                return NotFound(new {error="User not Found"});
            }
            catch(Exception er)
            {
                return NotFound(new {error=er});
            }
        }
    }
}


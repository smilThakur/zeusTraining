using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Quantum_backend_apis.Data;
using Quantum_backend_apis.Model;
using Microsoft.EntityFrameworkCore;
using Quantum_backend_apis.DTO;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Quantum_backend_apis.Controllers
{
    [Route("api/[controller]")]
    public class WalkinController : Controller
    {

        private readonly APPDBContext _aPPDBContext;

        public WalkinController(APPDBContext aPPDBContext)
        {
            _aPPDBContext = aPPDBContext;
        }

        [Authorize]
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<WalkinGlanceDTO>>> getAllWalkin()
        {

            List<Walkin> walkins = _aPPDBContext.walkin_job.FromSql($"SELECT * FROM walkin_job").ToList();
            List<WalkinJobRoleInfo> walkinInfos = _aPPDBContext.walkin_job_role_info.FromSql($"SELECT * FROM walkin_job_role_info").ToList();
            List<WalkinGlanceDTO> walkinGlance = new();

            walkins.ForEach(w =>
            {
                walkinGlance.Add(new WalkinGlanceDTO()
                {
                    job_id = w.job_id,
                    title = w.title,
                    start_date = w.start_date,
                    end_date = w.end_date,
                    location = w.location,
                    venue = w.venue,
                    roles = walkinInfos.Where(wi => wi.job_id == w.job_id).Select(wi => wi.roles_pref_id).ToList()
                });
            });

            return Ok(walkinGlance);



        }


        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult> getWalkinDetails(int id)
        {

            try
            {
                Walkin walkinBasic = _aPPDBContext.walkin_job.FromSql($"SELECT * FROM walkin_job").Where(wi => wi.job_id == id).ToList().FirstOrDefault();
                List<int> walkinroles = _aPPDBContext.walkin_job_role_info.FromSql($"SELECT * FROM walkin_job_role_info").Where(wjr => wjr.job_id == id).Select(wjr => wjr.roles_pref_id).ToList();
                List<int> walkinlpas = _aPPDBContext.walkin_job_role_info.FromSql($"SELECT * FROM walkin_job_role_info").Where(wjr => wjr.job_id == id).Select(wjr => wjr.lpa).ToList();
                List<string> walkinRoleDesc = _aPPDBContext.walkin_job_role_info.FromSql($"SELECT * FROM walkin_job_role_info").Where(wjr => wjr.job_id == id).Select(wjr => wjr.role_desc).ToList();
                List<string> walkinRequirements = _aPPDBContext.walkin_job_role_info.FromSql($"SELECT * FROM walkin_job_role_info").Where(wjr => wjr.job_id == id).Select(wjr => wjr.requirements).ToList();
                WalkinApplicationProcess walkinApplicationProcess = _aPPDBContext.application_process.FromSql($"SELECT * FROM application_process WHERE job_id = {id}").FirstOrDefault();

                List<WalkinTimeSlots> walkinTimeSlots = _aPPDBContext.walkin_job_timeslots.FromSql($"SELECT * FROM walkin_job_timeslots").Where(wts => wts.job_id == id).ToList();

                List<TimeOnly[]> timeslots = new List<TimeOnly[]>();

                walkinTimeSlots.ForEach(wts =>
                {
                    timeslots.Add(new TimeOnly[] { wts.start_time, wts.end_time });
                });

                WalkinDTO walkin = new WalkinDTO()
                {
                    job_id = walkinBasic.job_id,
                    title = walkinBasic.title,
                    start_date = walkinBasic.start_date,
                    end_date = walkinBasic.end_date,
                    location = walkinBasic.location,
                    venue = walkinBasic.venue,
                    roles = walkinroles,
                    timeslots = timeslots,
                    lpas = walkinlpas,
                    requirements = walkinRequirements,
                    role_descs = walkinRoleDesc,
                    general_ins = walkinApplicationProcess.general_ins,
                    instructions = walkinApplicationProcess.instructions,
                    sys_req = walkinApplicationProcess.sys_req,
                    process = walkinApplicationProcess.process
                };


                return Ok(walkin);
            }
            catch (Exception er)
            {
                return NotFound(new { error = "can not process this walkin" });
            }
        }

        [Authorize]
        [HttpPost("applyJob")]
        public async Task<ActionResult<ApplyJobDTO>> applyJob([FromBody] ApplyJobDTO info)
        {

            try
            {
                _aPPDBContext.applied_jobs.Add(new AppliedJob()
                {
                    user_id = info.userid,
                    applied_jobs_modified = DateTime.Now,
                    job_id = info.jobId,
                    start_time = info.startTime,
                    end_time = info.endTime
                });

                info.PrefJob.ForEach(pj =>
                {
                    _aPPDBContext.applied_job_preference.Add(new AppliedJobPreference()
                    {
                        applied_jobs_id = info.jobId,
                        role = Enums.Enums.fetchRoleName(pj)
                    });
                });

                await _aPPDBContext.SaveChangesAsync();

                return Ok(info);
            } catch (Exception er)
            {
                return BadRequest(er);
            }

        }

        [Authorize]
        [HttpPost("checkapplied")]
        public ActionResult checkAlreadyApplied([FromBody] CheckApplied data)
        {
            try
            {

                int userId = data.userid;
                int jobId = data.jobid;

                List<AppliedJob> appliedJobs = _aPPDBContext.applied_jobs.ToList();

                AppliedJob? appliedJob = appliedJobs.Where(aj => aj.job_id == jobId && aj.user_id == userId).FirstOrDefault();

                if (appliedJob != null)
                {
                    return Ok(new {message ="applied"});
                }

                return Ok(new {message ="not applied"});

            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }
}


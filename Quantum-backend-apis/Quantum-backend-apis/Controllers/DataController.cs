using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quantum_backend_apis.Data;
using Quantum_backend_apis.Model;
using Microsoft.AspNetCore.Authorization;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Quantum_backend_apis.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {

        private readonly APPDBContext _aPPDBContext;

        public DataController(APPDBContext aPPDBContext)
        {
            _aPPDBContext = aPPDBContext;
        }


        [HttpGet("roles")]
        public async Task<ActionResult<IEnumerable<Roles>>> getRoles()
        {
            List<Roles> roles = await _aPPDBContext.roles.ToListAsync();
            if (!roles.Any())
            {
                return NotFound();
            }

            return Ok(roles);
        }

        [HttpGet("colleges")]
        public ActionResult<IEnumerable<string>> getColleges()
        {
            return Ok(Repository.colleges);
        }

        [HttpGet("qualifications")]
        public ActionResult<IEnumerable<string>> getQualifications()
        {
            return Ok(Repository.qualifications);
        }

        [HttpGet("streams")]
        public ActionResult<IEnumerable<string>> getStreams()
        {
            return Ok(Repository.streams);
        }

        [HttpPost("uploadresume")]
        public ActionResult<string> uploadResume()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources", "Resumes");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if(file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var uniqueFileName = Guid.NewGuid().ToString() + "_" + fileName;
                    var fullPath = Path.Combine(pathToSave, uniqueFileName);
                    var dbPath = Path.Combine(folderName, uniqueFileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(dbPath.ToString());
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception err)
            {
                return BadRequest(err);
            }
        }


        [HttpPost("updateResume{id}")]
        [Authorize]
        public ActionResult<string> updateResume(int id)
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources", "Resumes");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var uniqueFileName = Guid.NewGuid().ToString() + "_" + fileName;
                    var fullPath = Path.Combine(pathToSave, uniqueFileName);
                    var dbPath = Path.Combine(folderName, uniqueFileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    var userId = id;

                    var userToUpdate = _aPPDBContext.user.SingleOrDefault(u => u.id == userId);
                    if (userToUpdate != null)
                    {
                        if (!string.IsNullOrEmpty(userToUpdate.resume_url))
                        {
                            var oldFilePath = Path.Combine(Directory.GetCurrentDirectory(), userToUpdate.resume_url);
                            if (System.IO.File.Exists(oldFilePath))
                            {
                                System.IO.File.Delete(oldFilePath);
                            }
                        }

                        userToUpdate.resume_url = dbPath.ToString();
                        userToUpdate.user_modified = DateTime.Now;
                        _aPPDBContext.SaveChanges();
                    }

                    return Ok(new { path = dbPath.ToString() });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception err)
            {
                return BadRequest(err);
            }

        }

        [HttpPost("uploaddisplayimage")]
        public ActionResult<string> uploadDisplayImage()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources", "displayImages");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var uniqueFileName = Guid.NewGuid().ToString() + "_" + fileName;
                    var fullPath = Path.Combine(pathToSave, uniqueFileName);
                    var dbPath = Path.Combine(folderName, uniqueFileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(uniqueFileName);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception err)
            {
                return BadRequest(err);
            }
        }


        [HttpGet("getdisplayImage")]
        [AllowAnonymous]
        public async Task<IActionResult> GetImage(int uid)
        {
            string fileName = _aPPDBContext.user
            .FromSql($"SELECT * FROM user WHERE id = {uid}")
            .ToList()
            .FirstOrDefault()?.display_img_url;

            string filePath = Path.Combine("Resources", "displayImages", $"{fileName}");

            if (System.IO.File.Exists(filePath))
            {
                byte[] imageBytes = System.IO.File.ReadAllBytes(filePath);
                string base64Image = Convert.ToBase64String(imageBytes);
                string dataUrl = $"data:image/jpeg;base64,{base64Image}";

                return Ok(new { dataUrl });
            }
            else
            {
                return NotFound();
            }
        }
    }
}


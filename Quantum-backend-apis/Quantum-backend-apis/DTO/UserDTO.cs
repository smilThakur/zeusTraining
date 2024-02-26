using System;
using System.ComponentModel.DataAnnotations;
using Quantum_backend_apis.Model;
namespace Quantum_backend_apis.DTO
{
	public class UserDTO
	{
        public int id { get; set; }
        [Required]
        public string first_name { get; set; }
        [Required]
        public string last_name { get; set; }
        [EmailAddress]
        public string email { get; set; }
        [Required]
        public string phone_number { get; set; }
        [Required]
        public string resume_url { get; set; }
        public string? portfolio_url { get; set; }
        [Required]
        public bool is_experienced { get; set; }
        public string reff_emp_name { get; set; }
        [Required]
        public bool job_offers { get; set; }
        public string? display_img_url { get; set; }
        [Required]
        public DateTime user_created_timestamp { get; set; }
        [Required]
        public DateTime user_modified { get; set; }
        public EducationQualificationDTO Education_qualification { get; set; }
        public ProfessionalQualificationDTO professional_qualification { get; set; }
        public UserZuesTestInfoDTO zuesTestInfo { get; set; }
        public List<UserPreferredJobDTO> preferredRoles { get; set; }
        public List<UserAppliedJobDTO>? appliedJobs { get; set; }
    }
}


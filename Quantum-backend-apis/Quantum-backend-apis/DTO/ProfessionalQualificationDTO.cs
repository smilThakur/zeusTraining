using System;
namespace Quantum_backend_apis.DTO
{
	public class ProfessionalQualificationDTO
	{
        public bool isExperienced { get; set; }
        public int? years_exp { get; set; }
        public int? current_ctc { get; set; }
        public int? expected_ctc { get; set; }
        public List<TechDTO>? expertise_tech { get; set; }
        public List<TechDTO>? familiar_tech { get; set; }
        public string? other_familiar_tech { get; set; }
        public string? other_expertise_tech { get; set; }
        public UserNoticeInfoDTO noticeInfo { get; set; }
    }
}


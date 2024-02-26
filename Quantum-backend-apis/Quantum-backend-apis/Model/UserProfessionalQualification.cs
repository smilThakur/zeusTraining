using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class UserProfessionalQualifications
	{
		[Key]
		public int user_id { get; set; }
		public bool applicant_type { get; set; }
		public int? years_exp { get; set; }
		public int? current_ctc { get; set; }
		public int? expected_ctc { get; set; }
		public string? other_familiar_tech { get; set; }
		public string? other_expertise_tech { get; set; }
	}
}


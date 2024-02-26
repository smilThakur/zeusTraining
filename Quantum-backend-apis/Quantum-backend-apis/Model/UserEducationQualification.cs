using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class UserEducationQualification
	{
		[Key]
		public int user_id { get; set; }
		public decimal agrr_per { get; set; }
		public int year_passed { get; set; }
		public string qualification { get; set; }
		public string stream { get; set; }
		public string college { get; set; }
		public string college_location { get; set; }
	}
}


using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Quantum_backend_apis.Model

{
	public class User
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int id { get; set; }
		public string first_name { get; set; }
		public string last_name { get; set; }
		public string email { get; set; }
		public string phone_number { get; set; }
		public string resume_url { get; set; }
		public string? portfolio_url { get; set; }
		public string reff_emp_name { get; set; }
		public bool job_offers { get; set; }
		public string? display_img_url { get; set; }
		public DateTime user_created_timestamp { get; set; }
		public DateTime user_modified { get; set; }
		public bool is_experienced { get; set; }
	}
}


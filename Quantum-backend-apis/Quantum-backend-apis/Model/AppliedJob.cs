using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class AppliedJob
	{
		[Key]
		public int id { get; set; }
		public int user_id { get; set; }
		public DateTime applied_jobs_modified { get; set; }
		public int job_id { get; set; }
		public TimeOnly start_time { get; set; }
		public TimeOnly end_time { get; set; }

		
	}
}


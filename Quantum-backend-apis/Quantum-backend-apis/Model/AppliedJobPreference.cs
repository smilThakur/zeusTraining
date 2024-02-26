using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class AppliedJobPreference
	{
		[Key]
		public int id { get; set; }
		public int applied_jobs_id { get; set; }
		public string role { get; set; }
	}
}


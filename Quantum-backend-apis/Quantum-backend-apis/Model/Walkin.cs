using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class Walkin
	{
		[Key]
		public int job_id { set; get; }
		public string title { get; set; }
		public DateTime start_date { get; set; }
		public DateTime end_date { get; set; }
		public string location { get; set; }
		public string venue { get; set; }
	}
}


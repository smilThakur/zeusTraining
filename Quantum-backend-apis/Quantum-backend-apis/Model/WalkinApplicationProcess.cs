using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class WalkinApplicationProcess
	{
		[Key]
		public int job_id { get; set; }
		public string general_ins { get; set;}
		public string instructions { get; set; }
		public string sys_req { get; set; }
		public string process { get; set; }
	}
}


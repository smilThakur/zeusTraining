using System;
namespace Quantum_backend_apis.Model
{
	public class WalkinTimeSlots
	{
		public int id { get; set; }
		public int job_id { get; set; }
		public TimeOnly start_time { get; set; }
		public TimeOnly end_time { get; set; }
	}
}


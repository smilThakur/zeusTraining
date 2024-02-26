using System;
namespace Quantum_backend_apis.DTO
{
	public class WalkinGlanceDTO
	{
		public int job_id { get; set; }
        public string title { get; set; }
        public DateTime start_date { get; set; }
        public DateTime end_date { get; set; }
        public string location { get; set; }
        public string venue { get; set; }
        public List<int> roles { get; set; }
    }
}


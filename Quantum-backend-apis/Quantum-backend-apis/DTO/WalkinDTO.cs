using System;
namespace Quantum_backend_apis.DTO
{
	public class WalkinDTO
	{
        public int job_id { get; set; }
        public string title { get; set; }
        public string general_ins { get; set; }
        public string instructions { get; set; }
        public string sys_req { get; set; }
        public string process { get; set; }
        public DateTime start_date { get; set; }
        public DateTime end_date { get; set; }
        public string location { get; set; }
        public string venue { get; set; }
        public List<int> roles { get; set; }
        public List<TimeOnly[]> timeslots { get; set; }
        public List<int> lpas { get; set; }
        public List<string> role_descs { get; set; }
        public List<string> requirements { get; set; }
    }
}


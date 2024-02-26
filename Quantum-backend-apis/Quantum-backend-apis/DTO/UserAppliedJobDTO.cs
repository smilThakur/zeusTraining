using System;
using Quantum_backend_apis.Model;
namespace Quantum_backend_apis.DTO
{
	public class UserAppliedJobDTO
	{
        public TimeOnly time_slot { get; set; }
        public string resume_URL { get; set; }
        public string hall_ticket_URL { get; set; }
        public int job_id { get; set; }
        public List<string> appliedJobPreference { get; set; }
    }
}


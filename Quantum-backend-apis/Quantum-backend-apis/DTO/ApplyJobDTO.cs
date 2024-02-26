using System;
namespace Quantum_backend_apis.DTO
{
	public class ApplyJobDTO
	{
        public TimeOnly startTime { get; set; }
        public TimeOnly endTime { get; set; }
        public List<int> PrefJob { get; set; }
        public int jobId { get; set; }
        public int userid { get; set; }
    }
}


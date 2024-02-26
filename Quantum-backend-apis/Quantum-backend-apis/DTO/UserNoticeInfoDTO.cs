using System;
namespace Quantum_backend_apis.DTO
{
	public class UserNoticeInfoDTO
	{
        public bool is_on_notice { get; set; }
        public DateTime? notice_end { get; set; }
        public decimal? notice_duration { get; set; }
    }
}


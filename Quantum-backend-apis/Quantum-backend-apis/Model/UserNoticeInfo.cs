using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class UserNoticeInfo
	{
		[Key]
		public int user_id { get; set; }
		public bool current_notice { get; set; }
		public DateTime? notice_end { get; set; }
		public decimal? notice_duration { get; set; }
	}
}


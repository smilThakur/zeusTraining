using System;
namespace Quantum_backend_apis.Helpers
{
	public class RefreshToken
	{
		public string token { get; set; } = string.Empty;
		public DateTime created { get; set; } = DateTime.Now;
		public DateTime expired { get; set; }
	}
}


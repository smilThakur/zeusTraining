using System;
namespace Quantum_backend_apis.Model
{
	public class WalkinJobRoleInfo
	{
		public int id { get; set; }
		public int job_id { get; set; }
		public int roles_pref_id { get; set; }
		public int lpa { get; set; }
		public string role_desc { get; set; }
		public string requirements { get; set; }
	}
}


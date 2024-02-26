using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class UserZuesTestInfo
	{
		[Key]
		public int user_id { get; set; }
		public bool appeared { get; set; }
		public string? role { get; set; }
	}
}


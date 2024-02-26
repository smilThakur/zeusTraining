using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class UserAuth
	{
		[Key]
		public string email { get; set; }
		public string password { get; set; }
	}
}


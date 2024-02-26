using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class Roles
	{
		[Key]
		public int pref_id { get; set; }
		public string role { get; set; }
	}
}


using System;
using System.ComponentModel.DataAnnotations;
namespace Quantum_backend_apis.Model
{
	public class Technology
	{
		[Key]
		public int tech_id { get; set; }
		public string tech_name { get; set; }
	}
}


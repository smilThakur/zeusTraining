using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Quantum_backend_apis.Model
{
	public class UserPreferredJob
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int id { get; set; }
		public int user_id { get; set; }
		public int roles_pref_id { get; set; }
	}
}


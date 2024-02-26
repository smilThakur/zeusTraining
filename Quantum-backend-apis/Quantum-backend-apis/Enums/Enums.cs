using System;
using Microsoft.EntityFrameworkCore;
using Quantum_backend_apis.Data;
using Quantum_backend_apis.Model;
using Quantum_backend_apis.DTO;

namespace Quantum_backend_apis.Enums
{
	public static class Enums
	{
		static List<TechDTO> Technologies = new List<TechDTO>()
		{
			new TechDTO()
			{
				id = 1,
				tech = "Javascript"
			}
			,
            new TechDTO()
            {
                id = 2,
                tech = "Angular JS"
            }
            ,
            new TechDTO()
            {
                id = 3,
                tech = "React"
            }
            ,
            new TechDTO()
            {
                id = 4,
                tech = "Node JS"
            }
            
        };

        static List<RoleDTO> roles = new List<RoleDTO>()
        {
            new RoleDTO()
            {
                pref_id = 1,
                role = "Instructional Designer"
            },
            new RoleDTO()
            {
                pref_id = 2,
                role = "Software Engineer"
            },
            new RoleDTO()
            {
                pref_id = 3,
                role = "Software Quality Engineer"
            }


        };

        public static string fetchTechName(int id)
        {
            return Technologies.Where(t => t.id == id).FirstOrDefault().tech;
        }

        public static string fetchRoleName(int id)
        {
            return roles.Where(r => r.pref_id == id).FirstOrDefault().role;
        }

        public static int getRoleId(string role)
        {
            return roles.Where(r => r.role == role).FirstOrDefault().pref_id;
        }

    }
}


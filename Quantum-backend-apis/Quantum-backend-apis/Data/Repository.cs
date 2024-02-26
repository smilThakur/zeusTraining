using System;
namespace Quantum_backend_apis.Data
{
	public static class Repository
	{
        public static readonly List<string> colleges = new()
        {
            "Adani University",
            "Massachusetts Institute of Technology (MIT)",
            "Stanford University",
            "Harvard University",
            "California Institute of Technology (Caltech)",
            "University of Oxford",
            "University of Cambridge",
            "Imperial College London",
            "University of Chicago",
            "ETH Zurich - Swiss Federal Institute of Technology",
            "National University of Singapore (NUS)",
            "Tsinghua University",
            "University of California, Berkeley (UCB)",
            "University of Tokyo",
            "Indian Institute of Technology Bombay (IITB)",
            "University of Toronto",
            "University of Melbourne",
            "University of Delhi",
            "Cairo University",
            "University of São Paulo",
            "University of Cape Town",
            "Other"
        };

        public static readonly List<string> qualifications = new()
        {
            "Bachelor in Technology (B.Tech)",
            "Bachelor of Science (B.Sc)",
            "Bachelor of Arts (B.A)",
            "Master of Technology (M.Tech)",
            "Master of Science (M.Sc)",
            "Master of Business Administration (MBA)",
            "Doctor of Philosophy (Ph.D)",
        };

        public static readonly List<string> streams = new()
        {
            "Information Technology",
            "Computer Science",
            "Electrical Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Electronics and Communication",
            "Biotechnology",
        };

    }
}


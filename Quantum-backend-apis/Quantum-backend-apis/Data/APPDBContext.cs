using System;
using Microsoft.EntityFrameworkCore;
using Quantum_backend_apis.Model;

namespace Quantum_backend_apis.Data;

public class APPDBContext:DbContext
{
	public APPDBContext(DbContextOptions options) :base(options)
	{
	}

	public DbSet<User> user { get; set; }

	public DbSet<Technology> technologies { get; set; }

	public DbSet<ExpertiseTech> expertise_tech { get; set; }

	public DbSet<FimiliarTech> familiar_tech { get; set; }

	public DbSet<UserEducationQualification> user_education_qualification { get; set; }

	public DbSet<UserProfessionalQualifications> user_professional_qualification { get; set; }

	public DbSet<UserNoticeInfo> user_notice_period { get; set; }

	public DbSet<UserZuesTestInfo> user_zeus_test { get; set; }

	public DbSet<UserPreferredJob> preferred_job { get; set; }

    public DbSet<AppliedJob> applied_jobs { get; set; }

    public DbSet<AppliedJobPreference> applied_job_preference { get; set; }

	public DbSet<Roles> roles { get; set; }

	public DbSet<UserAuth> user_auth { get; set; }

	public DbSet<Walkin> walkin_job { get; set; }

	public DbSet<WalkinJobRoleInfo> walkin_job_role_info { get; set; }

	public DbSet<WalkinTimeSlots> walkin_job_timeslots { get; set; }

	public DbSet<WalkinApplicationProcess> application_process { get; set; }


	
}



using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Quantum_backend_apis.Model;
namespace Quantum_backend_apis.Helpers
{
	public class JwtService
	{
		public string secretKey { get; set; }
		public int TockenDuration { get; set; }
		private readonly IConfiguration config;

		public JwtService(IConfiguration _config)
		{
			config = _config;
			secretKey = config.GetSection("JwtSettings").GetSection("Key").Value!;
			Console.WriteLine(secretKey);
			TockenDuration = 1;
		}

		public string GenerateToken(User user)
		{
			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.secretKey));

			var signature = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

			var payload = new[]
			{
				new Claim("id",user.id.ToString()),
				new Claim(ClaimTypes.Email,user.email),
				new Claim("first_name",user.first_name),
				new Claim("last_name",user.last_name),
				new Claim("phone_number",user.phone_number),
				new Claim("display_img_url",user.display_img_url ?? "NA"),
				new Claim("portfolio_url",user.portfolio_url ?? "NA"),
				new Claim("resume_url",user.resume_url),
				new Claim("is_experience",user.is_experienced?"Experienced":"Fresher"),

			};


			var jwtToken = new JwtSecurityToken(
				issuer:"localhost",
				audience:"localhost",
				claims:payload,
				expires: DateTime.Now.AddMinutes(TockenDuration),
				signingCredentials:signature
				);

			return new JwtSecurityTokenHandler().WriteToken(jwtToken);
		}
	}
}




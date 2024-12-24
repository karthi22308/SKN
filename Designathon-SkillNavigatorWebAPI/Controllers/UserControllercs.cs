﻿using Designathon_SkillNavigatorWebAPI.Data;
using Designathon_SkillNavigatorWebAPI.Entities;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Crypto.Generators;

namespace Designathon_SkillNavigatorWebAPI.Controllers
{
    public class UserControllercs :ControllerBase
    {
        private readonly SKNdbcontext context;
        public UserControllercs(SKNdbcontext context)
        {
            this.context = context;
        }
        private bool VerifyPassword(string enteredPassword, string storedHashedPassword)
        {
            return enteredPassword== storedHashedPassword;
        }
        [HttpPost("validate")]
        public async Task<ActionResult<User>> ValidateLogin([FromBody] LoginRequest request)
        {
            // Fetch user based on username
            var user = await context.Users.SingleOrDefaultAsync(x => x.Username == request.Username);

            // Check if user exists and validate the password
            if (user != null && VerifyPassword(request.Password, user.Password))
            {
                return Ok(user); // Return the user if validation succeeds
            }

            // Return Unauthorized if validation fails
            return Unauthorized("Invalid username or password.");
        }
        [HttpPost("register")]
        public IActionResult RegisterUser([FromBody] User request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest(new { Message = "Username and Password are required!" });
            }
            if (context.Users.Any(u => u.Username == request.Username))
            {
                return BadRequest(new { Message = "User already exists!" });
            }
            var newUser = new User
            {
               

            };
            newUser = request;
            context.Users.Add(newUser);
            context.SaveChanges();
            return Ok(new { Message = "Registration successful!" });


        }
    }
    // DTO for the request
    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
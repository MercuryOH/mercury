using Mercury.Entities;
using Mercury.Models.Classes;
using Mercury.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;

namespace Mercury.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ClassesController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly MercuryContext _context;

        public ClassesController(ILogger<ClassesController> logger, MercuryContext context)
        {
            _logger = logger;
            _context = context;
        }

        [ProducesResponseType(typeof(ClassDto), StatusCodes.Status200OK)]
        [HttpPost]
        public IActionResult Post([FromBody] ClassCreateDto model)
        {
            var currentClass = new Class
            {
                Name = model.Name,
                CalendarId = model.CalendarId,
                Color = GenerateRandomColorHex()
            };

            try
            {
                _context.Classes.Add(currentClass);
                _context.SaveChanges();

                return Ok(new ClassDto
                {
                    Id = currentClass.Id,
                    Name = currentClass.Name,
                    CalendarId = currentClass.CalendarId,
                    Color = currentClass.Color
                });
            }
            catch(Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }

        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {
            var userId = Auth.GetUserId(User);
            var user = _context.Users.FirstOrDefault(x => x.Id == userId);

            if (user == null)
            {
                return BadRequest();
            }

            var classes = _context.ClassUsers.Where(x => x.UserId == userId).Include(x => x.Class);

            return Ok(classes.Select(x => new ClassDto
            { 
                Id = x.Class.Id,
                Name = x.Class.Name,
                CalendarId = x.Class.CalendarId,
                Color = x.Class.Color,
                Role = x.Role
            }));
        }

        private string GenerateRandomColorHex()
        {
            var random = new Random();
            
            return String.Format("#{0:X6}", random.Next(0x1000000));
        }
    }
}

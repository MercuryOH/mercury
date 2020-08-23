using Mercury.Entities;
using Mercury.Models.Classes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

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

        [HttpPost]
        public IActionResult Post([FromBody] ClassCreateDto model)
        {
            var currentClass = new Class
            {
                Name = model.Name,
                CalendarId = model.CalendarId
            };

            try
            {
                _context.Classes.Add(currentClass);
                _context.SaveChanges();

                return Ok(currentClass);
            }
            catch(Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }
    }
}

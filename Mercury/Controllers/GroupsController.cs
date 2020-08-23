using Mercury.Entities;
using Mercury.Models.Groups;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;

namespace Mercury.Controllers
{
    [Produces("application/json")]
    [Route("api/classes/{classId}/[controller]")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly MercuryContext _context;

        public GroupsController(ILogger<GroupsController> logger,  MercuryContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpPost]
        public IActionResult PostGroup(string classId, [FromBody] GroupCreateDto model)
        {
            var currentClass = _context.Classes.FirstOrDefault(x => x.Id == classId);
            
            if (currentClass == null)
            {
                return BadRequest();
            }

            var group = new Group
            {
                Type = model.Type,
                SessionId = "session-goes-here",
                ClassId = currentClass.Id
            };

            try
            {
                _context.Groups.Add(group);
                _context.SaveChanges();

                return Ok(group);
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }
    }
}

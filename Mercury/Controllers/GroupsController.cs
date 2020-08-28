using Mercury.Entities;
using Mercury.Models.Groups;
using Mercury.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;
using System.Security.Claims;

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
        [Authorize]
        public IActionResult PostGroup(string classId, [FromBody] GroupCreateDto model)
        {
            var id = Auth.GetUserId(User);
            var currentClass = _context.Classes.FirstOrDefault(x => x.Id == classId);
            
            if (currentClass == null)
            {
                return BadRequest();
            }

            var group = new Group
            {
                Type = model.Type,
                Name = model.Name,
                SessionId = "session-goes-here",
                ClassId = currentClass.Id
            };

            try
            {
                _context.Groups.Add(group);
                _context.SaveChanges();

                return Ok(new GroupDto
                {
                    Id = group.Id,
                    Name = group.Name,
                    SessionId = group.SessionId,
                    Type = group.Type
                });
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }
    }
}

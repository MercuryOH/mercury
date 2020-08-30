using Mercury.Entities;
using Mercury.Models.Groups;
using Mercury.Services;
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
        private readonly IOpenTokService _openTok;

        public GroupsController(ILogger<GroupsController> logger,  MercuryContext context, IOpenTokService openTok)
        {
            _logger = logger;
            _context = context;
            _openTok = openTok;
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
                SessionId = _openTok.CreateSession(),
                ClassId = currentClass.Id
            };

            var groupUser = new GroupUser
            {
                Group = group,
                UserId = id
            };

            try
            {
                _context.Groups.Add(group);
                _context.GroupUsers.Add(groupUser);
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

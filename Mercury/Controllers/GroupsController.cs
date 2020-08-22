using Mercury.Entities;
using Mercury.Models.Groups;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace Mercury.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
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
        public IActionResult Post([FromBody] GroupCreateDto model)
        {
            var group = new Group
            {
                Type = model.Type,
                SessionId = "session-goes-here"
            };

            try
            {
                _context.Groups.Add(group);
                _context.SaveChanges();

                return Ok(group);
            } catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }
    }
}

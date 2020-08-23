using Mercury.Entities;
using Mercury.Models.Webhooks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using System;

namespace Mercury.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class WebhooksController : ControllerBase
    {
        private readonly ILogger _logger;
        private readonly MercuryContext _context;

        public WebhooksController(ILogger<WebhooksController> logger, MercuryContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpPost("signup")]
        public IActionResult Signup([FromBody] Auth0Signup model)
        {
            var user = new User
            {
                Id = model.Id,
                Name = model.Name,
                Email = model.Email
            };

            try
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                
                return NoContent();
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return BadRequest();
            }
        }
    }
}

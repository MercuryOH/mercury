using Mercury.Entities;
using Mercury.Models.QueueHub;
using Mercury.Models.Users;
using Mercury.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System.Linq;

namespace Mercury.Hubs
{
    [Authorize]
    public class QueueHub : Hub
    {
        private readonly IQueueService _queue;
        private readonly MercuryContext _context;

        public QueueHub(IQueueService queue, MercuryContext context)
        {
            _queue = queue;
            _context = context;
        }

        public void Join(string classId)
        {
            var userId = Context.UserIdentifier;
            var user = _context.Users.FirstOrDefault(x => x.Id == userId);
            if (user == null) return;

            var hasClassAccess = _context.ClassUsers.FirstOrDefault(x => x.ClassId == classId && x.UserId == userId);
            if (hasClassAccess == null || hasClassAccess.Role != "Student") return;
            
            _queue.Enqueue(classId, new UserDto
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email
            });

            Clients.All.SendAsync("QueueChange", new QueueChangeEventDto
            {
                ClassId = classId,
                Queue = _queue.Get(classId)
            });
        }
    }
}

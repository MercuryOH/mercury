using Mercury.Entities;
using Mercury.Models.QueueHub;
using Mercury.Models.Users;
using Mercury.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Mercury.Hubs
{
    [Authorize]
    public class QueueHub : Hub
    {
        private readonly IQueueService _queue;
        private readonly MercuryContext _context;
        private readonly IOpenTokService _openTok;

        public QueueHub(IQueueService queue, MercuryContext context, IOpenTokService openTok)
        {
            _queue = queue;
            _context = context;
            _openTok = openTok;
        }

        public async Task Join(string classId)
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

            await Clients.All.SendAsync("QueueChange", new QueueChangeEventDto
            {
                ClassId = classId,
                Queue = _queue.Get(classId)
            });
        }

        public async Task NextStudent(string classId)
        {
            var userId = Context.UserIdentifier;
            var user = _context.Users.FirstOrDefault(x => x.Id == userId);
            if (user == null) return;

            var hasClassAccess = _context.ClassUsers.FirstOrDefault(x => x.ClassId == classId && x.UserId == userId);
            if (hasClassAccess == null || hasClassAccess.Role != "TA") return;

            var nextStudent = _queue.Dequeue(classId);
            if (nextStudent == null) return;

            var office = GetOrCreateOffice(classId);

            await Clients.User(userId).SendAsync("NextStudent", new NextStudentDto
            {
                SessionId = office.SessionId
            });

            await Clients.All.SendAsync("QueueChange", new QueueChangeEventDto
            {
                ClassId = classId,
                Queue = _queue.Get(classId)
            });
        }

        private Group GetOrCreateOffice(string classId)
        {
            var userId = Context.UserIdentifier;
            var groupUsers = _context.GroupUsers.Include(x => x.Group).Where(x => x.UserId == userId);
            var office = groupUsers.FirstOrDefault(x => x.Group.ClassId == classId && x.Group.Type == "Office")?.Group;

            if (office == null)
            {
                office = new Group
                {
                    ClassId = classId,
                    Name = "TA Office",
                    SessionId = _openTok.CreateSession(),
                    Type = "Office"
                };

                var officeUser = new GroupUser
                {
                    Group = office,
                    UserId = userId
                };

                _context.Groups.Add(office);
                _context.GroupUsers.Add(officeUser);
                _context.SaveChanges();
            }

            return office;
        }
    }
}

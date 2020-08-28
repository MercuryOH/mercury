using Mercury.Models.Users;
using System.Collections.Generic;

namespace Mercury.Services
{
    public interface IQueueService
    {
        void Enqueue(string classId, UserDto user);
        UserDto Dequeue(string classId);
        IEnumerable<UserDto> Get(string classId);
    }
}

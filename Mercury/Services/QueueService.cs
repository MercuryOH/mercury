using Mercury.Models.Users;
using System.Collections.Generic;
using System.Linq;

namespace Mercury.Services
{
    public class QueueService : IQueueService
    {
        private readonly Dictionary<string, Queue<UserDto>> _queue;

        public QueueService()
        {
            _queue = new Dictionary<string, Queue<UserDto>>();
        }

        public void Enqueue(string classId, UserDto user)
        {
            var classQueue = GetClassQueue(classId);

            classQueue.Enqueue(user);
        }

        public UserDto Dequeue(string classId)
        {
            var classQueue = GetClassQueue(classId);

            return classQueue.Dequeue();
        }
        public IEnumerable<UserDto> Get(string classId)
        {
            var classQueue = GetClassQueue(classId);

            return classQueue.ToList();
        }

        private Queue<UserDto> GetClassQueue(string classId)
        {
            Queue<UserDto> classQueue;

            if (!_queue.TryGetValue(classId, out classQueue))
            {
                classQueue = new Queue<UserDto>();
                _queue.Add(classId, classQueue);
            }

            return classQueue;
        }
    }
}

using Mercury.Models.Users;
using System.Collections.Generic;

namespace Mercury.Models.QueueHub
{
    public class QueueChangeEventDto
    {
        public string ClassId { get; set; }
        public IEnumerable<UserDto> Queue { get; set; }
    }
}

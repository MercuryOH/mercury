using Mercury.Models.Groups;
using Mercury.Models.Users;
using System.Collections.Generic;

namespace Mercury.Models.Classes
{
    public class ClassWithGroupsDto : ClassDto
    {
        public IEnumerable<GroupDto> Groups { get; set; }
    }
}

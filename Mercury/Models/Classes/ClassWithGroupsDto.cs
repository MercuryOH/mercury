using Mercury.Models.Groups;
using System.Collections.Generic;

namespace Mercury.Models.Classes
{
    public class ClassWithGroupsDto : ClassDto
    {
        public IEnumerable<GroupDto> Groups { get; set; }
    }
}

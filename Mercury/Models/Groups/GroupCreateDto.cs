using Mercury.Utils;

namespace Mercury.Models.Groups
{
    public class GroupCreateDto
    {
        [StringRange(AllowedValues = new string[] { "Group", "Discussion", "Office" })]
        public string Type { get; set; }
    }
}

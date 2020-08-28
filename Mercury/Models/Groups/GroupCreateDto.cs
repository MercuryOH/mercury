using Mercury.Utils;
using System.ComponentModel.DataAnnotations;

namespace Mercury.Models.Groups
{
    public class GroupCreateDto
    {
        [Required]
        public string Name { get; set; }

        [StringRange(AllowedValues = new string[] { "Group", "Discussion", "Office" })]
        public string Type { get; set; }
    }
}

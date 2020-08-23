using Mercury.Utils;
using System.ComponentModel.DataAnnotations;

namespace Mercury.Entities
{
    public class ClassUser
    {
        [Required]
        public string ClassId { get; set; }

        public Class Class { get; set; }

        [Required]
        public string UserId { get; set; }

        public User User { get; set; }

        [StringRange(AllowedValues = new string[] { "TA", "Student" })]
        public string Role { get; set; }
    }
}

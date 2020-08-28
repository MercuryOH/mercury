using System.ComponentModel.DataAnnotations;

namespace Mercury.Entities
{
    public class GroupUser
    {
        [Required]
        public string GroupId { get; set; }

        public Group Group { get; set; }

        [Required]
        public string UserId { get; set; }

        public User User { get; set; }
    }
}

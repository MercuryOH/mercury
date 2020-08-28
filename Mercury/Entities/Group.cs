using Mercury.Utils;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mercury.Entities
{
    public class Group
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string SessionId { get; set; }

        [StringRange(AllowedValues = new string[] { "Group", "Discussion", "Office"})]
        public string Type { get; set; }

        public string ClassId { get; set; }
        
        public Class Class { get; set; }

        public IEnumerable<GroupUser> GroupUsers { get; set; }
    }
}

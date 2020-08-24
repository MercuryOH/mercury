using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mercury.Entities
{
    public class Class
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string CalendarId { get; set; }

        [Required]
        public string Color { get; set; }

        public IEnumerable<Group> Groups { get; set; }
        public IEnumerable<ClassUser> ClassUsers { get; set; }
    }
}

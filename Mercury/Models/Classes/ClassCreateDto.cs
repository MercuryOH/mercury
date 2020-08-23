using System.ComponentModel.DataAnnotations;

namespace Mercury.Models.Classes
{
    public class ClassCreateDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string CalendarId { get; set; }
    }
}

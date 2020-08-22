using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Mercury.Utils
{
    public class StringRangeAttribute : ValidationAttribute
    {
        public string[] AllowedValues { get; set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (AllowedValues.Contains(value?.ToString()))
            {
                return ValidationResult.Success;
            }

            return new ValidationResult($"Value must be one of the following: {string.Join(",", AllowedValues)}");
        }
    }
}

using System.ComponentModel.DataAnnotations;

namespace TzAngular.Backend.Models.Entities
{
    public class Employee
    {
        [Key]
        [Required]
        public int Id_key { get; set; }
        [Required]
        public string Department { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        [Required]
        public DateTime HireDate { get; set; }
        [Required]
        public decimal Wages { get; set; }
    }

}

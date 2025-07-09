using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using TzAngular.Backend.Models.Entities;

namespace TzAngular.Backend.Models.Data
{
    public class CompanyContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public CompanyContext(DbContextOptions<CompanyContext> options) : base(options) { }
    }
}

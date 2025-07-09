using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TzAngular.Backend.Models.Data;
using TzAngular.Backend.Models.Entities;

namespace TzAngular.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly CompanyContext _context;
        public EmployeesController(CompanyContext context) => _context = context;

        [HttpGet]
        public async Task<IEnumerable<Employee>> GetEmployees() => await _context.Employees.ToListAsync();

        [HttpGet("wages-above/{amount}")]
        public async Task<IEnumerable<Employee>> GetEmployeesWithSalaryAbove(decimal amount) =>
            await _context.Employees.Where(e => e.Wages > amount).ToListAsync();

        [HttpPost]
        public async Task<ActionResult<Employee>> CreateEmployee(Employee employee)
        {
            _context.Employees.Add(employee);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployees), new { id = employee.Id_key }, employee);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, Employee employee)
        {
            if (id != employee.Id_key)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Employees.Any(e => e.Id_key == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);
            
            await _context.SaveChangesAsync();
            
            return NoContent();
        }
    }

}

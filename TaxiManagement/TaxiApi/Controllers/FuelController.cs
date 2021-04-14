using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaxiApi.Model;

namespace TaxiApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuelController : ControllerBase
    {
        private readonly ReceiptContext _context;

        public FuelController(ReceiptContext context)
        {
            _context = context;
        }

        // GET: api/Fuel
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fuel>>> GetFuel()
        {
            return await _context.Fuel.Include(s => s.Vehicle).ToListAsync();
        }

        // GET: api/Fuel/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Fuel>> GetFuel(int id)
        {
            var fuel = await _context.Fuel.FindAsync(id);

            if (fuel == null)
            {
                return NotFound();
            }

            return fuel;
        }

        // PUT: api/Fuel/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFuel(int id, Fuel fuel)
        {
            if (id != fuel.FuelId)
            {
                return BadRequest();
            }

            _context.Entry(fuel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FuelExists(id))
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

        // POST: api/Fuel
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Fuel>> PostFuel(Fuel fuel)
        {
            _context.Fuel.Add(fuel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFuel", new { id = fuel.FuelId }, fuel);
        }

        // DELETE: api/Fuel/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFuel(int id)
        {
            var fuel = await _context.Fuel.FindAsync(id);
            if (fuel == null)
            {
                return NotFound();
            }

            _context.Fuel.Remove(fuel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FuelExists(int id)
        {
            return _context.Fuel.Any(e => e.FuelId == id);
        }
    }
}

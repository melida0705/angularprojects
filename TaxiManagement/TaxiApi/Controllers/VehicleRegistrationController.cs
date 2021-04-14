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
    public class VehicleRegistrationController : ControllerBase
    {
        private readonly ReceiptContext _context;

        public VehicleRegistrationController(ReceiptContext context)
        {
            _context = context;
        }

        // GET: api/VehicleRegistration
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VehicleRegistration>>> GetVehicleRegistration()
        {
            return await _context.VehicleRegistration.Include(s=>s.Vehicle).ToListAsync();
        }

        // GET: api/VehicleRegistration/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VehicleRegistration>> GetVehicleRegistration(int id)
        {
            var vehicleRegistration = await _context.VehicleRegistration.FindAsync(id);

            if (vehicleRegistration == null)
            {
                return NotFound();
            }

            return vehicleRegistration;
        }

        // PUT: api/VehicleRegistration/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicleRegistration(int id, VehicleRegistration vehicleRegistration)
        {
            if (id != vehicleRegistration.RegistrationId)
            {
                return BadRequest();
            }

            _context.Entry(vehicleRegistration).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleRegistrationExists(id))
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

        // POST: api/VehicleRegistration
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<VehicleRegistration>> PostVehicleRegistration(VehicleRegistration vehicleRegistration)
        {
            _context.VehicleRegistration.Add(vehicleRegistration);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVehicleRegistration", new { id = vehicleRegistration.RegistrationId }, vehicleRegistration);
        }

        // DELETE: api/VehicleRegistration/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicleRegistration(int id)
        {
            var vehicleRegistration = await _context.VehicleRegistration.FindAsync(id);
            if (vehicleRegistration == null)
            {
                return NotFound();
            }

            _context.VehicleRegistration.Remove(vehicleRegistration);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VehicleRegistrationExists(int id)
        {
            return _context.VehicleRegistration.Any(e => e.RegistrationId == id);
        }
    }
}

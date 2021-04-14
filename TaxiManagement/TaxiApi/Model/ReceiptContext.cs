using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiApi.Model;

namespace TaxiApi.Model
{
    public class ReceiptContext:DbContext
    {
        public ReceiptContext(DbContextOptions<ReceiptContext> options) : base(options)
        {

        }
        public DbSet<Receipt> Receipts { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<TaxiApi.Model.Fuel> Fuel { get; set; }
        public DbSet<TaxiApi.Model.VehicleRegistration> VehicleRegistration { get; set; }
    }
}

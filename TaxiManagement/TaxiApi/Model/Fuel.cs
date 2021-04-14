using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiApi.Model
{
    public class Fuel
    {
        [Key]
        public int FuelId { get; set; }

        public int VehicleId { get; set; }
        public Vehicle Vehicle { get; set; }

        public int Liter { get; set; }
        public double PricePerLiter { get; set; }

        public double FinalAmount { get=>Liter*PricePerLiter; }
    }
}

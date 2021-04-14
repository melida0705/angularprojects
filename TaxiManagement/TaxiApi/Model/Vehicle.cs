using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiApi.Model
{
    public class Vehicle
    {
        [Key]
        public int VehicleId { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string Number { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Model { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string LicensePlate { get; set; }
      
       

    }
}

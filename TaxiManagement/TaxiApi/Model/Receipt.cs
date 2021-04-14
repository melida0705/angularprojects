using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiApi.Model
{
    public class Receipt
    {
        [Key]
        public int ReceiptId { get; set; }

        public double Total { get; set; }
        public DateTime Date { get; set; }

        public double AdvancePayment {get;set;}
        public int VehicleId { get; set; }
        public Vehicle Vehicle { get; set; }

        public int DriverId { get; set; }
        public Driver Driver { get; set; }
       
    }
}

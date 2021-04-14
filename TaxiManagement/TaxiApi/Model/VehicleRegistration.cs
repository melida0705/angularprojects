using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaxiApi.Model
{
    public class VehicleRegistration
    {
        [Key]
        public int RegistrationId { get; set; }

        public int VehicleId { get; set; }
        public Vehicle Vehicle { get; set; }

        public DateTime LastRegistrationDate { get; set; }
        public DateTime NextRegistrationDate { get => LastRegistrationDate.AddYears(1);}
        public double NextRegistrationDaysLeft { get => GetDaysLeft(); }

        public double GetDaysLeft()
        {
            TimeSpan res= DateTime.Now.Subtract(NextRegistrationDate);
            return res.TotalDays;
        } 
        public double Price { get; set; }
    }

}

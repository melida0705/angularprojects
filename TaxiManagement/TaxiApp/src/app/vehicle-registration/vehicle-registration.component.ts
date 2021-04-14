import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent implements OnInit {

  constructor(public service:VehicleService) { }

  ngOnInit(): void {
    this.service.getVehicleRegistration();
  }
  
}

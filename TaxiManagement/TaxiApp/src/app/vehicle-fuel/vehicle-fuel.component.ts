import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicle-fuel',
  templateUrl: './vehicle-fuel.component.html',
  styleUrls: ['./vehicle-fuel.component.css']
})
export class VehicleFuelComponent implements OnInit {

  constructor(public service:VehicleService) { }

  ngOnInit(): void {
    this.service.getVehicleFuel();
  }

}

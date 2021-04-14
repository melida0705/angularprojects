import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle-registration-form',
  templateUrl: './vehicle-registration-form.component.html',
  styleUrls: ['./vehicle-registration-form.component.css']
})
export class VehicleRegistrationFormComponent implements OnInit {

  constructor(public service:VehicleService) { }
  public allowCustom = true;
  ngOnInit(): void {
    this.service.getVehicle();
  }
  onSubmit(form:NgForm){
    this.service.postVehicleRegistration().subscribe(
      res=>{
        form.resetForm();
        this.service.getVehicleRegistration();
      },
      err=>{console.log(err);}
    )
  }public handleChange(value: Date) {
    // Update the JSON birthDate string date
    this.service.formDataVR.lastRegistrationDate = value;

  
}
  public valueChange(value: any): void {
    this.service.formDataVR.vehicleId=value.vehicleId;
    console.log(value.vehicleId);
  }
}

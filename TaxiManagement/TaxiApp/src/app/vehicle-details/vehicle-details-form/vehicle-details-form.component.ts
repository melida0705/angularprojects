import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-vehicle-details-form',
  templateUrl: './vehicle-details-form.component.html',
  styleUrls: ['./vehicle-details-form.component.css']
})
export class VehicleDetailsFormComponent implements OnInit {

  constructor(public service:VehicleService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.service.postVehicle().subscribe(
      res=>{
        form.resetForm();
        this.service.getVehicle();
      },
      err=>{console.log(err);}
    )
  }
  insertRecord(form:NgForm){
   this.service.postVehicle().subscribe(
     res=>{
       form.resetForm();
       this.service.getVehicle();
     },
     err=>{console.log(err);}
   )
   
  }
}

import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle.model';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  constructor(public service:VehicleService) { }

 
  ngOnInit(): void {
    this.getDrivers();
  }
  getDrivers(){
      this.service.getVehicle();
  }
  onDelete(id:number){
      if(confirm('Are you sure to delete this record')){
        this.service.deleteVehicle(id).subscribe(
          res=>{
            this.service.getVehicle();
          },
          err=>{
            console.log(err)}
        );
      }
         
  }
  populateForm(selectedRecord:Vehicle){
    this,this.service.formData=Object.assign({},selectedRecord);

  }
}

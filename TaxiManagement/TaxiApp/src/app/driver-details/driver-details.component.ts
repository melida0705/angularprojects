import { Component, OnInit } from '@angular/core';
import { Driver } from '../model/driver.model';
import {DriverService} from '../service/driver.service'
@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  constructor(public service:DriverService) { }

  ngOnInit(): void {
    this.getDrivers();
  }
  getDrivers(){
      this.service.getDrivers();
  }
  onDelete(id:number){
      if(confirm('Are you sure to delete this record')){
        this.service.deleteDriver(id).subscribe(
          res=>{
            this.service.getDrivers();
          },
          err=>{
            console.log(err)}
        );
      }
         
  }
  populateForm(selectedRecord:Driver){
    this,this.service.formData=Object.assign({},selectedRecord);

  }

}

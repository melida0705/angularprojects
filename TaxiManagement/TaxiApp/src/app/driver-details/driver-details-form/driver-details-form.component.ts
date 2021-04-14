import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-driver-details-form',
  templateUrl: './driver-details-form.component.html',
  styleUrls: ['./driver-details-form.component.css']
})
export class DriverDetailsFormComponent implements OnInit {

  constructor(public service:DriverService) { }

  ngOnInit(): void {
  }
   onSubmit(form:NgForm){
     this.service.postDriver().subscribe(
       res=>{
         form.resetForm();
         this.service.getDrivers();
       },
       err=>{console.log(err);}
     )
   }
   insertRecord(form:NgForm){
    this.service.postDriver().subscribe(
      res=>{
        form.resetForm();
        this.service.getDrivers();
      },
      err=>{console.log(err);}
    )
    
   }
}

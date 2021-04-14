import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReceiptService } from 'src/app/service/receipt.service';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

import { VehicleService } from 'src/app/service/vehicle.service';
import { Vehicle } from 'src/app/model/vehicle.model';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-receipt-details-form',
  templateUrl: './receipt-details-form.component.html',
  styleUrls: ['./receipt-details-form.component.css']
})
export class ReceiptDetailsFormComponent implements OnInit {

  constructor(public service:ReceiptService,public vService:VehicleService,public dService:DriverService) { }

  ngOnInit(): void {
    this.vService.getVehicle();
    this.dService.getDrivers();
  }
  public selectedV:any;
  public selectedD:any;
  public driverId:number;
  public allowCustom = true;
  onSubmit(form:NgForm){
    
    
    this.service.postReceipt().subscribe(
      res=>{
        form.resetForm();
        this.service.getReceipt();
      },
      err=>{console.log(err);}
    )
  } 
public valueChange(value: any): void {
  this.service.formData.vehicleId=value.vehicleId;
  console.log(value.vehicleId);
}
public valueChange1(value: any): void {
  this.service.formData.driverId=value.driverId;
  console.log(value.driverId);
}

  insertRecord(form:NgForm){
   this.service.postReceipt().subscribe(
     res=>{
       form.resetForm();
       this.service.getReceipt();
     },
     err=>{console.log(err);}
   )
   
  }
  
}

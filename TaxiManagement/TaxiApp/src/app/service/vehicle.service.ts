import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Driver} from "../model/driver.model";
import { Vehicle } from '../model/vehicle.model';
import { VehicleRegistration } from '../model/vehicle-registration.model';
import { Fuel } from '../model/fuel.model';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http:HttpClient) { }

  readonly baseURL='https://localhost:44375/api/';
  list:Vehicle[];
  registrationList:VehicleRegistration[];
  fuelList:Fuel[];
  formData:Vehicle=new Vehicle();
  formDataVR:VehicleRegistration=new VehicleRegistration();
  getVehicle(){
     return this.http.get(this.baseURL+"Vehicle")
     .toPromise()
     .then(res=>this.list=res as Vehicle[]);
  }
  postVehicle(){
    return this.http.post(this.baseURL+"Vehicle",this.formData);
  }
  deleteVehicle(id:number){
        return this.http.delete(`${this.baseURL+"Vehicle"}/${id}`);
  }
  putVehicle(){

  }
  getVehicleRegistration(){
    return this.http.get(this.baseURL+"VehicleRegistration").toPromise().then(res=>this.registrationList=res as VehicleRegistration[])
  }
  postVehicleRegistration(){
    return this.http.post(this.baseURL+"VehicleRegistration",this.formDataVR);
  }
  getVehicleFuel(){
    return this.http.get(this.baseURL+"Fuel").toPromise().then(res=>this.fuelList=res as Fuel[])
  }
}
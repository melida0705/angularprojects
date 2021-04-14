import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Driver} from "../model/driver.model";
@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http:HttpClient) { }

  readonly baseURL='https://localhost:44375/api/Driver';
  list:Driver[];
  formData:Driver=new Driver();
  getDrivers(){
     return this.http.get(this.baseURL)
     .toPromise()
     .then(res=>this.list=res as Driver[]);
  }
  postDriver(){
    return this.http.post(this.baseURL,this.formData);
  }
  deleteDriver(id:number){
        return this.http.delete(`${this.baseURL}/${id}`);
  }
  putDriver(){

  }

}
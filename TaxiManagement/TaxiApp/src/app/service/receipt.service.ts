import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Driver} from "../model/driver.model";
import { Receipt } from '../model/receipt.model';
@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http:HttpClient) { }

  readonly baseURL='https://localhost:44375/api/Receipt';
  list:Receipt[];
  formData:Receipt=new Receipt();
  getReceipt(){
     return this.http.get(this.baseURL)
     .toPromise()
     .then(res=>this.list=res as Receipt[]);
  }
  postReceipt(){
    return this.http.post(this.baseURL,this.formData);
  }
  deleteDriver(id:number){
        return this.http.delete(`${this.baseURL}/${id}`);
  }
  putDriver(){

  }

}
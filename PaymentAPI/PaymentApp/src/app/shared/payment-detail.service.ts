import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {


  constructor(private http:HttpClient) { }
  formData:PaymentDetail=new PaymentDetail();
  readonly baseURL='https://localhost:44361/api/PaymentDetails';
  list:PaymentDetail[];
  postPaymentDetail()
  {
    return this.http.post(this.baseURL,this.formData);
  }
  getPaymentDetails()
  {
    return this.http.get(this.baseURL).toPromise().then(res=>this.list=res as PaymentDetail[]);
  }  
  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res=>this.list=res as PaymentDetail[]);
  }
  deletePaymentDetail(id:number)
  {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  paymentDetails:PaymentDetail[];
  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {

  }
  onSubmit(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res=>{
        form.resetForm();
        this.service.refreshList();
      },
      err=>{console.log(err);}
    )

  }
  

}

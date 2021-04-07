import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:PaymentDetail){
    this.service.formData=Object.assign({},selectedRecord); 
  }
  onDelete(selectedRecord:PaymentDetail){
   // this.service.formData=Object.assign({},selectedRecord); 
   console.log(selectedRecord.paymentDetailId);
    if(confirm('Are you sure to delete this record')){
      this.service.deletePaymentDetail(selectedRecord.paymentDetailId).subscribe(
        res=>{
         // this.service.formData=new PaymentDetail();
         console.log(selectedRecord.paymentDetailId);
          this.service.refreshList();
         
        },
        err=>{console.log(err)}
      );
     
    }
   
  }
}

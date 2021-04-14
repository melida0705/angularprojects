import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReceiptService } from '../service/receipt.service';

@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.component.html',
  styleUrls: ['./receipt-details.component.css']
})
export class ReceiptDetailsComponent implements OnInit {

  constructor(public service:ReceiptService) { }

  ngOnInit(): void {
    this.getReceipt();
  }
  getReceipt(){
    this.service.getReceipt();
  }
onDelete(id:number){

}
}

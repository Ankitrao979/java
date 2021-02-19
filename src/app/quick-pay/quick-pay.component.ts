import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-pay',
  templateUrl: './quick-pay.component.html',
  styleUrls: ['./quick-pay.component.css']
})
export class QuickPayComponent implements OnInit {

  private selectPayment: string;
  private isBillingAddress: boolean;

  constructor() { }

  ngOnInit() {
    this.selectPayment = 'cc';
    this.isBillingAddress = true; 
  }

  toggledPayments(paymentType) {

    this.selectPayment = 'cc';

    if (paymentType == "cc") {
      this.selectPayment == 'cc';
    } else if (paymentType == "bank") {
      this.selectPayment = 'bank';
    } else {
      this.selectPayment = 'paypal';
    }

  }

  toggledBilling() {

    this.isBillingAddress = !this.isBillingAddress;


    // if(this.isBillingAddress){
      // this.isBillingAddress = true;
    // }else
      // this.isBillingAddress = false
    // }
  }

  log(x){
    console.log(x);
  }
}

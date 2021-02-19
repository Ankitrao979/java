import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  private paymentMethodsInfo;
  private selectPayment: string;

  constructor() { }

  ngOnInit() {

    this.selectPayment = 'cc';

    this.paymentMethodsInfo = [
      { cardType: 'VISA ', cardNumber: '**** **** **** 7691'},
      { cardType: 'MASTER ', cardNumber: '**** **** **** 7691'},
      { cardType: 'VISA ', cardNumber: '**** **** **** 7691'},
      { cardType: 'VISA ', cardNumber: '**** **** **** 7691'}

    ]
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
}


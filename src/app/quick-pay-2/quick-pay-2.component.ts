import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentValidator } from './quick-pay-2.validator';

@Component({
  selector: 'app-quick-pay-2',
  templateUrl: './quick-pay-2.component.html',
  styleUrls: ['./quick-pay-2.component.css']
})
export class QuickPay2Component implements OnInit {

  private selectPayment: string;
  private isBillingAddress: boolean;

  constructor() { }

  private paymentForm: FormGroup = new FormGroup({
    'firstName': new FormControl('', [Validators.required, PaymentValidator.spacesNotAllowed, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[a-zA-Z]+')]),
    'lastName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(9), Validators.pattern('[a-zA-Z]+')]),
    'userName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(9), Validators.pattern('[a-zA-Z]+')]),
    'email': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    billingAddress: new FormGroup({
      'addressLane1': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'addressLane2': new FormControl(''),
      'city': new FormControl(''),
      'state': new FormControl(''),
      'zip': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]),
    }),
    mailingAddress: new FormGroup({
      'addressLane1': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'addressLane2': new FormControl(''),
      'city': new FormControl(''),
      'state': new FormControl(''),
      'zip': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6), Validators.pattern('[0-9]*')]),
    }),
    bankPayment: new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6), Validators.pattern('[a-zA-Z]')]),
      'accoutNumber': new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('[0-9]')]),
      'routingNumber': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('[0-9]')]),
    }),
    cardPayment: new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[a-zA-Z]+')]),
      'cardNumber': new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('[0-9]*')]),
      'expiration': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(9), Validators.pattern('[0-9]*')]),
      'cvv': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('[0-9]*')]),

    }),
    paypalPayment: new FormGroup({
      'userName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6), Validators.pattern('[a-zA-Z]+')]),
      'mobileNumber': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(16), Validators.pattern('[0-9]*')]),
    })
  })


  ngOnInit() {
    this.isBillingAddress = true;
    this.selectPayment = 'cc';
    // this.paymentForm.get('bankPayment').setValidators(null);
    // this.paymentForm.get('paypalPayment').setValidators(null);
    // this.paymentForm.get('bankPayment.name').setValidators(null);
    // this.paymentForm.get('bankPayment.routingNumber').setValidators(null);
    // this.paymentForm.get('bankPayment.accoutNumber').setValidators(null);
    // this.paymentForm.get('paypalPayment.userName').setValidators(null);
    // this.paymentForm.get('paypalPayment.mobileNumber').setValidators(null);
    // this.paymentForm.get('paypalPayment.password').setValidators(null);
    // this.paymentForm.get('mailingAddress.addressLane1').setValidators(null);
    // this.paymentForm.get('mailingAddress.addressLane2').setValidators(null);
    // this.paymentForm.get('mailingAddress.city').setValidators(null);
    // this.paymentForm.get('mailingAddress.state').setValidators(null);
    // this.paymentForm.get('mailingAddress.zip').setValidators(null);
  }

  toggledPayments(paymentType) {

    this.selectPayment = 'cc';

    if (paymentType == "cc") {
      this.selectPayment == 'cc';
      // this.paymentForm.get('bankPayment').setValidators(null);
      // this.paymentForm.get('paypalPayment').setValidators(null);
      // this.paymentForm.get('bankPayment.name').setValidators(null);
      // this.paymentForm.get('bankPayment.routingNumber').setValidators(null);
      // this.paymentForm.get('bankPayment.accoutNumber').setValidators(null);
      // this.paymentForm.get('paypalPayment.userName').setValidators(null);
      // this.paymentForm.get('paypalPayment.mobileNumber').setValidators(null);
      // this.paymentForm.get('paypalPayment.password').setValidators(null);
    } else if (paymentType == "bank") {
      this.selectPayment = 'bank';
      // this.paymentForm.get('cardPayment').setValidators(null);
      // this.paymentForm.get('paypalPayment').setValidators(null);
      // this.paymentForm.get('cardPayment.name').setValidators(null);
      // this.paymentForm.get('cardPayment.cardNumber').setValidators(null);
      // this.paymentForm.get('cardPayment.expiration').setValidators(null);
      // this.paymentForm.get('cardPayment.cvv').setValidators(null);
      // this.paymentForm.get('paypalPayment.userName').setValidators(null);
      // this.paymentForm.get('paypalPayment.mobileNumber').setValidators(null);
      // this.paymentForm.get('paypalPayment.password').setValidators(null);

    } else {
      this.selectPayment = 'paypal';
      // this.paymentForm.get('bankPayment').setValidators(null);
      // this.paymentForm.get('cardPayment').setValidators(null);
      // this.paymentForm.get('bankPayment.name').setValidators(null);
      // this.paymentForm.get('bankPayment.routingNumber').setValidators(null);
      // this.paymentForm.get('bankPayment.accoutNumber').setValidators(null);
      // this.paymentForm.get('cardPayment.name').setValidators(null);
      // this.paymentForm.get('cardPayment.cardNumber').setValidators(null);
      // this.paymentForm.get('cardPayment.expiration').setValidators(null);
      // this.paymentForm.get('cardPayment.cvv').setValidators(null);
    }

  }

  toggledBilling() {
    this.isBillingAddress = !this.isBillingAddress;
    // if(!this.isBillingAddress) {
    //   this.paymentForm.get('mailingAddress.addressLane1').setValidators(null);
    //   this.paymentForm.get('mailingAddress.addressLane2').setValidators(null);
    //   this.paymentForm.get('mailingAddress.city').setValidators(null);
    //   this.paymentForm.get('mailingAddress.state').setValidators(null);
    //   this.paymentForm.get('mailingAddress.zip').setValidators(null);
    // }
  }



  getBilling() {

    const billing = this.paymentForm.get('this.billingAddress');
    return billing;
  }


  log() {
    console.log(this.paymentForm)
  }

  isButtonEnables() {

    return this.paymentForm.valid
  }


}

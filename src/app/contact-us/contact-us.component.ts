import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactForm = new FormGroup({
    'firstName' : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]),
    'lastName' : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)])
  })


  log() {
    console.log(this.contactForm)
  }
  
}

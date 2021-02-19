import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUserRequest } from './src/model/register-user-req.interface';
import { RegistrationService } from './src/service/registration.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [RegistrationService]
})
export class SignUpComponent implements OnInit {

  systemMessage = {
    'message': 'some error occured',
    'messageType': 'error'
  };

  userRegistrationFg: FormGroup;

  constructor(private readonly registrationService: RegistrationService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generateUserRegistrationForm();
  }


  registerUser(formGroup: FormGroup) {

    const reqBody = formGroup.value as RegisterUserRequest;
    console.log(reqBody, 'reqBody');
    return 'success';
    //this.registrationService.registerUser(reqBody).subscribe(data => console.log(data), error => console.log(error));


    // this.registrationService.registerUser(reqBody).subscribe(res => {
    //   console.log(res);
    // })
  }

  generateUserRegistrationForm() {

    this.userRegistrationFg = new FormGroup({
      userId: new FormControl('shashank2103', [Validators.required]),
      firstName: new FormControl('shashank', [Validators.required]),
      lastName: new FormControl('rao', [Validators.required]),
      phoneNumber: new FormControl('1234567891', [Validators.required]),
      emailId: new FormControl('xyz@gmail.com', [Validators.required]),
      password: new FormControl('123456', [Validators.required]),
      address: new FormGroup({
        addressLane1: new FormControl('123 lane1', [Validators.required]),
        addressLane2: new FormControl('lane2', [Validators.required]),
        city: new FormControl('Henrico', [Validators.required]),
        state: new FormControl('VA', [Validators.required]),
        zipCode: new FormControl('23233', [Validators.required])
      })
    });

  }


}

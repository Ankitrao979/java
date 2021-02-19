import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './src/service/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [LoginService]
})
export class SignInComponent implements OnInit {
  hello: FormGroup;
  constructor(private readonly loginService: LoginService, formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.userLoginForm();
    this.loginService.loginUser({ userName: 'ankitrao@gmail.com', password: 'hello' }).subscribe();
  }

  userLoginForm() {
    // this.hello = new FormGroup({

    //   userName: new FormControl('shashank2103', [Validators.required]),
    //   password: new FormControl('123456', [Validators.required])

    // })
  }

}

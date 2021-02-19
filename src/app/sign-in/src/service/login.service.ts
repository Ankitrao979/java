import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginUserRequest } from '../model/login-user-request.interface';



@Injectable()
export class LoginService {

  private endPoint: string = environment.endPoint + '/v1/login';

  constructor(private http: HttpClient) { }

  loginUser(reqBody: LoginUserRequest) {

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    return this.http.post(this.endPoint, reqBody, options);
  }
}

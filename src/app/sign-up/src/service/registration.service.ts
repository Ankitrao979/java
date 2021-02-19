import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { RegisterUserRequest } from '../model/register-user-req.interface';

@Injectable()
export class RegistrationService {

  private endPoint: string = environment.endPoint + '/v1/registerUser';

  constructor(private http: HttpClient) { }

  registerUser(reqBody: RegisterUserRequest) {

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    return this.http.post(this.endPoint, reqBody, options);
  }
}

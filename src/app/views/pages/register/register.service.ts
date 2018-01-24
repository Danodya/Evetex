import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { RegisterUser} from './registerOrganizerUser';



@Injectable()
export class RegisterService {

  private webApi = 'http://localhost:3000/api/regsiter';
  private headers = new Headers({'Content-Type' : 'application/json'});

  constructor(private http: Http) { }

  register(registeruser: RegisterUser): Promise<RegisterUser> {
    return this.http.post(this.webApi, JSON.stringify(registeruser), {headers: this.headers})
      .toPromise()
      .then(function(response) {
        return response.json().data as RegisterUser;
      })
      .catch(function(error) {
        return Promise.reject(error);
      });
  }

}

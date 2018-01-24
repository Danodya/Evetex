import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GetUserService{

    constructor(protected http: Http){}

    public _get() {
       return this.http.get("http://localhost:3000/api/getUser/".concat(localStorage.getItem('user'))).map(user => user);
    }

}
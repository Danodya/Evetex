import { Injectable } from '@angular/core';

import {Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
class Add{
    success:boolean;
    status:string;
    id:string;
    imgArray:string[];


  }
@Injectable()
export class SidebarService {
addd:Add={
    success:false,
    status:'',
    id:'',
    imgArray:['']
}
private messageSource ;
constructor(){
  this.messageSource = new Subject<Add>();
}



    changeMessage(message:Add) {
        console.log(message);
        this.messageSource.next(message)
        console.log(this.messageSource);
       
      }

      getMessage():Observable<Add>{
          return this.messageSource.asObservable();
      }


}
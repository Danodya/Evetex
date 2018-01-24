import { GetUserService } from "app/services/getuser.service";
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-getuser',
    templateUrl: './getuser.component.html',
    styleUrls: [],
    providers:[GetUserService] 
  })
  export class GetUserComponent implements OnInit {
  
    protected user_temp: any;
    constructor(protected getUserService: GetUserService) { }

    ngOnInit() {}

    public _get(){
        this.getUserService._get().subscribe((user) => {
            console.log(user);
        });
    }
  

  }
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService}from '../../views/pages/login/login.service'
import {AutheService} from '../../views/pages/register/authe.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  
  constructor(
    private router: Router,
    private loginservice:loginService,private autheService:AutheService  ) { }
  isUserType:string;
  userType:string;
  ngOnInit() {
    if(!localStorage.getItem("user")) {
      
      this.router.navigate(['/pages/login']);
      
    }
 
    this.userType = JSON.parse(localStorage.getItem('usertype'));
    console.log('user'+this.userType);
    
    
  }
}

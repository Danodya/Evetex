import { Component, OnInit } from '@angular/core';
import { User} from './user';
import {FormGroup,FormControl,Validator} from '@angular/forms';
import { AutheService } from '../register/authe.service';
import { Router } from '@angular/router';
import { routes } from 'app/app.routing';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AutheService]
})


export class LoginComponent implements OnInit {
  isLoginFailed:boolean =false;
   private usertype:string;
   private token:any;
   private registeredUser:any; 
user:User ={
  username:"",
  password:"",
  usertype:""
}

  constructor(private autheService:AutheService,private router:Router) { }
 
  ngOnInit() {
    

  }

  login():void{

    console.log('in the login');
    console.log(this.user.username);
    console.log(this.user.password);
    this.autheService.authenticateUser(this.user).subscribe(data=>{
      console.log(data);
      if(data.success){
       this.autheService.storeUserData(data.token,data.user.usertype,data.user);
       // localStorage.setItem("user", JSON.stringify(data));
        this.router.navigate(['/profile']);
      }else{
        this.isLoginFailed =true;
      }
    });
      
  }

 

  register():void{
    console.log('go to register');
    this.router.navigate(['/pages/register']);

  }

}

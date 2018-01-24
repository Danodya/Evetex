import { Component, OnInit} from '@angular/core';
import{ RegisterUser } from './registerOrganizerUser';
import { AutheService } from './authe.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AutheService]
})

export class RegisterComponent implements OnInit {
 isvaliedemail:boolean=false;  
isfilled:boolean =false;
ispasswordMatch:boolean =true;
isServiceCatogory:boolean =false;
isusertype:boolean=false;
registeruser:RegisterUser ={
  firstname: "",
  lastname:  "",
  username: "",
  email:"",
  password: "",
  confirmpassword: "",
  usertype: "",
  spCatagory:""
  

}


isRegistrationFailed: boolean = false;

  constructor( private  autheService: AutheService, private router:Router) { 

  }

  ngOnInit(){

    if(localStorage.getItem("user")) {
      this.router.navigate(['profile']);
    }
  }
  

  isOrganizer():void{
    this.registeruser.usertype ="";
this.registeruser.usertype ="organizer"

  }
  isSpProvider():void{

    this.registeruser.usertype ="";
    this.registeruser.usertype ="service_provider"
  }

  isAdmin():void{

this.registeruser.usertype ="";
this.registeruser.usertype ="Admin";

  }


//register user
validateEmail(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);

}

register():void{
  
  console.log("registration success");
  if(!this.registeruser.firstname || !this.registeruser.lastname || !this.registeruser.username || !this.registeruser.email|| !this.registeruser.password || !this.registeruser.confirmpassword){
        this.isfilled = true;
        console.log('not feeld'+this.isfilled);
  
}
if(!this.validateEmail(this.registeruser.email)){
  console.log('invalide email');
}
if(this.registeruser.usertype==''){
  this.isusertype =true;

}else if((this.registeruser.usertype =='service_provider') && this.registeruser.spCatagory==''){
    this.isServiceCatogory =true;
    console.log( 'in thee');



  }else if((this.registeruser.password =='') || (this.registeruser.confirmpassword=='')){
  this.ispasswordMatch =false;
console.log('password null '+ this.registeruser.password);

}else if(!(this.registeruser.password == this.registeruser.confirmpassword)  ){
  this.ispasswordMatch =false;
  console.log('in tha pass');



}else if(!this.validateEmail(this.registeruser.email)){
  this.isvaliedemail =true
}else{
  this.autheService.registerUser(this.registeruser).subscribe(data=>{
    console.log('data'+data);
    if(data.success){
      localStorage.setItem("user", JSON.stringify(data));
      this.router.navigate(['/pages/login']);
    }else{
      console.log('error regsiter');
      this.isRegistrationFailed = true;
    }});
  
    }

  }
    
 

}






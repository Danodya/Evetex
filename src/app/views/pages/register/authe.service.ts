import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import{ RegisterUser } from './registerOrganizerUser';
import { Router } from '@angular/router';
 

@Injectable()

export class AutheService{
  authToken:any;
  user:any;
  private webApi_register = 'http://localhost:3000/api/register';
  private webApi_authenticate = 'http://localhost:3000/api/authenticate';
  private headers = new Headers({'Content-Type' : 'application/json'});
  constructor(private http: Http,private router: Router) { }

  private usertype:string;
  private token:any;
  private registeredUser:any;

  getUsertype():any{
 
      console.log('this is servie user  '+ this.usertype);
      return this.usertype;
   
    
  }

  registerUser(user){
return this.http.post(this.webApi_register,user,{headers: this.headers})
.map(res=>res.json());

  }

  authenticateUser(user){
return this.http.post(this.webApi_authenticate,user,{headers: this.headers})
.map(res=>{
return res.json();

});
  }


  storeUserData(token,usertype,user){
    console.log('here token'+token);
    console.log('here usertype'+usertype);
    console.log(user);
    localStorage.setItem('id_token',token);
    localStorage.setItem('usertype',JSON.stringify(usertype));
    localStorage.setItem('user',JSON.stringify(user.id));
    this.usertype =usertype;
    this.token =token;
    this.registeredUser =user;
  }

  logOut(){
this.authToken =null;
this.usertype =null;
this.user =null;
localStorage.clear();

this.router.navigate(['/pages/login']);


  }

}
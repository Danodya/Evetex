import { Component, OnInit } from '@angular/core';
import { AuthService } from '../chatservice/auth.service'
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router'
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.scss'],
  providers:[AuthService]
})
export class ChatNavbarComponent { 

userType:string;
  user: Observable<firebase.User>;
  userEmail: string;

  constructor(private authService: AuthService,private router :Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.user.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
    this.userType = JSON.parse(localStorage.getItem('usertype'));
  }
  goEvent(){

this.router.navigate(['/eventbody']);

  }
  logout() {
    this.authService.logout();
  }


}
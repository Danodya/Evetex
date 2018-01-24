import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService  } from '../chatservice/auth.service';
@Component({
  selector: 'app-signup-form',
  templateUrl: './chat-signup-form.component.html',
  styleUrls: ['./chat-signup-form.component.scss'],
  providers:[AuthService]
})
export class ChatSignUpComponent {

  email: string;
  password: string;
  displayName: string;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) { }

  signUp() {
    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;
    this.authService.signUp(email, password, displayName)
      .then(resolve => this.router.navigate(['/chat/chatroom']))
      .catch(error => this.errorMsg = error.message);
  }


 }






import { Routes } from '@angular/router';
import { ChatLoginFormComponent } from '../chat-login-form/chat-login-form.comoponent';
import { ChatSignUpComponent } from '../chat-signup-form/chat-signup-form.comoponent';


export const appRoutes: Routes = [
    { path: 'signup', component: ChatSignUpComponent },
    { path: 'login', component: ChatLoginFormComponent },
   

];
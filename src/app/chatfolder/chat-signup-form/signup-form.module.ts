import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChatUserListComponent}from '../chat-userlist/chat-userlist.comoponent';
import { AngularFireModule } from 'angularfire2';
import {ChatSignUpComponent}from './chat-signup-form.comoponent';
import {ChatsignUpRoutingModule} from './chatsignup-routing.module';
@NgModule({
  imports: [
    ChartsModule,
    ChatsignUpRoutingModule,
    AngularFireModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [ChatSignUpComponent
   
  ]
})
export class SignUpModule{


 }
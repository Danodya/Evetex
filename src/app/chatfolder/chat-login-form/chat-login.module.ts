import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChatUserListComponent}from '../chat-userlist/chat-userlist.comoponent';
import { AngularFireModule } from 'angularfire2';
import {ChatLoginFormComponent}from './chat-login-form.comoponent';
import {ChatLoginRoutingModule} from './chat-login.routing.module';
@NgModule({
  imports: [
    ChartsModule,
    ChatLoginRoutingModule,
    AngularFireModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [ChatLoginFormComponent
   
  ]
})
export class LoginModule{


 }
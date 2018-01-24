import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChatUserListComponent}from '../chat-userlist/chat-userlist.comoponent'
import {ChatFeedComponent}from '../chat-feed/chat-feed.comoponent';
import {ChatMessageComponent}from '../chat-message/chat-message.comoponent' 

@NgModule({
  imports: [
  
    ChartsModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [
    // ChatMessageComponent,

  ]
})
export class ChatFeedModule{ }
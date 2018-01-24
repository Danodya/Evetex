import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ChatRoomComponent } from './chat-room.component';
import {ChatRoomRoutingModule } from './chat-room.routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChatUserListComponent}from '../chat-userlist/chat-userlist.comoponent'
import {ChatFeedModule}from '../chat-feed/chat-feed.module';
import {ChatFeedComponent}from '../chat-feed/chat-feed.comoponent';
import {ChatFormComponent}from '../chat-form/chat-form.comoponent';
import {ChatMessageComponent}from '../chat-message/chat-message.comoponent';
import { AngularFireModule } from 'angularfire2';
import {FilterPipe} from '../filter.pipe'
import {UserItem} from '../user-item/user-item.component'
@NgModule({
  imports: [
    ChatRoomRoutingModule,
    ChartsModule,
    AngularFireModule,
    // ChatFeedModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [ ChatRoomComponent,
    ChatUserListComponent,
    ChatFeedComponent,
    ChatFormComponent,
    ChatMessageComponent,
    UserItem,
    FilterPipe
  ]
})
export class ChatRoomModule{ }
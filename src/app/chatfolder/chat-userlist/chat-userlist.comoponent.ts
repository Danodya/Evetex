import { Component, OnInit } from '@angular/core';
import { User } from '../chatmodel/user.model'
import { ChatService } from '../chatservice/chat-servie';

@Component({
  selector: 'app-chat-userlist',
  templateUrl: './chat-userlist.component.html',
  styleUrls: ['./chat-userlist.component.scss'],
})
export class ChatUserListComponent {


  users: User[];
  
    constructor(chat: ChatService) {
      chat.getUsers().subscribe(users => {
        this.users = users;
      });
    }

 }
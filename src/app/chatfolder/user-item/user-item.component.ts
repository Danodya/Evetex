import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chatservice/chat-servie';
import { User } from '../chatmodel/user.model';

@Component({
    selector: 'app-chat-useritem',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.scss'],
  })
  

  export class UserItem{

    @Input() user: User;
    
      constructor() { }
    
      ngOnInit() {
      }

  }
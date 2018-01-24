import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chatservice/chat-servie';
import { AuthService } from '../chatservice/auth.service';
import { ChatMessage } from '../chatmodel/chat.model';
@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent { 


    @Input() chatMessage: ChatMessage;
    userEmail: string;
    userName: string;
    messageContent: string;
    timeStamp: Date = new Date();
    isOwnMessage: boolean;
    ownEmail: string

    ngOnInit(chatMessage = this.chatMessage) {
        this.messageContent = chatMessage.message;
        this.timeStamp = chatMessage.timeSent;
        this.userEmail = chatMessage.email;
        this.userName = chatMessage.name;
      }



}
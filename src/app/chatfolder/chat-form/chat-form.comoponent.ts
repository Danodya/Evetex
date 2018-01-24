import { Component } from '@angular/core';
import {ChatService} from '../chatservice/chat-servie'

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss'],
  providers:[ChatService]
})
export class ChatFormComponent { 
    message: string;
constructor(private chat:ChatService){}


ngOnInit() {
}

send() {
  this.chat.sendMessage(this.message);
  this.message = '';
}

handleSubmit(event) {
  if (event.keyCode === 13) {
    this.send();
  }
}

}
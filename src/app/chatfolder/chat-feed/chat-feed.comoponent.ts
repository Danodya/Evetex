import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../chatservice/chat-servie';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../chatmodel/chat.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.scss'],
})
export class ChatFeedComponent { 

    chatMessage:string;
    feed: FirebaseListObservable<ChatMessage[]>;
    
      constructor(private chat: ChatService) { }

      ngOnInit() {
        this.feed = this.chat.getMessages();
      }
    
      ngOnChanges() {
        this.feed = this.chat.getMessages();
      }

}
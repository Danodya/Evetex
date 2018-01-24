import { Injectable,OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
//import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../chatmodel/chat.model';
@Injectable()
export class ChatService implements OnInit{


  eventId:string ;
    user: firebase.User;
    chatMessages: FirebaseListObservable<ChatMessage[]>;
    chatMessage: ChatMessage;
    userName: Observable<string>;
  
    constructor(
      private db: AngularFireDatabase,
      private afAuth: AngularFireAuth
      ) {
          this.afAuth.authState.subscribe(auth => {
            if (auth !== undefined && auth !== null) {
              this.user = auth;
            }
  
            this.getUser().subscribe(a => {
              this.userName = a.displayName;
            });
          });

          
      }
    ngOnInit() {

      this.eventId ==JSON.parse(localStorage.getItem('eventid'));
      console.log(this.eventId);
    }
    getUser() {
      const userId = this.user.uid;
      const path = `/users/${userId}`;
      return this.db.object(path);
    }
  
    getUsers() {
      const path = '/users';
      return this.db.list(path);
    }
  
    sendMessage(msg: string) {
      const timestamp = this.getTimeStamp();
      const email = this.user.email;
     console.log('succes fully before');
    // const email = "rashan@gamil.com";
      this.chatMessages = this.getMessages();
      this.chatMessages.push({
        message: msg,
        name: this.userName,
        timeSent: timestamp,
      
        //userName:"rashan",
        oemail: email });
        console.log('succes fully');
    }
  
    getMessages(): FirebaseListObservable<ChatMessage[]> {
      // query to create our message feed binding
      this.eventId = JSON.parse(localStorage.getItem('eventid'));
      console.log(this.eventId);
      return this.db.list('group1', {
        query: {
          limitToLast: 25,
          orderByKey: true
        }
      });
    }
  
    getTimeStamp() {
      const now = new Date();
      const date = now.getUTCFullYear() + '/' +
                   (now.getUTCMonth() + 1) + '/' +
                   now.getUTCDate();
      const time = now.getUTCHours() + ':' +
                   now.getUTCMinutes() + ':' +
                   now.getUTCSeconds();
  
      return (date + ' ' + time);
    }


}
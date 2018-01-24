import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../chatmodel/user.model';

@Injectable()
export class  AuthService {

  userType:string;
    private user: Observable<firebase.User>;
    private authState: any;
  
    constructor(private afAuth: AngularFireAuth,
      private db: AngularFireDatabase,
      private router: Router) {
        this.user = afAuth.authState;
        this.userType = JSON.parse(localStorage.getItem('usertype'));
      }
  
      authUser() {
        return this.user;
      }
  
      get currentUserId(): string {
        return this.authState !== null ? this.authState.uid : '';
      }
  
      login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
          .then((user) => {
            this.authState = user;
            this.setUserStatus('online');
            this.router.navigate(['/chat/chatroom']);
          });
      }

      logout() {
       
        this.afAuth.auth.signOut();
        console.log(this.userType);
        if(this.userType == "service_provider"){
          this.router.navigate(['/eventlogin']);
        }
        if(this.userType == 'organizer'){
          this.router.navigate(['/eventbody']);
        }
      
        
      }
  
      signUp(email: string, password: string, displayName: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log('in service');
                  this.authState = user;
                  const status = 'online';
                  this.setUserData(email, displayName, status);
                }).catch(error => console.log(error));
      }
  
      setUserData(email: string, displayName: string, status: string): void {
        const path = `users/${this.currentUserId}`;
        const data = {
          email: email,
          displayName: displayName,
          status: status
        };
  
        this.db.object(path).update(data)
          .catch(error => console.log(error));
      }
  
      setUserStatus(status: string): void {
        const path = `users/${this.currentUserId}`;
  
        const data = {
          status: status
        };
  
        this.db.object(path).update(data)
          .catch(error => console.log(error));
      }


}
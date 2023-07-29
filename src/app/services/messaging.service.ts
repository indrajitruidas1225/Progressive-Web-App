import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  token = null;

  constructor(private afMessaging: AngularFireMessaging) {}

  requestPermission() {
    return this.afMessaging.requestToken.pipe(
      tap(token => {
        alert("Your token is :  " +token);
        console.log('Store token to server: ', token);
      })
    );
  }

  getMessages() {
    return this.afMessaging.messages;
  }

  deleteToken() {
    if (this.token) {
      this.afMessaging.deleteToken(this.token);
      this.token = null;
    }
  }
}

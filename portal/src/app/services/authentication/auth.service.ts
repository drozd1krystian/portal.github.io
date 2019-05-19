import { Injectable } from '@angular/core';
import { longStackSupport } from 'q';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private angularFire: AngularFireAuth, private router: Router) {
    angularFire.authState.subscribe(user => {
      this.user = user;
    });
  }

  login(email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password).then(user => {
      console.log(user);
      console.log(this.angularFire.authState);
      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err);
    });
  }

  signup(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password).then(user => {
      console.log(user);
      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err);
    });

  }

  logout() {
    this.angularFire.auth.signOut();
    console.log(this.angularFire.authState);
    
  }
}

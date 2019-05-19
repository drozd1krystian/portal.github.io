import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'; // router do przechodzenia na inne okna
import { auth } from 'firebase';
import { User } from './user'; // import naszego interfejsu uzytkownika
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: User = null;


  constructor(public angularFire: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone) {


    /* Saving user data in localstorage when
logged in and setting up null when logged out */
    angularFire.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  login(email: string, password: string) {
    this.angularFire.auth.signInWithEmailAndPassword(email, password).then(user => {

      this.ngZone.run(() => {
        this.router.navigate(['/']);
      });


    }).catch((error) => {
      window.alert('Podano nieprawidłowy email/hasło.');
    });

  }

  public getUserData(): User {
    return this.userData;
  }


  signup(email: string, password: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password).then(user => {
      this.SendVerificationMail();
      this.setUserData(user.user);
      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err);
      window.alert(err);
    });

  }



  // Sign in with Facebook
  facebookAuth() {
    return this.authLogin(new auth.FacebookAuthProvider());
  }

  // Sign in with Google
  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  async authLogin(provider) {
    try {
      const result = await this.angularFire.auth.signInWithPopup(provider);
      console.log('logged in with fb');
    } catch (error) {
      console.log(error);
    }
  }

  async SendVerificationMail() {
    await this.angularFire.auth.currentUser.sendEmailVerification();
    this.router.navigate(['verify-email-address']);
  }

  // Reset Forggot password
  async forgotPassword(passwordResetEmail) {
    try {
      await this.angularFire.auth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Wysłano instrukcję resetowania hasła. Sprawdź e-mail');
    } catch (error) {
      window.alert(error);
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }



 // ustawia dane usera ktore zwroci nam system logowania, zapisuje je do zmiennej userData ale tez do bazy
  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }
  // Sign out


  async logout() {
    // usuwanie tokena firestore, czyszczenie danych z lokalnej pamieci + usuwanie danych ze zmiennej userData
    await this.angularFire.auth.signOut();
    this.userData = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}

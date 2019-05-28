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
  public zalogowanyPrzez = 'login/haslo';
  nicker: string;


  constructor(public angularFire: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router,
    public ngZone: NgZone) {


    /* Saving user data in localstorage when
logged in and setting up null when logged out */
    angularFire.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.zalogowanyPrzez = user.providerData.shift().providerId;
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

  public setUserNick(nick: string) {

    this.userData.displayName = nick;

  }

  signup(email: string, password: string, nick: string) {
    this.angularFire.auth.createUserWithEmailAndPassword(email, password).then(user => {
      this.SendVerificationMail();
      this.nicker=nick;
      user.user.updateProfile({
        displayName: nick

      });
      this.setUserData(user.user);

      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err);
      window.alert(err);
    });

  }
  setNickname() {
    console.log('no witam');
    console.log(this.zalogowanyPrzez);
    return this.afs
      .collection('users')
      .doc(this.userData.uid)
      .update({ displayName: this.userData.displayName }).then(value => {

        console.log(this.userData.displayName);
        console.log('updatnieto nickora');
      }).catch(value => {
        console.log('bugi:');
        console.log(value);
      });


  }


  // Sign in with Facebook
  facebookAuth() {
    this.zalogowanyPrzez = 'facebook';
    return this.authLogin(new auth.FacebookAuthProvider());
  }

  // Sign in with Google
  googleAuth() {
    this.zalogowanyPrzez = 'google+';
    return this.authLogin(new auth.GoogleAuthProvider());

  }

  async authLogin(provider) {
    try {
      let result = await this.angularFire.auth.signInWithPopup(provider);
      console.log('logged in with' + provider);
      this.setUserData(this.userData);

      this.router.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }

  async SendVerificationMail() {
    await this.angularFire.auth.currentUser.sendEmailVerification();
    window.alert("wyslano email z weryfikacja!");
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
    let user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  czyMaZdjecie(link) {
    if (link) {
      return link;
    }
    else {
      return 'brak';
    }

  }

  czyMaNick(name) {
    if (name) {
      return name;
    }
    else {
      return this.nicker;
    }

  }


  // ustawia dane usera ktore zwroci nam system logowania, zapisuje je do zmiennej userData ale tez do bazy
  setUserData(user) {
    let userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    let userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: this.czyMaNick(user.displayName),
      photoURL: this.czyMaZdjecie(user.photoURL),
      emailVerified: user.emailVerified
    };

    userRef.set(userData, {
      merge: true
    });

  }



  async logout() {
    this.zalogowanyPrzez = 'login/haslo';
    // usuwanie tokena firestore, czyszczenie danych z lokalnej pamieci + usuwanie danych ze zmiennej userData
    await this.angularFire.auth.signOut();
    this.userData = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}

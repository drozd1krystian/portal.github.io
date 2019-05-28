import { AuthService } from './../../services/authentication/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wstaw-komentarz',
  templateUrl: './wstaw-komentarz.component.html',
  styleUrls: ['./wstaw-komentarz.component.scss']
})
export class WstawKomentarzComponent implements OnInit {
  wiadomosc: string;
  @Input() memId;
  awatar;

  constructor(public db: AngularFirestore, public ats: AuthService) {
  }

  ngOnInit() {
    this.db.collection('users').doc(this.ats.userData.uid).ref.get().then(value => {
      const data = value.data();
      this.awatar = data.photoURL;
    });
  }
  public dodajKomentarz(memId){
    this.db.collection('users').doc(this.ats.userData.uid).ref.get().then(value => {
      const data = value.data();
      this.db.collection('memy').doc(memId).collection('komentarze').add({
        awatar: data.photoURL,
        user: data.displayName,
        wiadomosc: this.wiadomosc,
        komenatrze: {}
      });
    });
  }
}

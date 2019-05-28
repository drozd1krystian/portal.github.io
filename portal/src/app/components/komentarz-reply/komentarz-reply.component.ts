import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-komentarz-reply',
  templateUrl: './komentarz-reply.component.html',
  styleUrls: ['./komentarz-reply.component.scss']
})
export class KomentarzReplyComponent implements OnInit {

  wiadomosc: string;
  @Input() komId;
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
      this.db.collection('memy').doc(memId).collection('komentarze')
      .doc(this.komId).
      collection('komentarze').add({
        awatar: data.photoURL,
        user: data.displayName,
        wiadomosc: this.wiadomosc,
      });
    });
  }

}

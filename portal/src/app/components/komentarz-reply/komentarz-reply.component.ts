import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { keyframes } from '@angular/animations';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-komentarz-reply',
  templateUrl: './komentarz-reply.component.html',
  styleUrls: ['./komentarz-reply.component.scss']
})
export class KomentarzReplyComponent implements OnInit {

  wiadomosc: string;
  @Input() komId;
  @Input() memId;
  @Input() replyId;
  awatar;
  show = false;

  constructor(public db: AngularFirestore, public ats: AuthService) {
  }
  ngOnInit() {
    if (this.ats.userData != null){
      this.db.collection('users').doc(this.ats.userData.uid).ref.get().then(value => {
        const data = value.data();
        this.awatar = data.photoURL;
      });
    }

  }
  public dodajKomentarz(memId){
    const empty = this.wiadomosc;
    if (this.wiadomosc.length >= 5){
    this.db.collection('users').doc(this.ats.userData.uid).ref.get().then(value => {
      const data = value.data();
      this.db.collection('memy').doc(memId).collection('komentarze')
      .doc(this.komId).
      collection('komentarze').add({
        awatar: data.photoURL,
        user: data.displayName,
        wiadomosc: empty,
        data: new Date()
      });
    });
    this.wiadomosc = null;
  }
}


}

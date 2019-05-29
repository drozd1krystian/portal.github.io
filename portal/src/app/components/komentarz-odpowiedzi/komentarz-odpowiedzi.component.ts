import { Component, OnInit, Input } from '@angular/core';
import { FireStoreServicesService } from 'src/app/services/fire-store-services.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { map } from 'rxjs/internal/operators/map';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-komentarz-odpowiedzi',
  templateUrl: './komentarz-odpowiedzi.component.html',
  styleUrls: ['./komentarz-odpowiedzi.component.scss']
})
export class KomentarzOdpowiedziComponent implements OnInit {
  @Input() memId: string;
  @Input() komId:string;
  komentarze: Observable<any[]>;
  showReply = false;
  user;
  constructor(public asf: FireStoreServicesService,public ats: AuthService, private db: AngularFirestore){
  }


  ngOnInit() {
    this.pobierzeKomentarze();
    this.db.collection('users').doc(this.ats.userData.uid).ref.get().then(value => {
      const data = value.data();
      this.user = data.displayName;
    });
  }

  public pobierzeKomentarze(){
    this.komentarze = this.db.collection('memy')
      .doc(this.memId)
      .collection('komentarze')
      .doc(this.komId)
      .collection('komentarze', ref => ref.orderBy('data', 'asc'))
      .snapshotChanges().pipe(map(value=>{
        return value.map(k =>{
          const id = k.payload.doc.id;
          const data = k.payload.doc.data();
          return {id, ...data};
        });
      }));
  }
  trackByIdx(i){
    return i;
  }
  public usunKomentarz(memId, komId,replyId) {
    this.db.collection('memy').doc(memId).collection('komentarze')
    .doc(komId).collection('komentarze').doc(replyId).delete();
  }

}

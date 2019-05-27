import { Component, OnInit, Input } from '@angular/core';
import { FireStoreServicesService } from 'src/app/services/fire-store-services.service';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-komentarze',
  templateUrl: './komentarze.component.html',
  styleUrls: ['./komentarze.component.scss']
})
export class KomentarzeComponent implements OnInit {
  @Input() memId: string;
  komentarze: Observable<any[]>;
  constructor(public asf: FireStoreServicesService,public ats: AuthService, private db: AngularFirestore){
  }


  ngOnInit() {
    this.pobierzeKomentarze();
  }

  public pobierzeKomentarze(){
    this.komentarze = this.db.collection('memy')
      .doc(this.memId)
      .collection('komentarze')
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

}

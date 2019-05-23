import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireStoreServicesService {
  id: string;
  constructor(private db: AngularFirestore) { }

  public getMemyZKategori(kategoria) {
    const memy = this.db.collection('memy', ref => ref.where('kategoria', '==', kategoria))
      .snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
    return memy;
  }
  public getDocId(link) {
    const docId = this.db.collection('memy', ref => ref.where('link', '==', link).limit(1)).snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const id = a.payload.doc.id;
          return id;
        });
      }));
    return docId;
  }
  public getUser(userId: string) {
    const userzy = this.db.collection('users', ref => ref.where('uid', '==', userId))
      .snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
    return userzy;
  }

}

import { MidColumnComponent } from './../components/mid-column/mid-column.component';
import { AngularFirestore} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {map, tap, } from 'rxjs/operators';
import * as _ from 'lodash';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireStoreServicesService {

  batch = 20;
  theEnd = false;
  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;

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
    .pipe(map(actions =>{
      return actions.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data();
        return {id, ...data};
      });
    }));
    return docId;
  }

  // MEMY Z KATEGORII //
  getBatchKategoria(offset, kat: string) {
    console.log(offset);
    return this.db
      .collection('memy', ref =>
        ref
          .where('kategoria', '==', kat)
          .orderBy('dataDodania')
          .startAfter(offset)
          .limit(this.batch)
      )
      .snapshotChanges()
      .pipe(
        tap(arr => (arr.length ? null : (this.theEnd = true))),
        map(arr => {
          return arr.reduce((acc, cur) => {
            const id = cur.payload.doc.id;
            const data = cur.payload.doc.data();
            return {...acc, [id]: data};
          }, {});
        })
      );
  }
  getBatchNajlepsze(offset, ocena) {
    console.log(offset);
    return this.db
      .collection('memy', ref =>
        ref
          .orderBy('ocena')
          .startAfter(100)
          .limit(this.batch)
      )
      .snapshotChanges()
      .pipe(
        tap(arr => (arr.length ? null : (this.theEnd = true))),
        map(arr => {
          return arr.reduce((acc, cur) => {
            const id = cur.payload.doc.id;
            const data = cur.payload.doc.data();
            return {...acc, [id]: data};
          }, {});
        })
      );
  }
  returnTheEnd(){
    return this.theEnd;
  }
  itemSort(a, b) {
    if (a.dataDodania < b.dataDodania) {
      return 1;
    } else if (a.dataDodania > b.dataDodania) {
      return -1;
    }
    return 0;
 }

}

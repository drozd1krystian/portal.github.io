import { MidColumnComponent } from './../components/mid-column/mid-column.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {map, tap, scan, mergeMap, throttleTime} from 'rxjs/operators';
import * as _ from 'lodash';
import { Observable, BehaviorSubject } from 'rxjs';
import {ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

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
          .where('ocena', '>=' , 100)
          .orderBy('ocena')
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
  returnTheEnd(){
    return this.theEnd;
  }

}

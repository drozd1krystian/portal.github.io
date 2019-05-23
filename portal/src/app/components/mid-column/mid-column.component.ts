import { FireStoreServicesService } from './../../services/fire-store-services.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {map, tap, scan, mergeMap, throttleTime} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-mid-column',
  templateUrl: './mid-column.component.html',
  styleUrls: ['./mid-column.component.scss']
})
export class MidColumnComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  batch = 20;
  theEnd = false;
  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );

    this.infinite = batchMap.pipe(map(v => Object.values(v)));
    this.infinite.forEach(a => {
      console.log(a);
    });
  }

  getBatch(offset) {
    console.log(offset);
    return this.db
      .collection('memy', ref =>
        ref
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

  nextBatch(e, offset) {
    if (this.theEnd) {
      return;
    }

    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    console.log(`${end}, '>=', ${total}`);
    if (end === total) {
      this.offset.next(offset);
    }
  }

  trackByIdx(i) {
    return i;
  }
  ngOnInit(){

  }
  public getSize(url) {
    const img = new Image();
    img.src = url;
    const maxWidth = 680;
    if (img.width > maxWidth){
    const ratio = maxWidth / img.width;
    return img.height * ratio;
    }
  }
}

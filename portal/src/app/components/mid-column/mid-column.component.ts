import { MemComponent } from './../mem/mem.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {map, tap, scan, mergeMap, throttleTime} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-mid-column',
  templateUrl: './mid-column.component.html',
  styleUrls: ['./mid-column.component.scss']
})
export class MidColumnComponent implements OnInit {
  infinite: Observable<any[]>;

  constructor(public db: AngularFirestore) {
    this.infinite = this.db.collection('memy', ref => ref
    .where('ocena', '<', 100))
    .snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }
  ngOnInit() {
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

import { FireStoreServicesService } from './../../services/fire-store-services.service';
import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit, ViewChild  } from '@angular/core';
import {map, tap, scan, mergeMap, throttleTime} from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sekcja-smieszne',
  templateUrl: './sekcja-smieszne.component.html',
  styleUrls: ['./sekcja-smieszne.component.scss']
})
export class SekcjaSmieszneComponent implements OnInit  {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  batch = 20;
  theEnd = false;
  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;

  constructor(public asf: FireStoreServicesService, public mem: MidColumnComponent) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.asf.getBatchKategoria(n,'Śmieszne')),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );
    this.infinite = batchMap.pipe(map(v => Object.values(v)));
   }
   nextBatch(e, offset) {
    if (this.asf.returnTheEnd) {
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
  ngOnInit() {
  }
}

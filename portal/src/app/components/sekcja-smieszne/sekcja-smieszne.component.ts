import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { TableModule } from 'angular-bootstrap-md';
import {map, tap, scan, mergeMap, throttleTime} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-sekcja-smieszne',
  templateUrl: './sekcja-smieszne.component.html',
  styleUrls: ['./sekcja-smieszne.component.scss']
})
export class SekcjaSmieszneComponent implements OnInit  {
  theEnd = false;
  memy = this.db.collection('memy', ref => ref.where('kategoria', '==', 'śmieszne')).valueChanges();

  constructor(private db: AngularFirestore, private mem: MidColumnComponent) {

   }
  ngOnInit() {
  }
}

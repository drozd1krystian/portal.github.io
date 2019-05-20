import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as _ from 'lodash';

@Component({
  selector: 'app-sekcja-smieszne',
  templateUrl: './sekcja-smieszne.component.html',
  styleUrls: ['./sekcja-smieszne.component.scss']
})
export class SekcjaSmieszneComponent implements OnInit  {
  theEnd = false;
  memy = this.db.collection('memy', ref => ref.orderBy('dataDodania').where('kategoria', '==', 'Śmieszne')).valueChanges();

  constructor(private db: AngularFirestore, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }
}
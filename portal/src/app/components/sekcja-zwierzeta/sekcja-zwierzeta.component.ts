import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as _ from 'lodash';

@Component({
  selector: 'app-sekcja-zwierzeta',
  templateUrl: './sekcja-zwierzeta.component.html',
  styleUrls: ['./sekcja-zwierzeta.component.scss']
})
export class SekcjaZwierzetaComponent implements OnInit {

  theEnd = false;
  memy = this.db.collection('memy', ref => ref.orderBy('dataDodania').where('kategoria', '==', 'Zwierzęta')).valueChanges();

  constructor(private db: AngularFirestore, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }

}

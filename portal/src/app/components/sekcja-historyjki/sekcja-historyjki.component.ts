import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sekcja-historyjki',
  templateUrl: './sekcja-historyjki.component.html',
  styleUrls: ['./sekcja-historyjki.component.scss']
})
export class SekcjaHistoryjkiComponent implements OnInit {

  theEnd = false;
  memy = this.db.collection('memy', ref => ref.orderBy('dataDodania').where('kategoria', '==', 'Historyjki')).valueChanges();

  constructor(private db: AngularFirestore, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }

}

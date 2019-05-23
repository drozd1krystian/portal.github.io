import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-sekcja-niesmieszne',
  templateUrl: './sekcja-niesmieszne.component.html',
  styleUrls: ['./sekcja-niesmieszne.component.scss']
})
export class SekcjaNiesmieszneComponent implements OnInit {

  theEnd = false;
  memy = this.db.collection('memy', ref => ref.orderBy('dataDodania').where('kategoria', '==', 'Nieśmieszne')).valueChanges();

  constructor(private db: AngularFirestore, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }

}

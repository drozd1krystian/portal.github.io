import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sekcja-najnowsze',
  templateUrl: './sekcja-najnowsze.component.html',
  styleUrls: ['./sekcja-najnowsze.component.scss']
})
export class SekcjaNajnowszeComponent implements OnInit {

  theEnd = false;
  todaysDate = new Date();
  memy = this.db.collection('memy', ref => ref.orderBy('dataDodania').where('dataDodania', '>=', 'todaysDate')).valueChanges();

  constructor(private db: AngularFirestore, public mem: MidColumnComponent) {
   }
  ngOnInit() {
    this.todaysDate.setDate(this.todaysDate.getDate() - 7);
  }

}

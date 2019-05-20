import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sekcja-najlepsze',
  templateUrl: './sekcja-najlepsze.component.html',
  styleUrls: ['./sekcja-najlepsze.component.scss']
})
export class SekcjaNajlepszeComponent implements OnInit {

  theEnd = false;
  ocena = 100;
  memy = this.db.collection('memy', ref => ref.orderBy('ocena').
  orderBy('dataDodania', 'desc').where('ocena', '>=', this.ocena)).valueChanges();

  constructor(private db: AngularFirestore, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }
}

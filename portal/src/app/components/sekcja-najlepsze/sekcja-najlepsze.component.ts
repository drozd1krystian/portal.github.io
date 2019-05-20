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
  memy = this.db.collection('memy', ref => ref.orderBy('dataDodania').where('ocena', '>=', '100')).valueChanges();

  constructor(private db: AngularFirestore, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }
}

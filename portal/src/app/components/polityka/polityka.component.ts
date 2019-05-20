import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-polityka',
  templateUrl: './polityka.component.html',
  styleUrls: ['./polityka.component.scss']
})
export class PolitykaComponent implements OnInit {

  theEnd = false;
  memy = this.db.collection('memy', ref => ref.orderBy('dataDodania').where('kategoria', '==', 'Polityka')).valueChanges();

  constructor(private db: AngularFirestore, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }

}

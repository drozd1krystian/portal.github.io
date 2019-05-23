import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sekcja-zwierzeta',
  templateUrl: './sekcja-zwierzeta.component.html',
  styleUrls: ['./sekcja-zwierzeta.component.scss']
})
export class SekcjaZwierzetaComponent implements OnInit {

  theEnd = false;
  memy = this.db.collection('memy', ref => ref.orderBy('dataDodania')
  .where('kategoria', '==', 'Zwierzęta'))
  .snapshotChanges()
  .pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data };
    });
  }));

  constructor(private db: AngularFirestore, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }

}

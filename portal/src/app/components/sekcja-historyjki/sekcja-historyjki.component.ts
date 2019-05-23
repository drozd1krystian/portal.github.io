import { FireStoreServicesService } from './../../services/fire-store-services.service';
import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sekcja-historyjki',
  templateUrl: './sekcja-historyjki.component.html',
  styleUrls: ['./sekcja-historyjki.component.scss']
})
export class SekcjaHistoryjkiComponent implements OnInit {

  theEnd = false;
  memy = this.asf.getMemyZKategori('Historyjki');

  constructor(private asf: FireStoreServicesService, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }

}

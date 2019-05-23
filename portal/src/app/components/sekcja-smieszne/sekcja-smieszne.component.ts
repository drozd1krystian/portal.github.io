import { FireStoreServicesService } from './../../services/fire-store-services.service';
import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sekcja-smieszne',
  templateUrl: './sekcja-smieszne.component.html',
  styleUrls: ['./sekcja-smieszne.component.scss']
})
export class SekcjaSmieszneComponent implements OnInit  {
  theEnd = false;
  memy = this.asf.getMemyZKategori('Śmieszne');

  constructor(private asf: FireStoreServicesService, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }
}

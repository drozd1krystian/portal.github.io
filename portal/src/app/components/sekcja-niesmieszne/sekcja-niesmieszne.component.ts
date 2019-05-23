import { FireStoreServicesService } from './../../services/fire-store-services.service';
import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-sekcja-niesmieszne',
  templateUrl: './sekcja-niesmieszne.component.html',
  styleUrls: ['./sekcja-niesmieszne.component.scss']
})
export class SekcjaNiesmieszneComponent implements OnInit {

  theEnd = false;

  memy = this.asf.getMemyZKategori('Nieśmieszne');
  constructor(private asf: FireStoreServicesService, public mem: MidColumnComponent) {


   }
  ngOnInit() {
  }

}

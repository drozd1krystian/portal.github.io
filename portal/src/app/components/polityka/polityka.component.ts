import { FireStoreServicesService } from './../../services/fire-store-services.service';
import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-polityka',
  templateUrl: './polityka.component.html',
  styleUrls: ['./polityka.component.scss']
})
export class PolitykaComponent implements OnInit {

  theEnd = false;
  memy = this.asf.getMemyZKategori('Polityka');

  constructor(private asf: FireStoreServicesService, public mem: MidColumnComponent) {

   }
  ngOnInit() {
  }

}

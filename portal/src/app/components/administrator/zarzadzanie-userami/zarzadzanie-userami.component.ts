import { Component, OnInit } from '@angular/core';
import { FireStoreServicesService } from 'src/app/services/fire-store-services.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/authentication/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-zarzadzanie-userami',
  templateUrl: './zarzadzanie-userami.component.html',
  styleUrls: ['./zarzadzanie-userami.component.scss']
})
export class ZarzadzanieUseramiComponent implements OnInit {
  userzyZbazy;
  constructor(public fss: FireStoreServicesService, private db: AngularFirestore, public authService: AuthService) { }

  ngOnInit() {
    this.userzyZbazy=this.fss.getUsers();
  }
ban(uid: string){




//   this.db.collection("users").doc(uid).delete().then(function () {

//     console.log("user usuniety z firestora");
//   }).catch(function (error) {
//     console.error("Error removing document: ", error);
//   });


}
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';
import { FireStoreServicesService } from 'src/app/services/fire-store-services.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
awatar;

  constructor(public authService: AuthService, private router: Router, public ffs: FireStoreServicesService, private db: AngularFirestore) {

  }

  ngOnInit() {


  }


  logout() {

    this.authService.logout();
    this.router.navigate(['/']);

  }

}

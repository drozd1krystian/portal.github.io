import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { merge } from 'rxjs';
import { SourceListMap } from 'source-list-map';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  displayNickNameChangeFormBoolean = false;
  checkIfChangeEmail = false;
  constructor(
    public authService: AuthService,
    public afs: AngularFirestore) { }


  ngOnInit() {
  }

  changeNickname(formData: NgForm) {
    console.log('no witam');
    return this.afs
      .collection('users')
      .doc(this.authService.userData.uid)
      .update({ displayName: formData.value.nick }).then(value => {






        this.authService.getUserData().displayName="wojtusiu";
        console.log(this.authService.userData.displayName);
        console.log('updatnieto nickora');
      }).catch(value => {
        console.log('bugi:');
        console.log(value);
      });


  }
  displayNickNameChangeForm() {
    console.log('clicked');
    this.displayNickNameChangeFormBoolean = !this.displayNickNameChangeFormBoolean;
  }
  click() {
    console.log('clicked');
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  displayNickNameChangeFormBoolean = false;
  checkIfChangeEmail = false;
  constructor(public authService: AuthService) { }


  ngOnInit() {
  }

  changeNickname(nick: string) {


  }
  displayNickNameChangeForm() {
    console.log('clicked');
    this.displayNickNameChangeFormBoolean = !this.displayNickNameChangeFormBoolean;
  }
  click(){
    console.log('clicked');
  }
}

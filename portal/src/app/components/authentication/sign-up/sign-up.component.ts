import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signup(formData: NgForm) {
    this.authService.signup(formData.value.email, formData.value.password);
  }

}

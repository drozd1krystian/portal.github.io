import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login(formData: NgForm) {
    this.authService.login(formData.value.email, formData.value.password);
  }

  facebookAuth() {
    this.authService.facebookAuth();
  }
  googleAuth() {
    this.authService.googleAuth();
  }


}

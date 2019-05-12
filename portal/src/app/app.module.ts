import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/authentication/verify-email/verify-email.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SignUpComponent


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

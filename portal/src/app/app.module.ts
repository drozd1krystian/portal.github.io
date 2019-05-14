import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/authentication/verify-email/verify-email.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';

import { MDBBootstrapModule} from 'angular-bootstrap-md'; // Boostrap
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { LeftColumnComponent } from './components/left-column/left-column.component';

import { UploaderComponent } from './components/uploader/uploader.component';
import { UploaderTaskComponent } from './components/uploader/uploader-task/uploader-task.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SignUpComponent,
    NavBarComponent,
    LeftColumnComponent,
    UploaderComponent,
    UploaderTaskComponent,


  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    NavBarComponent,
    LeftColumnComponent
  ],

})
export class AppModule { }

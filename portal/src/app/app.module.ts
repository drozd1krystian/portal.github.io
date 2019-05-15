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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment.prod';
import { MidColumnComponent } from './components/mid-column/mid-column.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { MemyComponent } from './components/memy/memy.component';




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
    MidColumnComponent,
    MemyComponent,


  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

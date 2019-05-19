import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemyComponent } from '../components/memy/memy.component';
import { UploaderComponent } from '../components/uploader/uploader/uploader.component';
import { LoginComponent } from '../components/authentication/login/login.component';
import { SignUpComponent } from '../components/authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../components/authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../components/authentication/verify-email/verify-email.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: MemyComponent },
  { path: 'upload', component: UploaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'verifyEmail', component: VerifyEmailComponent},
  { path: 'user-profile', component: UserProfileComponent}
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

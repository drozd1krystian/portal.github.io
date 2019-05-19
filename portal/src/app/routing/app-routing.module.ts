import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemyComponent } from '../components/memy/memy.component';
import { UploaderComponent } from '../components/uploader/uploader/uploader.component';
import { LoginComponent } from '../components/authentication/login/login.component';
import { SignUpComponent } from '../components/authentication/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: MemyComponent },
  { path: 'upload', component: UploaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { SingleMemComponent } from './../components/single-mem/single-mem.component';
import { SekcjaZwierzetaComponent } from './../components/sekcja-zwierzeta/sekcja-zwierzeta.component';
import { PolitykaComponent } from './../components/polityka/polityka.component';
import { SekcjaHistoryjkiComponent } from './../components/sekcja-historyjki/sekcja-historyjki.component';
import { SekcjaNiesmieszneComponent } from './../components/sekcja-niesmieszne/sekcja-niesmieszne.component';
import { SekcjaNajnowszeComponent } from './../components/sekcja-najnowsze/sekcja-najnowsze.component';
import { SekcjaNajlepszeComponent } from './../components/sekcja-najlepsze/sekcja-najlepsze.component';
import { SekcjaSmieszneComponent } from './../components/sekcja-smieszne/sekcja-smieszne.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemyComponent } from '../components/memy/memy.component';
import { UploaderComponent } from '../components/uploader/uploader/uploader.component';
import { LoginComponent } from '../components/authentication/login/login.component';
import { SignUpComponent } from '../components/authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../components/authentication/forgot-password/forgot-password.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { AuthGuardService } from '../services/authorization/auth.guard.service';
import { SekcjaAdminComponent } from '../components/administrator/sekcja-admin/sekcja-admin.component';


const routes: Routes = [
  { path: '', component: MemyComponent },
  { path: 'upload', component: UploaderComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardService]},
  // { path: '**', component: PageNotFoundComponent },
  { path: 'smieszne', component: SekcjaSmieszneComponent},
  { path: 'najlepsze', component: SekcjaNajlepszeComponent},
  { path: 'najnowsze', component: SekcjaNajnowszeComponent},
  { path: 'niesmieszne', component: SekcjaNiesmieszneComponent},
  { path: 'historyjki', component: SekcjaHistoryjkiComponent},
  { path: 'polityka', component: PolitykaComponent},
  { path: 'zwierzeta', component: SekcjaZwierzetaComponent},
  { path: 'mem/:id', component: SingleMemComponent},
  { path: 'admin', component: SekcjaAdminComponent}
  //{ path: 'admin/zarzadzanieUserami', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

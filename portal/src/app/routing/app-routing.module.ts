import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploaderComponent } from '../components/uploader/uploader.component';

import { AppComponent } from '../app.component';
import { MemyComponent } from '../components/memy/memy.component';

const routes: Routes = [
  { path: '', component: MemyComponent },
  { path: 'upload', component: UploaderComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

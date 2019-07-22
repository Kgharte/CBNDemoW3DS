import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ApplicationsComponent } from './applications/applications.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Apps', component: ApplicationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

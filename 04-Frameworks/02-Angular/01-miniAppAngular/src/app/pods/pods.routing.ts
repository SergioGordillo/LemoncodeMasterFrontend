import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';

import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'crud', component: CrudComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '**', redirectTo: '' },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodsRoutingModule { }
